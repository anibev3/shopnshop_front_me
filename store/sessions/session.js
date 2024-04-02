import axios from 'axios';
import {
    isLoggedIn,
    retrieveAndDecryptData,
} from '../../utils/storage/crypto.service';

import { apiEndpoints, baseUrl2, constant } from '../../api/index';
import { encryptAndStoreData } from '../../utils/storage/crypto.service';
// État initial
export function state() {
    return {
        user: null, // Utilisateur connecté
        userData: null,
        userStatus: false,
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
    SET_USER_DATA(state, payload) {
        state.userData = payload;
    },
    SET_USER_STATUS(state, payload) {
        state.userStatus = payload;
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
            // Effacer tous les éléments stockés dans localStorage

            commit('clearUser');
            return localStorage.clear();
        } catch (error) {
            console.error(
                "Erreur lors de la déconnexion de l'utilisateur :",
                error
            );
        }
    },

    getUserStatus: async function ({ commit }) {
        try {
            const isConnectedSatatus = isLoggedIn();
            commit('SET_USER_STATUS', isConnectedSatatus);
            return isConnectedSatatus;
        } catch (error) {
            console.error(
                'Erreur lors de la verification du status de connexioin :',
                error
            );
        }
    },

    getUserData: async function ({ commit, dispatch }) {
        try {
            const isConnected = isLoggedIn();
            // const isConnected = dispatch('getUserStatus');
            let userData = null;
            if (isConnected) {
                userData = retrieveAndDecryptData(constant.USER_DATA);
                commit('SET_USER_DATA', userData);

                return userData;
            }
        } catch (error) {
            console.error(
                'Erreur lors de la recuperation des données du client :',
                error
            );
            // Gérez les erreurs d'ajout aux favoris si nécessaire
        }
    },
};
export const getters = {
    isLoggedIn: (state) => {
        return state.user !== null;
    },
    currentUser: (state) => {
        return state.user;
    },
    GET_USER_DATA: (state) => {
        return state.userData;
    },
    GET_USER_STATUS: (state) => {
        return state.userStatus;
    },
};
