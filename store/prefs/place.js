import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
// Définir les constantes pour les mutations et les getters
export const SET_COUNTRY = 'SET_COUNTRY';
export const GET_COUNTRY = 'GET_COUNTRY';

export const state = () => ({
    country: [], // Initialiser le state des produits
});

export const getters = {
    // Getter pour obtenir les produits
    [GET_COUNTRY](state) {
        return state.country;
    },
};

export const mutations = {
    // Mutation pour définir les produits
    [SET_COUNTRY](state, country) {
        state.country = country;
    },
};

export const actions = {
    // async add_billing_address({ commit }, payload) {
    //     console.log('FETCH DATA A ETE APPELE...');
    //     try {
    //         await Api.post(`${baseUrl2}${apiEndpoints.country}`, payload)
    //             .then((response) => {
    //                 const country = response;

    //                 // commit(SET_COUNTRY, country);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     } catch (error) {
    //         console.error(
    //             "Erreur lors du chargement des données depuis l'API :",
    //             error
    //         );
    //     }
    // },
    async get_countries({ commit }) {
        console.log('FETCH DATA A ETE APPELE...');
        try {
            await Api.get(`${baseUrl2}${apiEndpoints.country}`)
                .then((response) => {
                    const country = response.data.data;
                    console.log('COUNTRIES', country);

                    commit(SET_COUNTRY, country);
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
