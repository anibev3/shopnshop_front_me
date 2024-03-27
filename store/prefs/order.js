// Importez axios pour effectuer des requêtes HTTP
import axios from 'axios';
import useRouter from 'vue-router';
import Api, {
    constant,
    apiEndpoints,
    baseUrl2,
    paymentBaseUrl,
    susscessNavigatienUrl,
} from '~/api';
import {
    isLoggedIn,
    retrieveAndDecryptData,
    encryptAndStoreData,
} from '../../utils/storage/crypto.service';

// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_USER_SIMPLE_ORDER = 'SET_USER_SIMPLE_ORDER';
export const SET_USER_ORDER = 'SET_USER_ORDER';
export const GET_USER_ORDER = 'GET_USER_ORDER';
export const GET_USER_SIMPLE_ORDER = 'GET_USER_SIMPLE_ORDER';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

export function state() {
    return {
        data: [],
        user_order: [],
        user_single_order: null,
        cartAmountState: null,
    };
}

export const getters = {
    cartList: (state) => {
        return state.data;
    },
    GET_USER_ORDER: (state) => {
        return state.user_order;
    },
    GET_USER_SIMPLE_ORDER: (state) => {
        return state.user_single_order;
    },
    totalPrice: (state) => {
        return state.data.reduce((acc, cur) => {
            return acc + cur.price * cur.qty;
        }, 0);
    },
    cartAmount: (state) => {
        return state.cartAmountState;
    },
    totalCount: (state) => {
        // alert(JSON.stringify(stat));
        return state.data.reduce((acc, cur) => {
            return acc + parseInt(cur.quantity, 10);
        }, 0);
    },
};

export const actions = {
    // addToCart: function ({ commit }, payload) {
    //     commit(ADD_TO_CART, payload);

    //     this._vm.$notify({
    //         group: 'addCartSuccess',
    //         text: `a été ajouté à votre panier !`,
    //         data: payload.product,
    //     });
    // },

    makeOrder: async function ({ commit, dispatch }, payload) {
        try {
            await Api.post(`${baseUrl2}${apiEndpoints.order}`, payload)
                .then((response) => {
                    console.log('', response);
                    const orderResponse = response.data.data;
                    encryptAndStoreData(constant.SHIP_BILL_ADDRESS, payload);
                    encryptAndStoreData(constant.ORDER_RESPONSE, orderResponse);

                    const isConnected = isLoggedIn();
                    let userData = null;
                    if (isConnected) {
                        userData = retrieveAndDecryptData(constant.USER_DATA);

                        // --------------------------------------------------

                        const cart = [];

                        orderResponse.items.forEach((item) => {
                            let itemName = '';
                            let itemPrice = 0;
                            let itemQuantity = 0;

                            if (item.product) {
                                itemName = item.product.name;
                                itemPrice = parseInt(item.product.price);
                            } else if (item.variant) {
                                itemName = item.variant.title;
                                itemPrice = parseInt(item.variant.price);
                            }

                            itemQuantity = parseInt(item.quantity);

                            cart.push({
                                name: itemName,
                                price: itemPrice,
                                quantity: itemQuantity,
                            });
                        });
                        cart.push({
                            name: 'Montant taxe',
                            price: orderResponse.tax_amount,
                            quantity: 1,
                        });

                        // --------------------------------------------------

                        const payment_form_data = {
                            cart: cart,
                            email: userData.email,
                        };
                        return dispatch(
                            'makePayment_byStripe',
                            payment_form_data
                        )
                            .then((response) => {
                                console.log('La reponse du paiement', response);
                                const paymentUrl =
                                    response.data.data.session_url;
                                const sessionId = response.data.data.session_id;
                                encryptAndStoreData(
                                    constant.STRIPE_SESSION_ID,
                                    sessionId
                                );

                                return (window.location.href = paymentUrl);
                            })
                            .catch((error) => {
                                console.log('error lors du paiement', error);
                            });
                    }
                })
                .catch((error) => {
                    console.log('ORDER ERROR', error);
                });
        } catch (error) {
            console.error('Erreur globale lors du paiement :', error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // -------------------------------------------------------------

    makePayment_byStripe: async function ({ commit, dispatch }, payload) {
        try {
            const form_data = {
                customer_email: payload.email,
                success_url: `${susscessNavigatienUrl}/pages/checkout`,
                cancel_url: window.location.href,
                cart: payload.cart,
            };

            return axios.post(
                `${paymentBaseUrl}${apiEndpoints.go_to_stripe}`,
                form_data
            );
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // -----------------------------------------
    makePayment_bySH: async function ({ commit, dispatch }, payload) {
        try {
            await Api.post(`${baseUrl2}${apiEndpoints.m_payment}`, payload)
                .then((response) => {
                    console.log('LE PAIEMENT AUPRES DE SH EST OK', response);

                    // const router = useRouter();
                    // return router.push('/pages/order-complete');

                    return this.$router.push({
                        path: '/pages/order-complete',
                        query: {
                            search_term: 'yes',
                            category: 'Tout est accomplit',
                        },
                    });
                })
                .catch((error) => {
                    console.log(
                        'Une grosse error >>>>>>>>>>>>>>>>>>>>>>',
                        error
                    );
                });
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // ------------------------------------------------------------------------

    addToCartFromWishlist: async function ({ commit, dispatch }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                const formData = {
                    user_uuid: userData.uuid,
                    quantity: 1,
                    product_uuid: payload.product.uuid,
                };
                await Api.post(`${baseUrl2}${apiEndpoints.cart}`, formData)
                    .then((response) => {
                        console.log('USER DATA 2', response);
                        // commit(ADD_TO_CART, payload);
                        this._vm.$notify({
                            group: 'addCartSuccess',
                            text: `a été ajouté à votre panier !`,
                            data: payload.product,
                        });

                        return dispatch('getCart');
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // ------------------------------------------------------------------------
    removeFromCart: async function ({ commit, dispatch }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            console.log('ITEM TO DELETE', payload);
            // return;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                let product_uuid = null;
                const formData = {
                    user_uuid: userData.uuid,
                    quantity: payload.product.quantity ?? 1,
                };
                if (payload.product.variant) {
                    product_uuid = payload.product.variant.uuid;
                    formData.variant_uuid = product_uuid;
                } else {
                    product_uuid = payload.product.product.uuid;
                    formData.product_uuid = product_uuid;
                }
                // console.log('ITEM TO DELETE 2', formData);
                // return;
                await Api.post(`${baseUrl2}${apiEndpoints.d_cart}`, formData)
                    .then((response) => {
                        console.log('USER DATA 2', response);
                        // commit(ADD_TO_CART, payload);
                        // this._vm.$notify({
                        //     group: 'addCartSuccess',
                        //     text: `a été retiré de votre panier !`,
                        //     data: payload.product,
                        // });

                        return dispatch('getCart');
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // ------------------------------------------------------------------------
    lessFromCart: async function ({ commit, dispatch }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            // console.log('ITEM TO DELETE', payload);
            // return;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                let product_uuid = null;
                const formData = {
                    user_uuid: userData.uuid,
                    // quantity: payload.product.quantity ?? 1,
                };

                if (payload.variant) {
                    product_uuid = payload.variant.uuid;
                    formData.variant_uuid = product_uuid;
                } else {
                    product_uuid = payload.product.uuid;
                    formData.product_uuid = product_uuid;
                }

                await Api.post(`${baseUrl2}${apiEndpoints.m_cart}`, formData)
                    .then((response) => {
                        console.log('USER DATA 2', response);
                        // commit(ADD_TO_CART, payload);
                        // this._vm.$notify({
                        //     group: 'addCartSuccess',
                        //     text: `a été retiré de votre panier !`,
                        //     data: payload.product,
                        // });

                        return dispatch('getCart');
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error(
                'Erreur lors de la soustraction de quantité aux favoris :',
                error
            );
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // ------------------------------------------------------------------------
    addOneOnCart: async function ({ commit, dispatch }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            // console.log('ITEM TO DELETE', payload);
            // return;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                let product_uuid = null;
                const formData = {
                    user_uuid: userData.uuid,
                    quantity: 1,
                };

                if (payload.variant) {
                    product_uuid = payload.variant.uuid;
                    formData.variant_uuid = product_uuid;
                } else {
                    product_uuid = payload.product.uuid;
                    formData.product_uuid = product_uuid;
                }

                await Api.post(`${baseUrl2}${apiEndpoints.cart}`, formData)
                    .then((response) => {
                        console.log('USER DATA 2', response);
                        // commit(ADD_TO_CART, payload);
                        // this._vm.$notify({
                        //     group: 'addCartSuccess',
                        //     text: `a été retiré de votre panier !`,
                        //     data: payload.product,
                        // });

                        return dispatch('getCart');
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error(
                "rreur lors de l'ajout de quantité aux favoris :",
                error
            );
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },

    // ------------------------------------------------------------------------
    async getCart({ commit }) {
        console.log('cart');
        try {
            const isConnected = isLoggedIn();
            if (isConnected) {
                const userData = retrieveAndDecryptData(constant.USER_DATA);

                await Api.get(
                    `${baseUrl2}${apiEndpoints.g_cart}/${userData.uuid}`
                )
                    .then((response) => {
                        const data = response.data.data;
                        console.log('CartList : >>>>>>>>>>>', data);
                        commit(ADD_TO_CART, data);
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération de la wishlist de l'utilisateur :",
                error
            );
        }
    },

    // ------------------------------------------------------------------------
    async getOrders({ commit }) {
        console.log('cart');
        try {
            const isConnected = isLoggedIn();
            if (isConnected) {
                const userData = retrieveAndDecryptData(constant.USER_DATA);

                await Api.get(
                    `${baseUrl2}${apiEndpoints.g_orders}/${userData.uuid}`
                )
                    .then((response) => {
                        const data = response.data.data;
                        console.log('User order : >>>>>>>>>>>', data);
                        commit(SET_USER_ORDER, data);
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des orders de l'utilisateur :",
                error
            );
        }
    },

    updateCart: function ({ commit }, payload) {
        commit(UPDATE_CART, payload);
    },

    // ------------------------------------------------------------------------

    async getOrder({ commit }, payload) {
        try {
            const isConnected = isLoggedIn();
            if (isConnected) {
                const userData = retrieveAndDecryptData(constant.USER_DATA);

                await Api.get(`${baseUrl2}${apiEndpoints.g_order}${payload}`)
                    .then((response) => {
                        const data = response.data.data;
                        console.log('User simple order : >>>>>>>>>>>', data);
                        commit(SET_USER_SIMPLE_ORDER, data);
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
            }
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des orders de l'utilisateur :",
                error
            );
        }
    },
};

export const mutations = {
    [ADD_TO_CART](state, payload) {
        state.data = payload.items;
        state.cartAmountState = payload.amounts;
    },
    [REMOVE_FROM_CART](state, payload) {
        let index = state.data.findIndex((item) => item.name === payload.name);
        state.data.splice(index, 1);
    },
    [UPDATE_CART](state, payload) {
        state.data = payload.cartItems;
    },
    [SET_USER_ORDER](state, payload) {
        state.user_order = payload;
    },
    [SET_USER_SIMPLE_ORDER](state, payload) {
        state.user_single_order = payload;
    },
};
