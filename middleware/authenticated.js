import {
    retrieveAndDecryptData,
    isLoggedIn,
} from '../utils/storage/crypto.service';

export default function ({ store, redirect }) {
    const isConnected = isLoggedIn();
    console.log('LMA VALLEUR DE LA CONNEXION', isConnected);
    if (!isConnected) {
        // const user = retrieveAndDecryptData(constant.USER_DATA);
        return redirect('/');
    }
    // Vérifiez si l'utilisateur est connecté
    // if (!store.state.auth.loggedIn) {
    //     return redirect('/login'); // Redirigez vers la page de connexion
    // }
}
