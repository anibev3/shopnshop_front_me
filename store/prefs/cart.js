// Importez axios pour effectuer des requêtes HTTP
import axios from 'axios';
import Api, { constant, apiEndpoints, baseUrl2 } from '~/api';
import {
    isLoggedIn,
    retrieveAndDecryptData,
    openLoginModal,
} from '../../utils/storage/crypto.service';

// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

export function state() {
    return {
        data: [],
        cartAmountState: null,
    };
}

export const getters = {
    cartList: (state) => {
        return state.data;
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

    addToCart: async function ({ commit, dispatch }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            // let formData = null;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                let product_uuid = null;
                const formData = {
                    user_uuid: userData.uuid,
                    quantity: payload.product.qty ?? 1,
                };
                if (payload.product.variants.length > 0) {
                    product_uuid = payload.product.selectedVariant.uuid;
                    formData.variant_uuid = product_uuid;
                } else {
                    product_uuid = payload.product.uuid;
                    formData.product_uuid = product_uuid;
                }
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
            } else {
                // return openLoginModal();
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout à la cart :", error);
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
    // removeFromCart: function ({ commit }, payload) {
    //     commit(REMOVE_FROM_CART, payload);
    // },
    updateCart: function ({ commit }, payload) {
        commit(UPDATE_CART, payload);
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
};
