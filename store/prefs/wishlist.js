export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
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
                return;
            }
            console.log('USER DATA 2', response);
        } catch (error) {
            console.error("Erreur lors de l'ajout aux favoris :", error);
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },
    removeFromWishlist: function ({ commit }, payload) {
        commit(REMOVE_FROM_WISHLIST, payload);
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
};
