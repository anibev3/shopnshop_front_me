import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
// Définir les constantes pour les mutations et les getters
export const SET_SHIPPING = 'SET_SHIPPING';
export const GET_SHIPPING = 'GET_SHIPPING';

export const state = () => ({
    shipping: [], // Initialiser le state des produits
});

export const getters = {
    // Getter pour obtenir les produits
    [GET_SHIPPING](state) {
        return state.shipping;
    },
};

export const mutations = {
    // Mutation pour définir les produits
    [SET_SHIPPING](state, shipping) {
        state.shipping = shipping;
    },
};

export const actions = {
    async add_shipping_address({ commit }, payload) {
        console.log('FETCH DATA A ETE APPELE...', payload);
        try {
            await Api.post(`${baseUrl2}${apiEndpoints.shipping}`, payload)
                .then((response) => {
                    const shipping = response;
                    console.log('SHIPPING RESPONSE', shipping);

                    // commit(SET_SHIPPING, shipping);
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
    async get_shipping_address({ commit }, payload) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.g_shipping}/${payload}`)
                .then((response) => {
                    const shipping = response.data.data;
                    console.log('USER SHIPPING ADDRESS', shipping);

                    commit(SET_SHIPPING, shipping);
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
};
