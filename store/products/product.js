import Api, { baseUrl } from '~/api';

// store/product.js

// Définir les constantes pour les mutations et les getters
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const state = () => ({
    products: [], // Initialiser le state des produits
});

export const mutations = {
    // Mutation pour définir les produits
    [SET_PRODUCTS](state, products) {
        state.products = products;
    },
};

export const actions = {
    async fetchData({ commit }) {
        try {
            const response = await Api.get(`${baseUrl}/demo36`);
            const products = response.data;
            commit(SET_PRODUCTS, products);

            console.log('11111111111111111111:::::::::: > ', response?.data);
        } catch (error) {
            console.error(
                "Erreur lors du chargement des données depuis l'API :",
                error
            );
        }
    },
};

export const getters = {
    // Getter pour obtenir les produits
    [GET_PRODUCTS](state) {
        return state.products;
    },
};
