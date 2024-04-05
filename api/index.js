import axios from 'axios';

const baseDonmain = 'https://d-themes.com/vue/porto/server';
const baseDonmain2 = 'https://staging.shopnshop-api.sherylux.com/api';
const paymentDonmain = 'https://payment.sherylux.com';
// const prod_url = 'https://sherylux-privee.netlify.app';
const url = 'http://localhost:4000';

// const baseDonmain = 'http://localhost:3000';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const baseUrl = `${baseDonmain}`;
export const baseUrl2 = `${baseDonmain2}`;
export const paymentBaseUrl = `${paymentDonmain}`;
export const susscessNavigatienUrl = `${url}`;

export const currentDemo = 36;

export default axios.create({
    baseUrl,
    headers: customHeader,
});

// -----------------------> Définir les endpoints

// --- CONSTANTS PREFIXE DEFINITION
// g_ : get...
// d_ : delete...
// m_ : make...

const endpoints = {
    login: '/auth/login',
    register: '/auth/register',
    getUser: '/user',

    getCategories: '/categories',
    show_section: '/show-section',

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

    //  ORDER
    order: '/cart_to_order',
    m_payment: '/payments',
    g_orders: '/get_user_order',
    g_order: '/detail_order/',

    //  STRIPE PAYMENT ENDPOINT
    go_to_stripe: '/api/sendtopay',
};

const storageConstant = {
    USER_TOKEN: '0001',
    USER_DATA: '0002',
    STRIPE_SESSION_ID: '0003',
    ORDER_RESPONSE: '0004',
    SHIP_BILL_ADDRESS: '0005',
    PRODUCT_ATTRIBUT: '0006',
    RDV_ATTRIBUT: '0007',
};

// Exportez l'objet contenant les endpoints
export const apiEndpoints = {
    ...endpoints,
};

export const constant = {
    ...storageConstant,
};
