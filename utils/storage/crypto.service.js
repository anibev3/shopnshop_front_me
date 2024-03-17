import { constant } from '../../api/index';
import CryptoJS from 'crypto-js';

// Clé de chiffrement (vous pouvez la changer selon vos besoins)
const encryptionKey = 'clé-de-chiffrement-secrete';

export function isLoggedIn() {
    const token = retrieveAndDecryptData(constant.USER_TOKEN);
    const user = retrieveAndDecryptData(constant.USER_DATA);
    return token !== null && user !== null;
}

// Fonction pour crypter n'importe quelle donnée et la stocker dans le localStorage
export const encryptAndStoreData = (key, data) => {
    const encryptedData = encryptData(JSON.stringify(data), encryptionKey);
    localStorage.setItem(key, encryptedData);
};

export const retrieveAndDecryptData = (key) => {
    const encryptedData = localStorage.getItem(key);
    if (!encryptedData) return null;

    const decryptedData = decryptData(encryptedData, encryptionKey);
    return JSON.parse(decryptedData);
};

const encryptData = (data, key) => {
    const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
    return encryptedData;
};

// Fonction de décryptage de données avec CryptoJS
const decryptData = (encryptedData, key) => {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(
        CryptoJS.enc.Utf8
    );
    return decryptedData;
};
