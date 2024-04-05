<template>
    <div
        class="newsletter-popup mfp-hide bg-img"
        id="newsletter-popup-form"
        style="padding: 20px 20px"
    >
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <h2 class="mb-6">PLANIFICATION D'ASSISTANCE</h2>
        <div class="">
            <div id="accordion">
                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[0],
                            collapsed: !toggleState[0],
                        }"
                        @click.prevent="changeToggle(0)"
                    >
                        Article & Marque
                    </a>

                    <vue-slide-toggle :open="toggleState[0]">
                        <div class="card-body">
                            <div style="margin-top: 15px">
                                <div>
                                    <div class="mb-2 text-center">
                                        <h6 class="text-gray-600 font-medium">
                                            Veuillez sélection le type de
                                            produit aini que la marque concernée
                                        </h6>
                                    </div>
                                    <div class="row">
                                        <div
                                            class="class col-lg-4"
                                            v-for="category in GET_CATEGORIES"
                                            :key="category.uuid"
                                            @click="showSubCategories(category)"
                                            :style="{
                                                borderColor:
                                                    isSelectedProductAttribut(
                                                        category
                                                    )
                                                        ? 'rgb(132, 18, 132)'
                                                        : '',
                                                borderWidth:
                                                    isSelectedProductAttribut(
                                                        category
                                                    )
                                                        ? '3px'
                                                        : '0px', // Ajout de la bordure de 3 pixels
                                            }"
                                        >
                                            <div class="heure-container">
                                                <div class="heure">
                                                    <span
                                                        class="heure__"
                                                        style="
                                                            text-transform: uppercase;
                                                        "
                                                        :style="{
                                                            color: isSelectedProductAttribut(
                                                                category
                                                            )
                                                                ? 'rgb(132, 18, 132)'
                                                                : '',
                                                        }"
                                                        >{{
                                                            category.name
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div >
                                            <h2>
                                                Sous-catégories de
                                                {{ selectedCategory.name }}
                                            </h2>
                                            <ul>
                                                <li
                                                    
                                                >
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                    </div> -->
                                    <div class="row" style="margin-top: 10px">
                                        <div class="class col-lg-6">
                                            <div class="text-center">
                                                <h5>
                                                    Sélectionner la categorie
                                                </h5>
                                            </div>
                                            <div v-if="selectedCategory">
                                                <div
                                                    class="heure-container"
                                                    v-for="subCategory in selectedCategory.sub_categories"
                                                    :key="subCategory.uuid"
                                                    @click="
                                                        selectedSubCategories(
                                                            subCategory
                                                        )
                                                    "
                                                >
                                                    <div class="heure">
                                                        <span class="heure__">{{
                                                            subCategory.name
                                                        }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="!selectedCategory">
                                                <Skeleton
                                                    height="4.2rem"
                                                ></Skeleton>
                                            </div>
                                        </div>
                                        <div class="class col-lg-6">
                                            <div
                                                class="text-center"
                                                style="
                                                    /* margin-top: 20px;
                                                    margin-bottom: 10px; */
                                                "
                                            >
                                                <h5>Sélectionner la marque</h5>
                                            </div>

                                            <!-- <input
                                                type="brand"
                                                class="form-input form-wide mb-2"
                                                id="brand"
                                                required
                                            /> -->

                                            <div v-if="GET_BRANDS.length > 0">
                                                <AutoComplete
                                                    id="autocomplete"
                                                    v-model="selectedBrand"
                                                    :suggestions="
                                                        filteredBrands
                                                    "
                                                    field="name"
                                                    @complete="filterBrands"
                                                    style="width: 300px"
                                                ></AutoComplete>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-end"
                                style="margin-top: 20px"
                            >
                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                    @click="submitProductAttribut()"
                                >
                                    CONTINUER
                                </button>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>
                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[1],
                            collapsed: !toggleState[1],
                        }"
                        @click.prevent="changeToggle(1)"
                    >
                        Date et heure
                    </a>

                    <vue-slide-toggle :open="toggleState[1]">
                        <div class="card-body">
                            <div style="margin-top: 15px">
                                <div>
                                    <div class="flex mb-2">
                                        <label class="text-gray-600 font-medium"
                                            ><input
                                                class="mr-1"
                                                type="radio"
                                                value=""
                                                v-model="timezone"
                                            />Local</label
                                        >
                                        <label
                                            class="text-gray-600 font-medium ml-3"
                                            ><input
                                                class="mr-1"
                                                type="radio"
                                                value="utc"
                                                v-model="timezone"
                                            />UTC</label
                                        >
                                    </div>
                                    <div class="row">
                                        <div class="class col-lg-8">
                                            <v-date-picker
                                                v-model="date"
                                                :disabled-dates="disabledDates"
                                                style="width: 100%"
                                            />
                                        </div>
                                        <div class="class col-lg-4">
                                            <h5>Thursday, March 14</h5>
                                            <div class="heure-container">
                                                <div
                                                    v-for="hour in generateHours(
                                                        8,
                                                        18,
                                                        5
                                                    )"
                                                    :key="hour"
                                                    :class="{
                                                        'heure-selected':
                                                            hour ===
                                                            selectedHour,
                                                    }"
                                                    @click="selectHour(hour)"
                                                    class="heure"
                                                >
                                                    <span class="heure__">{{
                                                        hour
                                                    }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-end"
                                style="margin-top: 20px"
                            >
                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                >
                                    CONTINUER
                                </button>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>

                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[2],
                            collapsed: !toggleState[2],
                        }"
                        @click.prevent="changeToggle(2)"
                    >
                        Information personnel
                    </a>

                    <vue-slide-toggle :open="toggleState[2]">
                        <div class="card-body">
                            <div
                                class="login-form-container login-area"
                                v-if="!isConnected"
                            >
                                <div
                                    class="d-flex justify-content-between align-items-center;"
                                    style="align-items: baseline"
                                    v-if="!loginOpened"
                                >
                                    <h4 class="">Veuillez vous connecter</h4>

                                    <div
                                        class="for_me_oh"
                                        style="
                                            margin-bottom: 0;
                                            padding-top: 0rem;
                                            padding-bottom: 0rem;
                                        "
                                    >
                                        <button
                                            type="submit"
                                            class="btn"
                                            @click="loginOpened = !loginOpened"
                                            style="margin-top: 0rem"
                                        >
                                            SE CONNECTER
                                        </button>
                                    </div>
                                </div>

                                <vue-slide-toggle :open="loginOpened">
                                    <div class="login-section feature-box">
                                        <div class="feature-box-content">
                                            <div
                                                class="d-flex justify-content-end"
                                            >
                                                <i
                                                    @click="
                                                        loginOpened =
                                                            !loginOpened
                                                    "
                                                    class="fas fa-xmark"
                                                    style="
                                                        font-size: 26px;
                                                        margin-bottom: -3px;
                                                    "
                                                ></i>
                                            </div>
                                            <form
                                                @submit.prevent="submitLogin"
                                                style="padding-top: 0rem"
                                            >
                                                <p>
                                                    Vous devez vous connecter
                                                    pour faire appel à un
                                                    personnal shopper
                                                </p>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label
                                                                class="mb-0 pb-1"
                                                            >
                                                                email
                                                                <span
                                                                    class="required"
                                                                    >*</span
                                                                >
                                                            </label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                required
                                                                v-model="
                                                                    loginData.email
                                                                "
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label
                                                                class="mb-0 pb-1"
                                                            >
                                                                Mot de passe
                                                                <span
                                                                    class="required"
                                                                    >*</span
                                                                >
                                                            </label>
                                                            <input
                                                                v-model="
                                                                    loginData.password
                                                                "
                                                                type="password"
                                                                class="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="d-flex justify-content-between"
                                                    style="
                                                        align-items: baseline;
                                                    "
                                                >
                                                    <nuxt-link
                                                        to="/pages/forgot-password"
                                                        class="forget-password"
                                                        >Mot de passe Oublié
                                                        ?</nuxt-link
                                                    >
                                                    <button
                                                        type="submit"
                                                        class="btn"
                                                    >
                                                        <span
                                                            v-if="!isConnecting"
                                                        >
                                                            SE CONNECTER
                                                        </span>
                                                        <div
                                                            v-if="isConnecting"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="32"
                                                                height="32"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <circle
                                                                    cx="4"
                                                                    cy="12"
                                                                    r="3"
                                                                    fill="currentColor"
                                                                >
                                                                    <animate
                                                                        id="svgSpinners3DotsBounce0"
                                                                        attributeName="cy"
                                                                        begin="0;svgSpinners3DotsBounce1.end+0.25s"
                                                                        calcMode="spline"
                                                                        dur="0.6s"
                                                                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                        values="12;6;12"
                                                                    />
                                                                </circle>
                                                                <circle
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="3"
                                                                    fill="currentColor"
                                                                >
                                                                    <animate
                                                                        attributeName="cy"
                                                                        begin="svgSpinners3DotsBounce0.begin+0.1s"
                                                                        calcMode="spline"
                                                                        dur="0.6s"
                                                                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                        values="12;6;12"
                                                                    />
                                                                </circle>
                                                                <circle
                                                                    cx="20"
                                                                    cy="12"
                                                                    r="3"
                                                                    fill="currentColor"
                                                                >
                                                                    <animate
                                                                        id="svgSpinners3DotsBounce1"
                                                                        attributeName="cy"
                                                                        begin="svgSpinners3DotsBounce0.begin+0.2s"
                                                                        calcMode="spline"
                                                                        dur="0.6s"
                                                                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                        values="12;6;12"
                                                                    />
                                                                </circle>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </vue-slide-toggle>
                            </div>

                            <div v-if="isConnected">
                                <ul class="checkout-steps">
                                    <li>
                                        <h2 class="step-title">Détails</h2>

                                        <form action="#" id="checkout-form">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            Nom et Prénom
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="user.name"
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-7">
                                                    <div class="form-group">
                                                        <label>
                                                            Email
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="user.email"
                                                            type="email"
                                                            class="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label>
                                                            Contact
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="
                                                                user.call_phone
                                                            "
                                                            disabled
                                                            type="tel"
                                                            class="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="order-comments"
                                                    >Raison de
                                                    l'assistance</label
                                                >
                                                <textarea
                                                    class="form-control"
                                                    placeholder="Donnez plus de détails sur ceux pour quoi vous voulez l'assistance"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-dark btn-place-order"
                                                form="checkout-form"
                                            >
                                                SOUMETTRE
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>

                <div class="card card-accordion">
                    <!-- <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[3],
                            collapsed: !toggleState[3],
                        }"
                        @click.prevent="changeToggle(3)"
                    >
                        Soumission
                    </a> -->

                    <vue-slide-toggle :open="toggleState[3]">
                        <div class="card-body">
                            <div class="order-summary">
                                <h3>YOUR ORDER</h3>

                                <table class="table table-mini-cart">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Product</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="cartList.length > 0">
                                        <tr
                                            v-for="(product, index) in cartList"
                                            :key="'cart-product-' + index"
                                        >
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    {{ product.name }} ×
                                                    <span class="product-qty">{{
                                                        product.qty
                                                    }}</span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span
                                                    >${{
                                                        product.price
                                                            | priceFormat
                                                    }}</span
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <p class="cart-empty-text ml-3">
                                            Aucun produit dans le panier
                                        </p>
                                    </tbody>
                                    <tfoot>
                                        <tr class="cart-subtotal">
                                            <td>
                                                <h4>Subtotal</h4>
                                            </td>

                                            <td class="price-col">
                                                <span
                                                    >${{
                                                        totalPrice | priceFormat
                                                    }}</span
                                                >
                                            </td>
                                        </tr>
                                        <tr class="order-shipping">
                                            <td class="text-left" colspan="2">
                                                <h4 class="m-b-sm">Shipping</h4>

                                                <div
                                                    class="form-group form-group-custom-control"
                                                >
                                                    <div
                                                        class="custom-control custom-radio d-flex"
                                                    >
                                                        <input
                                                            type="radio"
                                                            class="custom-control-input"
                                                            name="radio"
                                                            checked
                                                        />
                                                        <label
                                                            class="custom-control-label"
                                                            >Local Pickup</label
                                                        >
                                                    </div>
                                                </div>

                                                <div
                                                    class="form-group form-group-custom-control mb-0"
                                                >
                                                    <div
                                                        class="custom-control custom-radio d-flex mb-0"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="radio"
                                                            class="custom-control-input"
                                                        />
                                                        <label
                                                            class="custom-control-label"
                                                            >Flat Rate</label
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="order-total">
                                            <td>
                                                <h4>Total</h4>
                                            </td>
                                            <td>
                                                <b class="total-price">
                                                    <span
                                                        >${{
                                                            totalPrice
                                                                | priceFormat
                                                        }}</span
                                                    >
                                                </b>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="payment-methods">
                                    <h4 class>Payment methods</h4>
                                    <div class="info-box with-icon p-0">
                                        <p>
                                            Sorry, it seems that there are no
                                            available payment methods for your
                                            state. Please contact us if you
                                            require assistance or wish to make
                                            alternate arrangements.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                >
                                    Place order
                                </button>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->

        <div>
            <button
                title="Close (Esc)"
                type="button"
                class="mfp-close"
                @click="$emit('close')"
            >
                ×
            </button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import Calendar from 'vue2-slot-calendar';
import { setCookie } from '~/utils/index';
import { mapGetters, mapActions } from 'vuex';
import { GET_BRANDS } from '~/store/prefs/brand';
import {
    retrieveAndDecryptData,
    encryptAndStoreData,
    isLoggedIn,
} from '~/utils/storage/crypto.service';
import Api, { baseUrl2, apiEndpoints, constant } from '~/api';

export default {
    data() {
        return {
            userData: null,
            isConnected: false,
            user: Object,
            isConnecting: false,

            toggleState: [true, false, false],
            active: 0,
            selectedHour: null,
            loginOpened: false,
            codeOpened: false,
            accountOpened: false,
            addressOpened: false,
            selectedCategory: null,

            // -----------------
            date: new Date(),
            today: new Date(),
            disabledDates: [],
            brandsList: [],
            timezone: '',

            // (--------------------)
            selectedBrand: null,
            brands: [], // Vos données de marques
            filteredBrands: [],
            loginData: {
                email: '',
                password: '',
            },
            product_attribut: {
                category_uuid: '',
                sub_category_uuid: '',
                brand_uuid: '',
                rank: 1,
            },
        };
    },
    components: {
        VueSlideToggle,
        Calendar,
    },
    computed: {
        ...mapGetters('product', ['GET_CATEGORIES']),
        ...mapGetters('cart', ['cartList', 'totalCount', 'totalPrice']),
        ...mapGetters('brand', ['GET_BRANDS']),

        disablePastDates() {
            // Calculer la date du jour et désactiver toutes les dates antérieures
            let dates = [];
            for (
                let d = new Date(this.today);
                d < this.today;
                d.setDate(d.getDate() + 1)
            ) {
                dates.push(new Date(d));
            }
            return dates;
        },
    },
    mounted() {
        this.disabledDates = this.disablePastDates;
        // alert(this.GET_BRANDS);
        // if (this.GET_BRANDS) {
        //     this.brandsList = this.GET_BRANDS;
        // }
    },
    created() {
        this.isConnectedStatus();

        this.get_categories();
        this.get_brands();
    },

    methods: {
        ...mapActions('product', ['get_categories']),
        ...mapActions('brand', ['get_brands']),

        isConnectedStatus() {
            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                this.user = retrieveAndDecryptData(constant.USER_DATA);
                console.log(this.user);
            }
        },
        async submitLogin() {
            this.isConnecting = true;
            try {
                Api.post(`${baseUrl2}${apiEndpoints.login}`, this.loginData)
                    .then(async (response) => {
                        const token = response.data.accessToken;
                        encryptAndStoreData(constant.USER_TOKEN, token);
                        return await this.getUserData(token);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isConnecting = false;
            }
        },

        async getUserData(token) {
            this.isConnecting = true;

            try {
                Api.get(`${baseUrl2}${apiEndpoints.user}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(async (response) => {
                        encryptAndStoreData(constant.USER_DATA, response.data);
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isConnecting = false;
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isConnecting = false;
            }
        },

        filterBrands(event) {
            const query = event.query.toLowerCase();
            this.filteredBrands = this.GET_BRANDS.filter((brand) =>
                brand.name.toLowerCase().includes(query)
            );
        },

        removeNewsletter: function (e) {
            setCookie('newsletter', !e.target.checked);
        },
        changeToggle: function (index) {
            let tmp = this.toggleState[index];
            this.toggleState.fill(false);
            this.toggleState[index] = !tmp;
            this.toggleState = [...this.toggleState];
        },

        generateHours(startHour, endHour, interval) {
            const hours = [];
            for (let hour = startHour; hour <= endHour; hour++) {
                for (let minute = 0; minute < 60; minute += interval) {
                    // Formatage de l'heure pour l'affichage (par exemple, "14:10")
                    const formattedHour = `${hour
                        .toString()
                        .padStart(2, '0')}:${minute
                        .toString()
                        .padStart(2, '0')}`;
                    hours.push(formattedHour);
                }
            }
            return hours;
        },

        selectHour(hour) {
            // alert(hour);
            this.selectedHour = hour;
            // Vous pouvez ajouter d'autres logiques ici en fonction de la sélection de l'heure
        },

        showSubCategories(category) {
            this.selectedCategory = category;
            this.product_attribut.category_uuid = category.uuid;
        },

        selectedSubCategories(sub_category) {
            this.product_attribut.sub_category_uuid = sub_category.uuid;
        },

        // selectedbrand(brand) {
        //     this.product_attribut.brand_uuid = brand.uuid;
        // },

        async submitProductAttribut() {
            if (!this.product_attribut.category_uuid) {
                console.log('Sélectionné une categorie');
                return;
            } else if (!this.product_attribut.sub_category_uuid) {
                console.log('Sélectionné une sous categorie');
                return;
            } else if (!this.selectedBrand) {
                console.log('Sélectionné une marque');
                return;
            }
            this.product_attribut.brand_uuid = this.selectedBrand.uuid;
            await encryptAndStoreData(
                constant.PRODUCT_ATTRIBUT,
                this.product_attribut
            );
            this.changeToggle(1);
            console.log(this.product_attribut);
        },

        isSelectedProductAttribut(category) {
            return this.selectedCategory === category;
        },
    },
};
</script>

<style scoped>
/* Importez les styles de PrimeVue */
/* @import '@primevue/resources/themes/saga-blue/theme.css'; */
/* @import '~primevue/resources/primevue.min.css';
@import '~primeicons/primeicons.css'; */
.accordion-custom {
    i,
    span {
        vertical-align: middle;
    }

    span {
        margin: 0 0.5rem;
    }
}

.heure {
    border: 1px solid;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer l'interactivité */

    /* Styles par défaut */
    transition: background-color 0.3s, box-shadow 0.3s;
}

.heure:hover {
    background-color: #f5f5f5; /* Couleur de surbrillance au survol */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
}

.heure__ {
    /* color: #222529; */
    font-weight: 700;
    line-height: 1.1;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    padding: 12px;
}
.accordion-custom {
    i,
    span {
        vertical-align: middle;
    }

    span {
        margin: 0 0.5rem;
    }
}

.heure {
    border: 1px solid;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer l'interactivité */

    /* Styles par défaut */
    transition: background-color 0.3s, box-shadow 0.3s;
}

.heure:hover {
    background-color: #f5f5f5; /* Couleur de surbrillance au survol */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
}

.heure__ {
    color: #222529;
    font-weight: 700;
    line-height: 1.1;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    padding: 12px;
}

.heure-selected {
    /* background-color: red; */
    color: rgb(187, 49, 187);
    border: 2px solid rgb(187, 49, 187);
}

.heure-container {
    max-height: 222px; /* Ajustez la hauteur maximale selon vos besoins */
    overflow-y: auto; /* Ajoute une barre de défilement verticale si nécessaire */
}

.login-area {
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}
.form-input {
    height: 42px;
    border-radius: 10px !important;
    border-color: #1c1818;
}
</style>
