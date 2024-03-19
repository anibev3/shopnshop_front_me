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
};

export const actions = {
    async registerUser({ commit }) {
        try {
            console.log('LA VALEUR DE USERDATA :::::::::::::::> ', userData);
            const response = await axios.get(
                `${baseUrl2}${apiEndpoints.register}`,
                userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('REGISTER RESPONSE', response);
            commit('setUser', true);
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error);
        }
    },
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
