// store/index.js
import {
    state as cartState,
    getters as cartGetters,
    actions as cartActions,
    mutations as cartMutations,
} from './cart';
import {
    state as wishlistState,
    getters as wishlistGetters,
    actions as wishlistActions,
    mutations as wishlistMutations,
} from './wishlist';

export const state = () => ({
    // Votre état global ici
});

export const mutations = {
    // Vos mutations globales ici
};

export const actions = {
    // Vos actions globales ici
};

export const getters = {
    // Vos getters globales ici
};

export const modules = {
    cart: {
        namespaced: true,
        state: cartState,
        getters: cartGetters,
        actions: cartActions,
        mutations: cartMutations,
    },
    wishlist: {
        namespaced: true,
        state: wishlistState,
        getters: wishlistGetters,
        actions: wishlistActions,
        mutations: wishlistMutations,
    },
};
