import axios from 'axios';

import { apiEndpoints, baseUrl2, constant } from '../../api/index';
import { encryptAndStoreData } from '../../utils/storage/crypto.service';
// État initial
export function state() {
    return {
        user: null, // Utilisateur connecté
    };
}

// Mutations pour modifier l'état
export const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    clearUser(state) {
        state.user = null;
    },
};

// Actions pour effectuer des opérations asynchrones
export const actions = {
    // Action pour inscrire un utilisateur
    async registerUser({ commit }, userData) {
        try {
            console.log('LA VALEUR DE USERDATA :::::::::::::::> ', userData);
            const response = await axios.post(
                `${baseUrl2}${apiEndpoints.register}`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('REGISTER RESPONSE', response);
            encryptAndStoreData(constant.USER_TOKEN, response.accessToken);
            // commit('setUser', response.data.user);
            commit('setUser', true);
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
        }
    },
    // Action pour connecter un utilisateur
    async loginUser({ commit }, userData) {
        try {
            // Effectuez une requête API pour la connexion de l'utilisateur
            // Une fois la connexion réussie, appelez la mutation setUser avec les données utilisateur
            // const response = await api.login(userData);
            // commit('setUser', response.data.user);

            commit('setUser', userData);
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
        }
    },
    // Action pour vérifier l'état de connexion de l'utilisateur
    async checkUserStatus({ commit }) {
        try {
            // Vérifiez le stockage ou effectuez une requête API pour vérifier si un utilisateur est connecté
            // Si un utilisateur est connecté, appelez la mutation setUser avec les données utilisateur
            // Sinon, appelez la mutation clearUser pour supprimer l'utilisateur de l'état
        } catch (error) {
            console.error(
                "Erreur lors de la vérification de l'état de l'utilisateur :",
                error
            );
        }
    },
    // Action pour déconnecter un utilisateur
    async logoutUser({ commit }) {
        try {
            // Effectuez une requête API ou supprimez simplement les données utilisateur du stockage
            // Une fois l'utilisateur déconnecté, appelez la mutation clearUser
            commit('clearUser');
        } catch (error) {
            console.error(
                "Erreur lors de la déconnexion de l'utilisateur :",
                error
            );
        }
    },
    // Autres actions...
};
export const getters = {
    isLoggedIn: (state) => {
        // Vérifie si l'utilisateur est connecté en inspectant l'état de la variable user
        return state.user !== null;
    },
    currentUser: (state) => {
        // Renvoie les données de l'utilisateur actuellement connecté
        return state.user;
    },
};
