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
                            <form action="#" class="mb-0">
                                <label for="login-email">
                                    Adresse e-mail
                                    <!-- <span class="required">*</span> -->
                                </label>

                                <input
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
                                    v-model="registrationData.name"
                                    class="form-input form-wide mb-2"
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
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            activeTab: 'login', // Onglet actif par défaut

            registrationData: {
                name: '',
                email: '',
                password: '',
            },
        };
    },
    computed: {
        ...mapState(['user']), // Utilisez l'état global de l'application dans vos computed
    },
    methods: {
        ...mapActions('session', ['registerUser']),
        async submitRegistration() {
            try {
                // console.log(this.registrationData);
                await this.registerUser(this.registrationData); // Appel de l'action registerUser avec les données du formulaire
                // Rediriger l'utilisateur après une inscription réussie si nécessaire
            } catch (error) {
                // Gérer les erreurs d'inscription
                console.error("Erreur lors de l'inscription :", error);
            }
        },
    },
};
</script>

<style scoped>
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
