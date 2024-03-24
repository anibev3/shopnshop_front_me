<template>
    <div>
        <div class="address account-content mt-0 pt-2">
            <h4 class="title">Adresse de facturation</h4>

            <form class="mb-2" @submit.prevent="submitBillingAddress">
                <div class="select-custom">
                    <label>
                        Pays
                        <span class="required">*</span>
                    </label>
                    <select
                        name="orderby"
                        class="form-control"
                        v-model="selectedCountry"
                        @change="updateCities"
                    >
                        <!-- <option value selected="selected">
                                            British Indian Ocean Territory
                                        </option> -->
                        <option
                            v-for="country in GET_COUNTRY"
                            :value="country.uuid"
                        >
                            {{ country.name }}
                        </option>
                    </select>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>
                                Ville
                                <span class="required">*</span>
                            </label>
                            <select
                                name="orderby"
                                class="form-control"
                                v-model="selectedCity"
                                @change="updateMunicipalities"
                            >
                                <!-- <option value selected="selected">
                                            British Indian Ocean Territory
                                        </option> -->
                                <option
                                    v-for="city in cities"
                                    :value="city.uuid"
                                >
                                    {{ city.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>
                                Commune
                                <span class="required">*</span>
                            </label>
                            <select
                                name="orderby"
                                class="form-control"
                                v-model="billingData.state"
                            >
                                <!-- <option value selected="selected">
                                            British Indian Ocean Territory
                                        </option> -->
                                <option
                                    v-for="municipality in municipalities"
                                    :value="municipality.name"
                                >
                                    {{ municipality.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>
                        Street address
                        <span class="required">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="House number and street name"
                        required
                        v-model="billingData.address_line1"
                    />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        required
                        v-model="billingData.address_line2"
                    />
                </div>

                <div class="form-group">
                    <label>
                        Postcode / ZIP
                        <span class="required">*</span>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        required
                        v-model="billingData.postal_code"
                    />
                </div>

                <div class="form-footer mb-0">
                    <div class="form-footer-right">
                        <button
                            type="submit"
                            class="btn btn-dark py-4"
                            style="border-radius: 10px"
                        >
                            Sauvegarder l'adresse
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import PvTabs from '~/components/features/PvTabs';

import Sticky from 'vue-sticky-directive';
import { mapActions, mapGetters } from 'vuex';
import {
    retrieveAndDecryptData,
    isLoggedIn,
} from '~/utils/storage/crypto.service';
import { constant } from '~/api';

export default {
    directives: {
        Sticky,
    },
    components: {
        PvTabs,
    },
    data: function () {
        return {
            isSticky: false,
            isConnected: false,
            countries: [], // Pour stocker les pays
            selectedCountry: null, // Pour stocker le pays sélectionné
            cities: [], // Pour stocker les villes en fonction du pays sélectionné
            selectedCity: null, // Pour stocker la ville sélectionnée
            municipalities: [], // Pour stocker les municipalités en fonction de la ville sélectionnée
            selectedMunicipality: null, // Pour stocker la municipalité sélectionnée
            billingData: {
                user_uuid: '',
                address_line1: '',
                address_line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
            },
            shippingData: {
                user_uuid: '',
                recipient_name: '',
                address_line_1: '',
                address_line_2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
            },
            user: Object,
        };
    },
    mounted: function () {
        this.resizeHandler();
        window.addEventListener('resize', this.resizeHandler, {
            passive: true,
        });
        this.getAddress();
    },
    destroyed: function () {
        window.removeEventListener('resize', this.resizeHandler);
    },
    created() {
        this.get_countries();
        this.isConnectedStatus();
    },
    computed: {
        ...mapGetters('place', ['GET_COUNTRY']),
        ...mapGetters('billing', ['GET_BILLING']),
        ...mapGetters('shipping', ['GET_SHIPPING']),
    },
    methods: {
        ...mapActions('place', ['get_countries']),
        ...mapActions('billing', [
            'add_billing_address',
            'get_billing_address',
        ]),
        ...mapActions('shipping', [
            'add_shipping_address',
            'get_shipping_address',
        ]),
        tabClicked: function (e) {
            let linkId = e.target.getAttribute('data-toggle');
            if (!linkId)
                linkId =
                    e.target.parentNode.parentNode.getAttribute('data-toggle');
            if (document.getElementById(linkId + '-tab'))
                document.getElementById(linkId + '-tab').click();
        },
        handler: function (e) {
            let linkId = e.target.getAttribute('href');
            if (document.querySelector(linkId + '-tab')) {
                document.querySelector(linkId + '-tab').classList.add('active');
            }
        },
        resizeHandler: function () {
            this.isSticky = window.innerWidth > 991 ? true : false;
        },

        updateCities() {
            console.log(this.selectedCountry);
            if (this.selectedCountry) {
                const selectedCountry = this.GET_COUNTRY.find(
                    (country) => country.uuid === this.selectedCountry
                );
                this.cities = selectedCountry.cities;
                this.billingData.country = selectedCountry.name;
                this.shippingData.country = selectedCountry.name;
            } else {
                this.cities = [];
            }
            this.selectedCity = null;
            this.municipalities = [];
            this.selectedMunicipality = null;
        },

        updateMunicipalities() {
            if (this.selectedCity) {
                const selectedCity = this.cities.find(
                    (city) => city.uuid === this.selectedCity
                );
                this.municipalities = selectedCity.municipalities;
                this.billingData.city = selectedCity.name;
                this.shippingData.city = selectedCity.name;
            } else {
                this.municipalities = [];
            }
            this.selectedMunicipality = null;
        },
        // -------------------- CHECK USER IF USER IS CONNECTED

        isConnectedStatus() {
            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                this.user = retrieveAndDecryptData(constant.USER_DATA);
            }
        },

        // -------------------- ADD BILLING ADRESS
        async submitBillingAddress() {
            this.billingData.user_uuid = this.user.uuid;
            await this.add_billing_address(this.billingData);
        },
        async submitShippingAddress() {
            this.shippingData.user_uuid = this.user.uuid;
            console.log(this.shippingData);
            await this.add_shipping_address(this.shippingData);
        },
        async getAddress() {
            const userId = this.user.uuid;
            await this.get_billing_address(userId);
            await this.get_shipping_address(userId);
        },
    },
};
</script>
