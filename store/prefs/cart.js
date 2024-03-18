// Importez axios pour effectuer des requêtes HTTP
import axios from 'axios';
import Api, { constant, apiEndpoints, baseUrl2 } from '~/api';
import {
    isLoggedIn,
    retrieveAndDecryptData,
} from '../../utils/storage/crypto.service';

// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

export function state() {
    return {
        data: [],
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
    totalCount: (state) => {
        return state.data.reduce((acc, cur) => {
            return acc + parseInt(cur.qty, 10);
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

    addToCart: async function ({ commit }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                let product_id = null;

                if (payload.product.variants.length > 0) {
                    product_id = payload.product.selectedVariant.uuid;
                } else {
                    product_id = payload.product.uuid;
                }

                const formData = {
                    user_id: userData.uuid,
                    cartItems: [
                        {
                            variant_id: product_id,
                            quantity: payload.product.qty ?? 1,
                        },
                    ],
                };

                // await Api.post(`${baseUrl2}${apiEndpoints.cart}`, formData)
                //     .then((response) => {
                //         console.log('USER DATA 2', response);
                commit(ADD_TO_CART, payload);
                this._vm.$notify({
                    group: 'addCartSuccess',
                    text: `a été ajouté à votre panier !`,
                    data: payload.product,
                });
                // })
                // .catch((error) => {
                //     console.log('USER DATA 3', error);
                // });
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },
    removeFromCart: function ({ commit }, payload) {
        commit(REMOVE_FROM_CART, payload);
    },
    updateCart: function ({ commit }, payload) {
        commit(UPDATE_CART, payload);
    },
};

export const mutations = {
    [ADD_TO_CART](state, payload) {
        let isAdded =
            state.data.findIndex((item) => item.name === payload.product.name) >
            -1;
        let qty = payload.product.qty ? payload.product.qty : 1;
        payload.product.qty = qty;

        if (isAdded) {
            state.data = state.data.reduce((acc, cur) => {
                if (cur.name === payload.product.name) {
                    acc.push({
                        ...cur,
                        qty: cur.qty + qty,
                    });
                } else {
                    acc.push(cur);
                }

                return acc;
            }, []);
        } else {
            state.data.push(payload.product);
        }
    },
    [REMOVE_FROM_CART](state, payload) {
        let index = state.data.findIndex((item) => item.name === payload.name);
        state.data.splice(index, 1);
    },
    [UPDATE_CART](state, payload) {
        state.data = payload.cartItems;
    },
};
