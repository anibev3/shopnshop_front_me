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
    async get_SHIPPING({ commit }) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.shipping}`)
                .then((response) => {
                    const shipping = response.data.data;
                    console.log('BRANDS', shipping);

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
