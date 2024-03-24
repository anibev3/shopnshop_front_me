<template>
    <div>
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
                            <option v-for="city in cities" :value="city.uuid">
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
                    placeholder="Entrez l'adresse 1"
                    required
                    v-model="billingData.address_line1"
                />
                <input
                    type="text"
                    class="form-control"
                    placeholder="Entrez l'adresse 2 (facultative)"
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

            <!-- <div
                                                        class="form-footer mb-0"
                                                    > -->
            <!-- <div
                                                        class="form-footer-right"
                                                    > -->
            <button
                type="submit"
                class="btn btn-dark py-4"
                style="
                    border-radius: 10px;
                    width: 100%;
                    background-color: black;
                "
            >
                Continuer
            </button>
            <!-- </div> -->
            <!-- </div> -->
        </form>
    </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { mapGetters, mapActions } from 'vuex';

import { constant } from '~/api';

import {
    retrieveAndDecryptData,
    isLoggedIn,
} from '~/utils/storage/crypto.service';
import {
    priceFormatService,
    intervalPriceFormatService,
    totalpriceFormatService,
} from '~/utils/service';

export default {
    components: {
        VueSlideToggle,
    },
    data: function () {
        return {
            userInfoToggle: true,
            codeOpened: false,
            billingInfoToggle: false,
            shippingInfoToggle: false,
            accountOpened: false,
            addressOpened: false,
            cartItems: [],
            billingItem: null,
            userData: null,
            // ---------------------------------------
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
            selectedShippingAddress: null,
            selectedShippingAddress_uuid: null,
        };
    },
    computed: {
        ...mapGetters('cart', [
            'cartList',
            'totalCount',
            'totalPrice',
            'cartAmount',
        ]),
        ...mapGetters('session', ['GET_USER_DATA', 'GET_USER_STATUS']),
        ...mapGetters('place', ['GET_COUNTRY']),
        ...mapGetters('billing', ['GET_BILLING']),
        ...mapGetters('shipping', ['GET_SHIPPING']),
    },

    watch: {
        cartList: function () {
            this.cartItems = this.cartList;
        },

        // GET_BILLING: function () {
        //     this.billingItem = this.GET_BILLING;
        // },
    },
    created: function () {
        this.isConnectedStatus();
        this.get_countries();
    },
    async mounted() {
        await this.getAddress();
        // setTimeout(() => {

        // }, 600);

        if (this.GET_BILLING) {
            this.initializeBillingData();
        }
    },
    methods: {
        ...mapActions('cart', ['updateCart', 'removeFromCart']),
        ...mapActions('session', ['getUserStatus', 'getUserData']),
        ...mapActions('place', ['get_countries']),
        ...mapActions('order', ['makeOrder']),
        ...mapActions('billing', [
            'add_billing_address',
            'get_billing_address',
        ]),
        ...mapActions('shipping', [
            'add_shipping_address',
            'get_shipping_address',
        ]),

        openBillingAddress() {
            this.billingInfoToggle = !this.billingInfoToggle;
            this.userInfoToggle = false;
            this.shippingInfoToggle = false;
        },

        openUserInfo() {
            this.userInfoToggle = !this.userInfoToggle;
            this.shippingInfoToggle = false;
            this.billingInfoToggle = false;
        },
        openShippingAddress() {
            this.shippingInfoToggle = !this.shippingInfoToggle;
            this.billingInfoToggle = false;
            this.userInfoToggle = false;
        },
        initializeBillingData() {
            this.billingData = {
                address_line1: this.GET_BILLING.address_line1,
                address_line2: this.GET_BILLING.address_line2,
                city: this.GET_BILLING.city,
                state: this.GET_BILLING.state,
                postal_code: this.GET_BILLING.postal_code,
                country: this.GET_BILLING.country,
            };

            const billingCityName = this.GET_BILLING.city;
            const billingStateName = this.GET_BILLING.state;
            const billingCountryName = this.GET_BILLING.country;

            // Recherche du pays par nom
            const country = this.GET_COUNTRY.find(
                (country) => country.name === billingCountryName
            );
            if (country) {
                this.selectedCountry = country.uuid;

                // Recherche de la région par nom (dans le cas où les pays ont des régions)
                if (country.cities && country.cities.length > 0) {
                    const city = country.cities.find(
                        (city) => city.name === billingCityName
                    );
                    if (city) {
                        this.cities = city;
                        this.selectedCity = city.uuid;
                        // alert(this.selectedCity);

                        // Recherche de la ville par nom
                        if (
                            city.municipalities &&
                            city.municipalities.length > 0
                        ) {
                            const municipality = city.municipalities.find(
                                (municipality) =>
                                    municipality.name === billingStateName
                            );
                            if (municipality) {
                                this.municipalities = municipality;
                                // Si la ville a été trouvée, utilisez son UUID
                                this.selectedMunicipality = municipality.uuid;
                            }
                        }
                    }
                }
            }

            if (this.GET_SHIPPING.length > 0) {
                this.selectedShippingAddress = this.GET_SHIPPING[0];
                this.selectedShippingAddress_uuid = this.GET_SHIPPING[0].uuid;
            }
        },
        changeQty: function (value, product) {},
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        numbertotalWithSpaces(price, qty) {
            return totalpriceFormatService(price, qty);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
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
        selectShippingAddress(address) {
            this.selectedShippingAddress = address;
            this.selectedShippingAddress_uuid = address.uuid;
            // alert(address.uuid);
            // alert(JSON.stringify(address));
        },

        async makeUserOrder() {
            const formData = {
                user_uuid: this.user.uuid,
                shipping_uuid: this.selectedShippingAddress_uuid,
            };
            await this.makeOrder(formData);
            // console.log(formData);
        },
        openCreateShippingModal: function () {
            this.$modal.show(
                () => import('~/components/features/widgets/PvShippingCreate'),
                { slug: 'une_variable_ici' },
                {
                    width: '931',
                    height: 'auto',
                    adaptive: true,
                    class: 'quickview-modal',
                }
            );
        },
    },
};
</script>

<style scoped>
.selected {
    background-color: #f0f0f0; /* Couleur de fond sélectionnée */
    border-color: #00cc00; /* Couleur de la bordure sélectionnée */
    border: 3px solid #00cc00;
    border-radius: 10px;
}

.checkmark {
    position: absolute;
    top: 5px;
    right: 5px;
}

.checkmark-svg {
    width: 20px;
    height: 20px;
    fill: #00cc00; /* Couleur du SVG de vérification */
}

.address-box {
    position: relative;
    /* Autres styles... */
}

.selected-address {
    background-color: #f0f0f0; /* Couleur de fond sélectionnée */
    border-color: #00cc00; /* Couleur de la bordure sélectionnée */
    border: 3px solid #00cc00;
    border-radius: 10px;
    padding: 10px;
}

.not-selected-address {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
    cursor: pointer;
}

.address-box {
    /* display: inline-block;
  position: relative; */
    margin-bottom: 0.9rem !important;
    /* width: 100%;
  transition: 0.3s border-color;
  font-size: 1.4rem;
  line-height: 3rem;
  vertical-align: top;
  word-wrap: break-word; */
}
</style>
