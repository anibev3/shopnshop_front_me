<template>
    <div class="modal-wrapper login-popup">
        <div class="container">
            <div class="login-register-tabs">
                <div style="margin-top: 30px">
                    <div class="tabs">
                        <a
                            :class="{ active: activeTab === 'login' }"
                            @click.prevent="activeTab = 'login'"
                        >
                            CONNEXION
                        </a>
                        <a
                            :class="{ active: activeTab === 'register' }"
                            @click.prevent="activeTab = 'register'"
                        >
                            JE N'AI PAS DE COMPTE
                        </a>
                    </div>
                    <div class="tab-content">
                        <div v-if="activeTab === 'login'">
                            <br />
                            <p v-if="loginMessage">{{ loginMessage }}</p>
                            <!-- <br /> -->
                            <form @submit.prevent="submitLogin" class="mb-0">
                                <label for="login-email">
                                    Adresse e-mail
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    v-model="loginData.email"
                                    type="email"
                                    class="form-input form-wide mb-2"
                                    id="login-email"
                                    required
                                />
                                <label for="login-password">
                                    Mot de passe
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    v-model="loginData.password"
                                    type="password"
                                    class="form-input form-wide mb-2"
                                    id="login-password"
                                    required
                                />

                                <div class="form-footer">
                                    <div
                                        class="custom-control custom-checkbox ml-0"
                                    >
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="lost-password"
                                            style="border: solid 1px black"
                                        />
                                        <label
                                            class="custom-control-label form-footer-right"
                                            for="lost-password"
                                            >Rester connecté·e.</label
                                        >
                                    </div>
                                    <div class="form-footer-right">
                                        <nuxt-link
                                            to="/pages/forgot-password"
                                            class="forget-password text-dark"
                                            >Mot de passe oublié ?</nuxt-link
                                        >
                                    </div>
                                </div>

                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-dark btn-block btn-md"
                                    >
                                        Connexion
                                    </button>

                                    <nuxt-link
                                        to="/pages/login"
                                        style="font-weight: 500"
                                        class="btn btn-regist bg-transparent text-transform-none p-0"
                                        >Pas encore de compte ?
                                        <span
                                            @click.prevent="
                                                activeTab = 'register'
                                            "
                                            >Inscrivez-vous</span
                                        ></nuxt-link
                                    >
                                </div>
                            </form>
                        </div>
                        <div v-if="activeTab === 'register'">
                            <form
                                @submit.prevent="submitRegistration"
                                class="mb-0"
                            >
                                <label for="login-email">
                                    Nom
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="text"
                                    v-model="registrationData.last_name"
                                    class="form-input form-wide mb-2"
                                    id="login-email"
                                    required
                                />

                                <label for="login-email">
                                    Prenom
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="text"
                                    v-model="registrationData.first_name"
                                    class="form-input form-wide mb-2"
                                    id="login-email"
                                    required
                                />

                                <label for="login-email">
                                    Date de naissance
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="date"
                                    v-model="registrationData.birth_date"
                                    class="form-input form-wide mb-2"
                                    id="login-email"
                                    required
                                />
                                <label for="login-email">
                                    Contact
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="number"
                                    class="form-input form-wide mb-2"
                                    v-model="registrationData.call_phone"
                                    id="login-email"
                                    required
                                />
                                <label for="login-email">
                                    Adresse e-mail
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="email"
                                    class="form-input form-wide mb-2"
                                    v-model="registrationData.email"
                                    id="login-email"
                                    required
                                />

                                <div class="select-custom">
                                    <label>
                                        Pays
                                        <abbr class="required" title="required"
                                            >*</abbr
                                        >
                                    </label>

                                    <select
                                        v-model="selectedCountry"
                                        @change="updateCities"
                                        class="form-control"
                                    >
                                        <option
                                            value=""
                                            unselectable
                                            selected="selected"
                                        >
                                            Sélectionner un pays
                                        </option>
                                        <option
                                            v-for="country in countries"
                                            :value="country.uuid"
                                        >
                                            {{ country.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="select-custom">
                                    <label>
                                        Ville
                                        <abbr class="required" title="required"
                                            >*</abbr
                                        >
                                    </label>

                                    <select
                                        v-model="selectedCity"
                                        @change="updateMunicipalities"
                                        class="form-control"
                                    >
                                        <option value="">
                                            Sélectionner une ville
                                        </option>
                                        <option
                                            v-for="city in cities"
                                            :value="city.uuid"
                                        >
                                            {{ city.name }}
                                        </option>
                                    </select>
                                </div>

                                <div class="select-custom">
                                    <label>
                                        Commune/Quartier
                                        <abbr class="required" title="required"
                                            >*</abbr
                                        >
                                    </label>

                                    <select
                                        v-model="
                                            registrationData.municipality_uuid
                                        "
                                        class="form-control"
                                    >
                                        <option value="">
                                            Sélectionner une municipalité
                                        </option>
                                        <option
                                            v-for="municipality in municipalities"
                                            :value="municipality.uuid"
                                        >
                                            {{ municipality.name }}
                                        </option>
                                    </select>
                                </div>

                                <label for="login-email">
                                    Adresse
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="text"
                                    class="form-input form-wide mb-2"
                                    v-model="registrationData.address"
                                    id="login-email"
                                    required
                                />

                                <label for="login-password">
                                    Mot de passe
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="password"
                                    class="form-input form-wide mb-2"
                                    id="login-password"
                                    v-model="registrationData.password"
                                    required
                                />

                                <label for="login-password">
                                    Confirmer le mot de passe
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
                                    type="password"
                                    class="form-input form-wide mb-2"
                                    id="login-password"
                                    v-model="registrationData.c_password"
                                    required
                                />

                                <div class="form-footer">
                                    <div
                                        class="custom-control custom-checkbox ml-0"
                                    >
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="lost-password"
                                            style="border: solid 1px black"
                                        />
                                        <label
                                            class="custom-control-label form-footer-right"
                                            for="lost-password"
                                            >En vous inscrivant, vous acceptez
                                            nos Termes & conditions, Politiques
                                            de confidentialité et de gestion des
                                            cookies, et de rejoindre nos
                                            programme de fidélité</label
                                        >
                                    </div>
                                    <!-- <div class="form-footer-right">
                                        <nuxt-link
                                            to="/pages/forgot-password"
                                            class="forget-password text-dark"
                                            >Mot de passe oublié ?</nuxt-link
                                        >
                                    </div> -->
                                </div>

                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-dark btn-block btn-md"
                                    >
                                        Inscription
                                    </button>

                                    <nuxt-link
                                        to="/pages/login"
                                        style="font-weight: 500"
                                        class="btn btn-regist bg-transparent text-transform-none p-0"
                                        >Vous avez un compte ?
                                        <span
                                            @click.prevent="activeTab = 'login'"
                                        >
                                            Connectez-vous
                                        </span>
                                    </nuxt-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button
            title="Close (Esc)"
            type="button"
            class="mfp-close"
            @click="$emit('close')"
        >
            ×
        </button>
    </div>
</template>

<script>
// session.vue
import { mapState, mapActions, mapGetters } from 'vuex';
import Api, { baseUrl2, apiEndpoints, constant } from '~/api';
import {
    encryptAndStoreData,
    isLoggedIn,
    retrieveAndDecryptData,
} from '../../../utils/storage/crypto.service';

export default {
    data() {
        return {
            activeTab: 'login', // Onglet actif par défaut
            municipality_list: [],
            country_list: [],
            city_list: [],
            loginMessage: '',
            registrationData: {
                email: '',
                last_name: '',
                first_name: '',
                birth_date: '',
                address: '',
                call_phone: '',
                whatsapp_number: '0102030405',
                password: '',
                c_password: '',
                municipality_uuid: '',
            },
            userData: null,
            loginData: {
                email: '',
                password: '',
            },
            countries: [], // Pour stocker les pays
            selectedCountry: null, // Pour stocker le pays sélectionné
            cities: [], // Pour stocker les villes en fonction du pays sélectionné
            selectedCity: null, // Pour stocker la ville sélectionnée
            municipalities: [], // Pour stocker les municipalités en fonction de la ville sélectionnée
            selectedMunicipality: null, // Pour stocker la municipalité sélectionnée
        };
    },
    computed: {
        ...mapState(['user']), // Utilisez l'état global de l'application dans vos computed
        ...mapGetters('session', ['isLoggedIn']), // Importez le getter isLoggedIn du module Vuex
    },
    methods: {
        ...mapActions('session', ['registerUser']),
        async submitRegistration() {
            try {
                console.log(this.registrationData);
                await this.registerUser(this.registrationData); // Appel de l'action registerUser avec les données du formulaire
                if (this.isLoggedIn) {
                    // this.$router.push({ name: 'login' });
                    // Changer l'onglet actif pour 'login'
                    this.activeTab = 'login';
                    // Afficher un message dans le tab de login
                    this.loginMessage =
                        'Inscription réussie! Veuillez vous connecter.';
                }
            } catch (error) {
                // Gérer les erreurs d'inscription
                console.error("Erreur lors de l'inscription :", error);
            }
        },

        async submitLogin() {
            try {
                Api.post(`${baseUrl2}${apiEndpoints.login}`, this.loginData)
                    .then(async (response) => {
                        const token = response.data.accessToken;
                        encryptAndStoreData(constant.USER_TOKEN, token);
                        await this.getUserData(token);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
            }
        },

        async getUserData(token) {
            try {
                Api.get(`${baseUrl2}${apiEndpoints.user}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(async (response) => {
                        console.log(response.data);
                        this.userData = response.data;
                        encryptAndStoreData(constant.USER_DATA, response.data);
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
            }
        },

        // Fonction pour charger les données depuis votre API
        async loadDataFromAPI() {
            try {
                Api.get(`${baseUrl2}${apiEndpoints.country}`)
                    .then((response) => {
                        this.countries = response?.data?.data;
                        console.log('COUNTRY LIST :', this.countries);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
            }
        },
        // Fonction pour mettre à jour les villes en fonction du pays sélectionné
        updateCities() {
            if (this.selectedCountry) {
                const selectedCountry = this.countries.find(
                    (country) => country.uuid === this.selectedCountry
                );
                this.cities = selectedCountry.cities;
            } else {
                this.cities = []; // Réinitialiser les villes si aucun pays n'est sélectionné
            }
            this.selectedCity = null; // Réinitialiser la sélection de la ville
            this.municipalities = []; // Réinitialiser les municipalités
            this.selectedMunicipality = null; // Réinitialiser la sélection de la municipalité
        },
        // Fonction pour mettre à jour les municipalités en fonction de la ville sélectionnée
        updateMunicipalities() {
            if (this.selectedCity) {
                const selectedCity = this.cities.find(
                    (city) => city.uuid === this.selectedCity
                );
                this.municipalities = selectedCity.municipalities;
            } else {
                this.municipalities = []; // Réinitialiser les municipalités si aucune ville n'est sélectionnée
            }
            this.selectedMunicipality = null; // Réinitialiser la sélection de la municipalité
        },
    },
    mounted() {
        this.loadDataFromAPI(); // Appeler la fonction pour charger les données depuis votre API lors du montage du composant
    },
};
</script>

<style scoped>
select {
    height: 42px !important;
    border-radius: 10px !important;
    border-color: #1c1818;
}
label {
    font-size: 1.4rem;
    color: black;
}
.form-input {
    height: 42px;
    border-radius: 10px !important;
    border-color: #1c1818;
}
.login-popup .btn-block {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    padding: 1.5rem 2.4rem;
    letter-spacing: -0.02em;
    border-radius: 10px !important;
}
.login-register-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    /* background-color: #f5f5f5; */
    border-radius: 8px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.tabs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}

.tabs a {
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: rgb(150, 147, 147);
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease, border-bottom-color 0.3s ease; /* Ajout de la transition */
}

.tabs a.active {
    color: black;
    border-bottom-color: #000000;
}

.tab-content {
    width: 100%;
    /* padding: 20px; */
    background-color: white;
    border-radius: 4px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.login-popup .btn-regist {
    margin-top: 3.6rem !important;
    font-size: 1.23rem;
    letter-spacing: -0.005em;
}
.container {
    padding: -0.09999999999999964rem 3.6rem 4.7rem !important;
}

.mb-2 {
    margin-bottom: 1.1rem !important;
}
</style>
