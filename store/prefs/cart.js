import axios from 'axios';
import { apiEndpoints } from '~/api';

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
            // {
            //     "user_id": 10,
            //     "cartItems": [
            //         {
            //             "variant_id": 39,
            //             "quantity": 1
            //         },
            //         {
            //             "variant_id": 47,
            //             "quantity": 3
            //         }

            //     ]
            // }
            console.log('LA VALEUR DE LA CART ::::::::::::::>  ', payload);
            commit(ADD_TO_CART, payload);

            // const response = await axios.post(apiEndpoints.storeCart, payload);

            // if (response.status === 200) {
            //     commit(ADD_TO_CART, { product: payload.product });
            // this._vm.$notify({
            //     group: 'addCartSuccess',
            //     text: `Le produit a été ajouté à votre panier !`,
            //     data: payload.product,
            // });
            // } else {
            //     console.error(
            //         "Erreur lors de l'ajout au panier :",
            //         response.statusText
            //     );
            // }
        } catch (error) {
            console.error("Erreur lors de l'ajout au panier :", error);
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
