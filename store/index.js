// store/index.js
import {
    state as cartState,
    getters as cartGetters,
    actions as cartActions,
    mutations as cartMutations,
} from './prefs/cart';
import {
    state as sessionState,
    getters as sessionGetters,
    actions as sessionActions,
    mutations as sessionMutations,
} from './sessions/session';
import {
    state as wishlistState,
    getters as wishlistGetters,
    actions as wishlistActions,
    mutations as wishlistMutations,
} from './prefs/wishlist';
import {
    state as productState,
    getters as productGetters,
    actions as productActions,
    mutations as productMutations,
} from './products/product';

import {
    state as brandState,
    getters as brandGetters,
    actions as brandActions,
    mutations as brandMutations,
} from './prefs/brand';

import {
    state as billingState,
    getters as billingGetters,
    actions as billingActions,
    mutations as billingMutations,
} from './prefs/billing';

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
    session: {
        namespaced: true,
        state: sessionState,
        getters: sessionGetters,
        actions: sessionActions,
        mutations: sessionMutations,
    },
    wishlist: {
        namespaced: true,
        state: wishlistState,
        getters: wishlistGetters,
        actions: wishlistActions,
        mutations: wishlistMutations,
    },
    product: {
        namespaced: true,
        state: productState,
        getters: productGetters,
        actions: productActions,
        mutations: productMutations,
    },

    brand: {
        namespaced: true,
        state: brandState,
        getters: brandGetters,
        actions: brandActions,
        mutations: brandMutations,
    },
    billing: {
        namespaced: true,
        state: billingState,
        getters: billingGetters,
        actions: billingActions,
        mutations: billingMutations,
    },
};
