import axios from 'axios';

const baseDonmain = 'https://d-themes.com/vue/porto/server';
const baseDonmain2 = 'https://staging.shopnshop-api.sherylux.com/api';
// const baseDonmain = 'http://localhost:3000';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = `${baseDonmain}`;
export const baseUrl2 = `${baseDonmain2}`;
export const currentDemo = 36;

export default axios.create({
    baseUrl,
    headers: customHeader,
});

// -----------------------> Définir les endpoints
const endpoints = {
    login: '/auth/login',
    register: '/auth/register',
    getUser: '/user',
    getCategories: '/categories',
    municipalities: '/municipalities',
    country: '/countries',
    city: '/cities',
    user: '/auth/user',
    cart: '/add_to_cart',
    g_cart: '/get_user_cart',
    d_cart: '/del_in_cart',
    m_cart: '/less_in_cart',
    userCart: '/cart/user',
    products: '/products',
    product: '/products/',
    wishlist: '/wishlist',
    brands: '/brands',
    billing: '/billing',
    shipping: '/add_shipping',
    g_shipping: '/get_user_shippings_addresses',
    // Ajoutez d'autres endpoints selon vos besoins
};

const storageConstant = {
    USER_TOKEN: '0001',
    USER_DATA: '0002',
};

// Exportez l'objet contenant les endpoints
export const apiEndpoints = {
    ...endpoints,
};

export const constant = {
    ...storageConstant,
};
