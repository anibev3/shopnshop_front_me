import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
// Définir les constantes pour les mutations et les getters
export const SET_BRANDS = 'SET_BRANDS';
export const GET_BRANDS = 'GET_BRANDS';

export const state = () => ({
    brands: [], // Initialiser le state des produits
});

export const getters = {
    // Getter pour obtenir les produits
    [GET_BRANDS](state) {
        return state.brands;
    },
};

export const mutations = {
    // Mutation pour définir les produits
    [SET_BRANDS](state, brands) {
        state.brands = brands;
    },
};

export const actions = {
    async get_brands({ commit }) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.brands}`)
                .then((response) => {
                    const brands = response.data.data;
                    console.log('BRANDS', brands);

                    commit(SET_BRANDS, brands);
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
