import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
import {
    isLoggedIn,
    retrieveAndDecryptData,
} from '../../utils/storage/crypto.service';

// Définir les constantes pour les mutations et les getters
export const SET_BILLING = 'SET_BILLING';
export const GET_BILLING = 'GET_BILLING';

export const state = () => ({
    billing: [], // Initialiser le state des produits
});

export const getters = {
    // Getter pour obtenir les produits
    [GET_BILLING](state) {
        return state.billing;
    },
};

export const mutations = {
    // Mutation pour définir les produits
    [SET_BILLING](state, billing) {
        state.billing = billing;
    },
};

export const actions = {
    async add_billing_address({ commit, dispatch }, payload) {
        console.log('FETCH DATA A ETE APPELE...');
        const isConnected = isLoggedIn();
        let userData = null;
        try {
            await Api.post(`${baseUrl2}${apiEndpoints.billing}`, payload)
                .then((response) => {
                    const billing = response;
                    console.log('BILLING RESPONSE', billing);

                    // let formData = null;
                    if (isConnected) {
                        userData = retrieveAndDecryptData(constant.USER_DATA);

                        return dispatch('get_billing_address', userData.uuid);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error(
                "Erreur lors du chargement des données depuis l'API :",
                error
            );
        }
    },
    async get_billing_address({ commit }, payload) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.billing}/${payload}`)
                .then((response) => {
                    const billing = response.data.data;
                    console.log('USER BILLING ADDRESS', billing);

                    commit(SET_BILLING, billing);
                    return billing;
                })
                .catch((error) => {
                    console.log('kjjk', error);
                    commit(SET_BILLING, false);
                });
        } catch (error) {
            console.error(
                "Erreur lors du chargement des données depuis l'API :",
                error
            );
        }
    },
};
