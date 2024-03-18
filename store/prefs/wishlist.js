export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const SET_WISHLIST = 'SET_WISHLIST';
// Importez axios pour effectuer des requêtes HTTP
import axios from 'axios';
import Api, { constant, apiEndpoints, baseUrl2 } from '~/api';
import {
    isLoggedIn,
    retrieveAndDecryptData,
} from '../../utils/storage/crypto.service';

export const state = () => ({
    data: [],
});

export const getters = {
    wishList: (state) => {
        return state.data;
    },
};

export const actions = {
    // removeFromWishlist: function ({ commit }, payload) {
    //     console.log('WISHLIST DELETE', payload);
    //     const payload_ = {
    //         product: {
    //             uuid: payload,
    //         },
    //     };
    //     this.addToWishlist(payload_);
    //     // commit(REMOVE_FROM_WISHLIST, payload);
    // },

    removeFromWishlist: async function ({ dispatch }, payload) {
        console.log('WISHLIST DELETE', payload);
        const payload_ = {
            product: {
                uuid: payload,
            },
        };
        await dispatch('addToWishlist', payload_);
        window.location.reload();
    },
    addToWishlist: async function ({ commit }, payload) {
        try {
            const isConnected = isLoggedIn();
            let userData = null;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                const formData = {
                    user_uuid: userData.uuid,
                    product_uuid: payload.product.uuid,
                };

                await Api.post(`${baseUrl2}${apiEndpoints.wishlist}`, formData)
                    .then((response) => {
                        commit(ADD_TO_WISHLIST, payload);
                    })
                    .catch((error) => {
                        console.log('USER DATA 3', error);
                    });
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
        }
    },

    // ------------------------------------------------------------------------
    async getWishlist({ commit }) {
        try {
            const isConnected = isLoggedIn();
            if (isConnected) {
                const userData = retrieveAndDecryptData(constant.USER_DATA);

                await Api.get(
                    `${baseUrl2}${apiEndpoints.wishlist}/${userData.uuid}`
                )
                    .then((response) => {
                        const data = response.data.data.items;
                        console.log('La liste des : >>>>>>>>>>>', data);
                        commit(SET_WISHLIST, data);
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
};

export const mutations = {
    [ADD_TO_WISHLIST](state, payload) {
        let isAdded =
            state.data.findIndex((item) => item.name === payload.product.name) >
            -1;
        if (!isAdded) {
            state.data.push(payload.product);
        }
    },
    [REMOVE_FROM_WISHLIST](state, payload) {
        let index = state.data.findIndex((item) => item.id === payload.id);
        state.data.splice(index, 1);
    },

    [SET_WISHLIST](state, wishlist) {
        state.data = wishlist;
    },
};
