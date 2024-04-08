<template>
    <main class="main">
        <div
            class="page-header page-header-bg text-left"
            style="background: 50% / cover #d4e1ea"
            v-lazy:background-image="'./images/page-header-bg.jpg'"
        >
            <div class="container">
                <h1><span>ABOUT US</span>OUR COMPANY</h1>
                <nuxt-link to="/pages/contact-us" class="btn btn-dark"
                    >Contact</nuxt-link
                >
            </div>
        </div>

        <!-- <div class="mb-8"></div> -->
        <div class="about-section">
            <div class="container">
                <h2 class="subtitle">OUR STORY</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <p class="lead">
                    “ Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model search for evolved
                    over sometimes by accident, sometimes on purpose ”
                </p>
            </div>
        </div>

        <div class="features-section bg-gray">
            <div class="container">
                <h2 class="subtitle">
                    Historique DEMANDE D'ASSISTANCE EN COURS
                </h2>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="feature-box bg-white">
                            <div class="d-flex">
                                <div
                                    class="justify-content-center text-center items-align-center"
                                    v-if="!appointments"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                    >
                                        <g stroke="currentColor">
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="9.5"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-width="3"
                                            >
                                                <animate
                                                    attributeName="stroke-dasharray"
                                                    calcMode="spline"
                                                    dur="1.5s"
                                                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                                    keyTimes="0;0.475;0.95;1"
                                                    repeatCount="indefinite"
                                                    values="0 150;42 150;42 150;42 150"
                                                />
                                                <animate
                                                    attributeName="stroke-dashoffset"
                                                    calcMode="spline"
                                                    dur="1.5s"
                                                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                                    keyTimes="0;0.475;0.95;1"
                                                    repeatCount="indefinite"
                                                    values="0;-16;-59;-59"
                                                />
                                            </circle>
                                            <animateTransform
                                                attributeName="transform"
                                                dur="2s"
                                                repeatCount="indefinite"
                                                type="rotate"
                                                values="0 12 12;360 12 12"
                                            />
                                        </g>
                                    </svg>
                                    <h5>
                                        Obtentions des démande d'assistance en
                                        cours
                                    </h5>
                                </div>
                                <div
                                    class="col-md-8 timeline col-exp"
                                    v-if="appointments"
                                >
                                    <div class="timeline-year">
                                        <div
                                            v-for="(
                                                appointment, index
                                            ) in appointments"
                                            :key="index"
                                            @click="
                                                getAppointment(appointment.uuid)
                                            "
                                            style="cursor: pointer"
                                        >
                                            <time datetime="2016"
                                                >#{{
                                                    appointment.uuid.slice(0, 6)
                                                }}</time
                                            >
                                            <div class="timeline-experience">
                                                <span
                                                    class="timeline-circle"
                                                ></span>
                                                <div
                                                    class="timeline-experience-img"
                                                >
                                                    <img
                                                        :src="
                                                            appointment.brand
                                                                .logo
                                                        "
                                                        alt="BNP Paribas"
                                                    />
                                                </div>
                                                <div
                                                    class="timeline-experience-info clear-after"
                                                >
                                                    <h5>
                                                        {{
                                                            appointment.category
                                                                .name
                                                        }}
                                                    </h5>
                                                    <div class="timeline-role">
                                                        {{
                                                            appointment.libelle
                                                        }}
                                                        -
                                                        <span
                                                            style="
                                                                font-size: 10px;
                                                                background-color: blue;
                                                                color: white;
                                                                padding-left: 10px;
                                                                padding-right: 10px;
                                                                border-radius: 4px;
                                                            "
                                                        >
                                                            {{
                                                                getStatus(
                                                                    appointment.status
                                                                )
                                                            }}
                                                        </span>
                                                    </div>
                                                    <p>
                                                        {{
                                                            formatDate(
                                                                appointment.date
                                                            )
                                                        }}
                                                        {{ appointment.time }}
                                                    </p>
                                                </div>
                                                <!-- experience-info -->
                                            </div>
                                        </div>
                                        <!-- experience -->

                                        <!-- experience -->
                                    </div>
                                </div>
                            </div>

                            <!-- <i class="icon-shipped"></i>
                            <div class="feature-box-content p-0">
                                <h3>Free Shipping</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industr.
                                </p>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature-box bg-white">
                            <div
                                class="justify-content-center text-center items-align-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <g stroke="currentColor">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9.5"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-width="3"
                                        >
                                            <animate
                                                attributeName="stroke-dasharray"
                                                calcMode="spline"
                                                dur="1.5s"
                                                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                                keyTimes="0;0.475;0.95;1"
                                                repeatCount="indefinite"
                                                values="0 150;42 150;42 150;42 150"
                                            />
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                calcMode="spline"
                                                dur="1.5s"
                                                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                                                keyTimes="0;0.475;0.95;1"
                                                repeatCount="indefinite"
                                                values="0;-16;-59;-59"
                                            />
                                        </circle>
                                        <animateTransform
                                            attributeName="transform"
                                            dur="2s"
                                            repeatCount="indefinite"
                                            type="rotate"
                                            values="0 12 12;360 12 12"
                                        />
                                    </g>
                                </svg>
                                <h5>
                                    Obtentions des démande d'assistance en cours
                                </h5>
                            </div>
                            <!-- <div class="">
                                <h3>Résumé de votre réservation</h3>
                                <hr />
                                <div class="reservation-details">
                                    <div class="d-flex justify-content-center">
                                        <h4>Personnal shopper</h4>
                                    </div>
                                    <p><strong>Date :</strong> [Date]</p>
                                    <p><strong>Heure :</strong> [Heure]</p>
                                    <p>
                                        <strong
                                            >Type de prise en charge :</strong
                                        >
                                        [Type de prise en charge]
                                    </p>
                                    <hr />
                                    <div class="d-flex justify-content-center">
                                        <h4>INFORMATIONS</h4>
                                    </div>

                                    <p><strong>Status :</strong> [Nom]</p>
                                    <p><strong>Durée :</strong> [Email]</p>
                                    
                                </div>
                                <hr />
                                <div class="buttons">
                                    <button
                                        class="btn"
                                        onclick="window.location.href='formulaire.html'"
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-8"></div>
    </main>
</template>

<script>
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import * as VueGoogleMaps from 'vue2-google-maps';
import { axios } from 'axios';
import {
    retrieveAndDecryptData,
    encryptAndStoreData,
    isLoggedIn,
} from '~/utils/storage/crypto.service';
import Api, { baseUrl2, apiEndpoints, constant } from '~/api';

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
        libraries: 'places',
    },
});

export default {
    components: {
        VueSlideToggle,
    },
    data: function () {
        return {
            toggleState: [true, false, false, false, false],
            isGetingAppointments: false,
            isGetingAppointment: false,
            appointments: null,
            appointment: null,
        };
    },
    created() {
        this.getUserAppointments();
    },
    methods: {
        changeToggle: function (index) {
            let tmp = this.toggleState[index];
            this.toggleState.fill(false);
            this.toggleState[index] = !tmp;
            this.toggleState = [...this.toggleState];
        },

        async getUserAppointments() {
            this.isGetingAppointments = true;

            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                const user = retrieveAndDecryptData(constant.USER_DATA);

                try {
                    Api.get(
                        `${baseUrl2}${apiEndpoints.g_appointments}/${user.uuid}`,
                        {
                            headers: {
                                // Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    )
                        .then(async (response) => {
                            this.appointments = response.data.data;
                            console.log(this.appointments);
                        })
                        .catch((error) => {
                            console.log(error);
                            this.isGetingAppointments = false;
                        });
                } catch (error) {
                    console.error(
                        "Erreur lors du chargement des données depuis l'API :",
                        error
                    );
                    this.isGetingAppointments = false;
                }
            }
        },

        async getAppointment(appointment_uuid) {
            this.isGetingAppointment = true;

            try {
                await Api.get(
                    `${baseUrl2}${apiEndpoints.p_appointments}/${appointment_uuid}`,
                    {
                        headers: {
                            // Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                )
                    .then(async (response) => {
                        this.appointment = response.data.data;
                        console.log(this.appointment);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isGetingAppointment = false;
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isGetingAppointment = false;
            }
        },

        getStatus(status) {
            console.log(status);
            if (status === 'pending') {
                return 'En Attente';
            } else if (status === 'confirmed') {
                return 'Confirmé';
            } else {
                return 'Non défini';
            }
        },

        formatDate(dateString) {
            const months = [
                'Jan.',
                'Fév.',
                'Mar.',
                'Avr.',
                'Mai',
                'Juin',
                'Juil.',
                'Août',
                'Sept.',
                'Oct.',
                'Nov.',
                'Déc.',
            ];

            const date = new Date(dateString);
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            return `${day} ${month} ${year}`;
        },
    },
};
</script>

<style scoped>
/* .feature-box-new {
    display: inline-block;
    margin-bottom: 2.2rem;
    color: rgb(132, 18, 132);
    font-size: 2.2rem;
    line-height: 1;
} */

/* body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
} */

.container-ner {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
    color: #333;
}

.reservation-details {
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}

/* body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
} */

h2 {
    color: #008080;
    font-weight: 700;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    text-transform: lowercase;
}

h2:after {
    content: '';
    width: 50px;
    height: 3px;
    background: #40e0d0;
    display: block;
    margin: 15px auto;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

h2:hover:after {
    width: 100px;
}

h3,
h4,
h5 {
    font-family: 'Montserrat', sans-serif;
}

/* SCROLL TO TOP ARROW */

#return-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(64, 224, 208, 0.8);
    width: 50px;
    height: 50px;
    display: block;
    text-decoration: none;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    border-radius: 35px;
    display: none;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 999;
}

#return-to-top span {
    color: #fff;
    margin: 0;
    position: relative;
    left: 16px;
    top: 13px;
    font-size: 19px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

#return-to-top:hover {
    background: rgba(64, 224, 208, 1);
}

#return-to-top:hover span {
    color: #fff;
    top: 5px;
}

/* END SCROLL TO TOP ARROW */

/* START PRELOADER */

#preloader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #008080;
    z-index: 99;
    height: 100%;
}

#status {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url(http://marinamarques.pt/img/preloader.gif);
    background-repeat: no-repeat;
    background-position: center;
    margin: -100px 0 0 -100px;
}

/* END PRELOADER */

/* start header */

.navbar-fixed-top {
    background-color: #008080;
}

.navbar-brand {
    padding: 0px 15px;
    height: 56px;
    margin-left: 0;
}

.navbar {
    margin-bottom: 0px;
    border: none;
}

.navbar-inverse .navbar-toggle:focus,
.navbar-inverse .navbar-toggle:hover {
    background-color: #40e0d0;
}

.navbar-inverse .navbar-toggle {
    border: none;
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
    border: none;
}

.navbar-toggle .icon-bar {
    width: 35px;
    height: 5px;
}

#ResponsiveNav li a {
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-family: 'Roboto', sans-serif;
    text-transform: lowercase;
}

#ResponsiveNav li a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 3px;
    background: #40e0d0;
    -webkit-transition: 0.35s;
    transition: 0.35s;
}

#ResponsiveNav li a:hover {
    color: #40e0d0;
}

#ResponsiveNav ul li a:hover:after,
#ResponsiveNav ul li a:focus:after,
#ResponsiveNav ul li a:active:after {
    width: 70%;
}

button.navbar-toggle.collapsed {
    background-color: #008080;
    border: none;
}

.navbar-default .navbar-toggle:focus,
.navbar-default .navbar-toggle:hover {
    background-color: #40e0d0;
    border: none;
}

.navbar-default .navbar-toggle .icon-bar {
    background-color: #fff;
}

/*/ start hamburger menu desktop overwrite bootstrap /*/

.navbar-header {
    float: none;
}

.navbar-toggle {
    display: block;
}

.navbar-collapse.collapse {
    display: none !important;
}

.navbar-nav {
    float: none !important;
}

.navbar-nav > li {
    float: none;
}

.navbar-collapse.collapse.in {
    display: block !important;
}

/*/ end hamburger menu desktop overwrite bootstrap /*/

/*/ start intro /*/

.intro {
    display: table;
    width: 100%;
    height: auto;
    text-align: center;
    color: white;
    background: url(http://marinamarques.pt/img/mm_header.jpg) no-repeat top
        center scroll;
    background-size: cover;
    -o-background-size: cover;
}

.intro .intro-body {
    display: table-cell;
    vertical-align: middle;
    padding: 15% 0;
    background: rgba(0, 0, 0, 0.5);
}

.brand-heading {
    font-size: 100px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-align: left;
    color: #40e0d0;
}

.intro .intro-body .intro-text {
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
}

span.city {
    background-color: #40e0d0;
    color: #fff;
    border-radius: 4px;
    width: 15px;
}

@media (min-width: 768px) {
    .intro {
        height: 100%;
        padding: 0;
    }
    .intro .intro-body .brand-heading {
        font-size: 130px;
    }
    .intro .intro-body .intro-text {
        font-size: 35px;
    }
}

.mouse-warp {
    margin: 40px auto;
    display: block;
    width: 28px;
    opacity: 0.5;
}

.mouse {
    width: 28px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 14px;
}

.scroll {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #fff;
    position: relative;
    left: 10px;
    -webkit-animation: scrolls 1.3s ease-out infinite;
}

@-webkit-keyframes scrolls {
    0% {
        top: 8px;
        opacity: 0;
        -webkit-transform: scaleY(1) scaleX(1);
    }
    5% {
        top: 8px;
        opacity: 0.8;
        -webkit-transform: scaleY(1.2) scaleX(1.2);
    }
    10% {
        top: 8px;
        opacity: 1;
        -webkit-transform: scaleY(1.6) scaleX(1.6);
    }
    15% {
        top: 8px;
        opacity: 1;
        -webkit-transform: scaleY(1.2) scaleX(1.2);
    }
    20% {
        top: 8px;
        opacity: 1;
        -webkit-transform: scaleY(1.2) scaleX(1.2);
    }
    30% {
        top: 15px;
        opacity: 1;
        -webkit-transform: scaleY(1.2) scaleX(1.2);
    }
    100% {
        top: 30px;
        opacity: 0;
        -webkit-transform: scaleY(1.2) scaleX(0.8);
    }
}

/* End Scroll Down Indicator */

/*/ end intro /*/

/*/ start about /*/

#about-me {
    margin-top: 20px;
}

#about-me h2 {
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

.about-intro-text p {
    float: right;
}

.about-intro-text span {
    color: #40e0d0;
    font-weight: 700;
}

.about-intro-text .fa-beer {
    color: #40e0d0;
    font-size: 20px;
}

.button-group {
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}

.text {
    background: #008080;
    color: #fff;
    font-size: 18px;
    height: 50px;
    padding: 0 25px;
    line-height: 50px;
}

.icon-cv {
    font-size: 30px;
    width: 50px;
    height: 50px;
    line-height: 40px;
    box-sizing: border-box;
    border: 4px solid #008080;
    border-left: none;
    -webkit-transition: 600ms -webkit-transform ease-in-out;
    transition: 600ms -webkit-transform ease-in-out;
    transition: 600ms transform ease-in-out;
    transition: 600ms transform ease-in-out, 600ms -webkit-transform ease-in-out;
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    -webkit-transform-origin: left;
    transform-origin: left;
    color: #008080;
    background: #fff;
    text-align: center;
}

a .fa-arrow-circle-down {
    color: #008080;
}

.button-group:hover .icon-cv {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}

.button-group {
    -webkit-perspective: 200px;
    perspective: 200px;
    -webkit-perspective-origin: calc(100% - 50px);
    perspective-origin: calc(100% - 50px);
    margin-top: 5%;
}

.about-inner {
    position: relative;
    padding: 0;
    overflow: hidden;
}

.about-inner > img {
    display: block;
    min-width: 100%;
    height: auto;
}

.about-ct .textbox-about {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}

.about-ct:hover .textbox-about {
    -webkit-transform: scale(1);
    transform: scale(1);
}

.textbox-about {
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
}

div.button-social {
    border: 2px solid #fff;
    padding: 12px 18px;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    margin-top: 25px;
    font-size: 18px;
    color: #fff;
    margin: 5% 5%;
}

div.button-social a {
    color: #fff;
    font-size: 18px;
    margin: 15px;
}

div.button-social a:hover {
    color: #40e0d0;
}

.button-group:focus,
.icon-cv:focus,
.text:focus {
    outline: 0;
}

/*/ start count stats /*/

#counter-stats {
    margin-top: 50px;
    width: 100%;
    height: auto;
}

.stats {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-transform: lowercase;
}

.stats .fa {
    color: #008080;
    font-size: 60px;
}

/*/ end count stats /*/

/*/ end about /*/

/*/ start about work experience /*/

#experience {
    margin-top: 20px;
}

#experience h2 {
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

.timeline-label h4 {
    margin-top: 0;
    font-size: 30px;
    color: #40e0d0;
    padding: 16px 0px;
    font-weight: 700;
}

.timeline-label p {
    color: #696969;
    padding: 8px 0px;
    line-height: 27px;
}

.button-group-li {
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}

.timeline-label a {
    text-decoration: none;
}

.text-timeline {
    background: #40e0d0;
    color: #fff;
    font-size: 18px;
    height: 40px;
    padding: 0 25px;
    line-height: 40px;
}

.icon-li {
    font-size: 20px;
    width: 40px;
    height: 40px;
    line-height: 30px;
    box-sizing: border-box;
    border: 4px solid #40e0d0;
    border-left: none;
    -webkit-transition: 600ms -webkit-transform ease-in-out;
    transition: 600ms -webkit-transform ease-in-out;
    transition: 600ms transform ease-in-out;
    transition: 600ms transform ease-in-out, 600ms -webkit-transform ease-in-out;
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    -webkit-transform-origin: left;
    transform-origin: left;
    color: #40e0d0;
    background: #fff;
    text-align: center;
}

.button-group-li:hover .icon-li {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}

.button-group-li {
    -webkit-perspective: 200px;
    perspective: 200px;
    -webkit-perspective-origin: calc(100% - 40px);
    perspective-origin: calc(100% - 40px);
}

.timeline-label {
    padding-left: 7%;
    margin-top: 2%;
}

.col-exp {
    margin-top: 2%;
}

.timeline .timeline-experience {
    position: relative;
    float: left;
    margin-left: 32px;
    padding-left: 64px;
    border-left: 2px solid #ccc;
}

.timeline .timeline-experience-info h5 {
    margin-top: 0;
    margin-bottom: 0.333em;
    font-size: 18px;
    color: #40e0d0;
    font-weight: 700;
}

.timeline .timeline-experience-info .timeline-role {
    font-size: 16px;
    color: #008080;
    font-weight: 600;
}

.timeline .timeline-experience-info p {
    font-size: 12px;
    color: #333;
    line-height: 27px;
}

.timeline time {
    display: block;
    width: 65px;
    color: #ccc;
    text-align: center;
    font-weight: 700;
}

.timeline .timeline-experience-img,
.timeline .timeline-experience-info,
.timeline .timeline-experience-info h5,
.timeline .timeline-experience-info .role,
.timeline .timeline-experience-info p {
    clear: none;
}

.timeline .timeline-experience .timeline-circle {
    position: absolute;
    top: 16px;
    left: -13px;
    display: block;
    width: 19px;
    height: 19px;
    border: 3px solid #ccc;
    border-radius: 50%;
    background-color: #f5f5f5;
}

.timeline .timeline-experience-img {
    float: left;
    width: 64px;
    height: 64px;
}

.timeline .timeline-experience-img img {
    width: 100%;
}

.timeline .timeline-experience-info {
    margin-left: 87px;
}

.timeline-experience-info p {
    margin-top: 10px;
    margin-bottom: 20px;
}

/*/ end about work experience /*/

/*/ end about /*/

/*/ start work portfolio /*/

#portfolio {
    margin-top: 20px;
}

.portfolio-ct h2 {
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

.grid-portfolio {
    margin-top: 20px;
}

.portfolio-details {
    text-align: center;
}

.thumbnail {
    max-width: 500px;
    border: none;
    position: relative;
    background: none;
    padding: 0;
}

.portfolio-details h3 {
    color: #008080;
    font-weight: 700;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
}

.portfolio-details p {
    font-size: 14px;
}

ul.portfolio-tags {
    padding: 10px 0 10px 0;
    text-align: center;
}

li.portfolio-tag {
    list-style-type: none;
    font-size: 9px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #40e0d0;
    display: inline;
    border: 2px solid #40e0d0;
    padding: 8px;
}

span.portfolio-link {
    font-size: 30px;
    border: 2px solid #fff;
    border-radius: 50px;
    padding: 20px;
    color: #fff;
    margin: 20% auto;
}

.portfolio-item-ct .textbox-portfolio {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    background: #40e0d0;
    opacity: 0.9;
}

.portfolio-item-ct:hover .textbox-portfolio {
    -webkit-transform: scale(1);
    transform: scale(1);
}

.textbox-portfolio {
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
}

div.button-weblink {
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    color: #fff;
    text-align: center;
}

.portfolio-tag:focus,
.portfolio-tags:focus {
    outline: 0;
}

/*/ end work portfolio /*/

/*/ start services /*/

#services {
    margin-top: 20px;
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 45px;
}

#services h2 {
    font-weight: 700;
    margin-top: 22px;
    padding-bottom: 10px;
    text-align: center;
}

.ct-services {
    margin-top: 20px;
}

#services h3 {
    color: #40e0d0;
    font-size: 22px;
    font-weight: bold;
    text-transform: lowercase;
}

#services .fa {
    font-size: 60px;
    color: #008080;
}

#services .rotate:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
}

#services .rotate {
    -webkit-transition-duration: 0.8s;
    transition-duration: 0.8s;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    overflow: hidden;
}

footer a:hover,
footer a:after,
footer a:visited footer a:focus {
    color: #40e0d0;
}

#copyright {
    margin-top: 35px;
    font-size: 14px;
}

/*/ end contact /*/

/*/ media queries /*/

@media only screen and (max-width: 480px) {
    .brand-heading {
        font-size: 85px;
        margin-top: 10%;
    }
    .col-exp {
        margin-top: 15%;
    }
    .timeline .timeline-experience {
        margin-left: 20px;
        padding-left: 20px;
    }
    .timeline time {
        width: 40px;
    }
    .services-item {
        margin-bottom: 15%;
    }
}
</style>
