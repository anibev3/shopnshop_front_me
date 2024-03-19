import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
import {
    getProductsByAttri,
    getTopSellingProducts,
    getTopRatedProducts,
    filterProductsByCollection,
} from '~/utils/service';

// store/product.js

// Définir les constantes pour les mutations et les getters
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

export const SET_PRODUCT = 'SET_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
// Catégories
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const SET_EXCLU_PRODUCTS = 'SET_EXCLU_PRODUCTS';
export const GET_EXCLU_PRODUCTS = 'GET_EXCLU_PRODUCTS';

export const SET_SECOND_HAND_PRODUCTS = 'SET_SECOND_HAND_PRODUCTS';
export const GET_SECOND_HAND_PRODUCTS = 'GET_SECOND_HAND_PRODUCTS';

export const SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS';
export const GET_NEW_PRODUCTS = 'GET_NEW_PRODUCTS';

export const SET_LAST_CHANCE_PRODUCTS = 'SET_LAST_CHANCE_PRODUCTS';
export const GET_LAST_CHANCE_PRODUCTS = 'GET_LAST_CHANCE_PRODUCTS';

export const SET_TOP_RATING_PRODUCTS = 'SET_TOP_RATING_PRODUCTS';
export const GET_TOP_RATING_PRODUCTS = 'GET_TOP_RATING_PRODUCTS';

export const state = () => ({
    products: [], // Initialiser le state des produits
    product: null, // Initialiser le state des produits
    categories: [], // Initialiser le state des produits
    exclusivities_products: [], // Initialiser le state des produits
    second_hand_products: [], // Initialiser le state des produits
    new_products: [], // Initialiser le state des produits
    last_chance_product: [], // Initialiser le state des produits
    top_rating_product: [], // Initialiser le state des produits
});

export const getters = {
    // Getter pour obtenir les produits
    [GET_PRODUCTS](state) {
        return state.products;
    },
    [GET_PRODUCT](state) {
        return state.product;
    },
    [GET_CATEGORIES](state) {
        return state.categories;
    },
    [GET_EXCLU_PRODUCTS](state) {
        return state.exclusivities_products;
    },
    [GET_SECOND_HAND_PRODUCTS](state) {
        return state.second_hand_products;
    },
    [GET_NEW_PRODUCTS](state) {
        return state.new_products;
    },
    [GET_LAST_CHANCE_PRODUCTS](state) {
        return state.last_chance_product;
    },
    [GET_TOP_RATING_PRODUCTS](state) {
        return state.top_rating_product;
    },
};

export const mutations = {
    // Mutation pour définir les produits
    [SET_PRODUCTS](state, products) {
        state.products = products;
        state.exclusivities_products = filterProductsByCollection(
            products,
            'exclusivites'
        );
        state.second_hand_products = filterProductsByCollection(
            products,
            'nouveautes'
        );
        state.new_products = filterProductsByCollection(
            products,
            'derniere-chance'
        );
        state.last_chance_product = filterProductsByCollection(
            products,
            'luxe-seconde-main'
        );
        state.top_rating_product = filterProductsByCollection(
            products,
            'prochainement'
        );
    },

    [SET_CATEGORIES](state, categories) {
        state.categories = categories;
    },
    [SET_PRODUCT](state, product) {
        state.product = product;
    },
};

export const actions = {
    async get_products({ commit }) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.products}`)
                .then((response) => {
                    const products = response.data.data;
                    console.log('GETTER', products);

                    commit(SET_PRODUCTS, products);
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

    async get_categories({ commit }) {
        console.log('FETCH CATEGORIES A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.getCategories}`)
                .then((response) => {
                    const categories = response.data.data;
                    commit(SET_CATEGORIES, categories);
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
    async getProduct({ commit }, payload) {
        Api.get(`${baseUrl2}${apiEndpoints.product}${payload}`, {
            params: { quick_view: true },
        })
            .then((response) => {
                const product = response.data.data;
                commit(SET_PRODUCT, product);

                console.log('LE SEUL PRODUIT', product);
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
    },
};
