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
    // Ajoutez d'autres endpoints selon vos besoins
};

// Exportez l'objet contenant les endpoints
export const apiEndpoints = {
    ...endpoints,
};
