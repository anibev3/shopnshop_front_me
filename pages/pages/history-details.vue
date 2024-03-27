<template>
    <main class="main main-test">
        <div class="container checkout-container">
            <ul
                class="checkout-progress-bar d-flex justify-content-center flex-wrap"
            >
                <li>
                    <nuxt-link to="/pages/cart">Accueil</nuxt-link>
                </li>
                <li class="active">
                    <nuxt-link to="/pages/checkout">Détail commande</nuxt-link>
                </li>
            </ul>

            <template v-if="GET_USER_SIMPLE_ORDER">
                <div>
                    <div class="dashboard-right-sidebar">
                        <div class="tab-content">
                            <div class="ng-star-inserted">
                                <div class="title-header">
                                    <div
                                        class="d-flex align-items-center w-100 justify-content-between"
                                    >
                                        <h5>Order Number: #1026</h5>
                                        <div class="right-option">
                                            <!----><a
                                                download="download"
                                                class="btn btn-md fw-bold text-light theme-bg-color ms-auto ng-star-inserted"
                                                href="https://laravel.pixelstrap.net/fastkart-v2/order/invoice/1026"
                                            >
                                                Invoice
                                                <i
                                                    class="ri-download-2-fill ms-2"
                                                ></i></a
                                            ><!---->
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="tracking-panel">
                                        <ul class="ng-star-inserted">
                                            <li class="active ng-star-inserted">
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/pending.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Pending
                                                    </div>
                                                </div>
                                            </li>
                                            <!---->
                                            <li class="active ng-star-inserted">
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/processing.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Processing
                                                    </div>
                                                </div>
                                            </li>
                                            <!---->
                                            <li
                                                class="active d-none ng-star-inserted"
                                            >
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/cancelled.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Cancelled
                                                    </div>
                                                </div>
                                            </li>
                                            <!---->
                                            <li class="active ng-star-inserted">
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/shipped.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Shipped
                                                    </div>
                                                </div>
                                            </li>
                                            <!---->
                                            <li class="active ng-star-inserted">
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/out-for-delivery.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Out For Delivery
                                                    </div>
                                                </div>
                                            </li>
                                            <!---->
                                            <li class="active ng-star-inserted">
                                                <div class="panel-content">
                                                    <div class="icon">
                                                        <img
                                                            alt="image"
                                                            class="img-fluid"
                                                            src="https://angular.pixelstrap.net/fastkart-rest/assets/svg/tracking/delivered.svg"
                                                        />
                                                    </div>
                                                    <div class="status">
                                                        Delivered
                                                    </div>
                                                </div>
                                            </li>
                                            <!----><!----><!---->
                                        </ul>
                                        <!---->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div
                        class="col-lg-8"
                        style="background-color: #f8f8f8; border-radius: 10px"
                    >
                        <div
                            class="dashboard-right-sidebar"
                            style="margin-top: 15px"
                        >
                            <div class="tab-content">
                                <div class="ng-star-inserted">
                                    <div class="card ng-star-inserted">
                                        <div class="card-body">
                                            <div
                                                class="tracking-wrapper table-responsive"
                                            >
                                                <table
                                                    class="table product-table"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                Image
                                                            </th>
                                                            <th scope="col">
                                                                Nom
                                                            </th>
                                                            <th scope="col">
                                                                Prix
                                                            </th>
                                                            <th scope="col">
                                                                Quantité
                                                            </th>
                                                            <th scope="col">
                                                                Total HT
                                                            </th>
                                                            <th scope="col">
                                                                Status
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        v-if="
                                                            GET_USER_SIMPLE_ORDER
                                                                .items.length >
                                                            0
                                                        "
                                                    >
                                                        <tr
                                                            class="ng-star-inserted"
                                                            v-for="(
                                                                product, index
                                                            ) in GET_USER_SIMPLE_ORDER.items"
                                                            :key="
                                                                'cart-product-' +
                                                                index
                                                            "
                                                        >
                                                            <td
                                                                class="product-image"
                                                            >
                                                                <img
                                                                    alt="product"
                                                                    class="img-fluid"
                                                                    :src="`${
                                                                        product.product
                                                                            ? product
                                                                                  .product
                                                                                  .pictures[0]
                                                                            : product.variant
                                                                            ? product
                                                                                  .variant
                                                                                  .pictures[0]
                                                                            : 0
                                                                    }`"
                                                                />
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    <nuxt-link
                                                                        :to="
                                                                            '/product/default/' +
                                                                            (product.product
                                                                                ? product
                                                                                      .product
                                                                                      .slug
                                                                                : product.variant
                                                                                ? product
                                                                                      .variant
                                                                                      .slug
                                                                                : 0)
                                                                        "
                                                                    >
                                                                        {{
                                                                            product.product
                                                                                ? product
                                                                                      .product
                                                                                      .name
                                                                                : product.variant
                                                                                ? product
                                                                                      .variant
                                                                                      .title
                                                                                : 0
                                                                        }}
                                                                    </nuxt-link>
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    {{
                                                                        numberWithSpaces(
                                                                            product.product
                                                                                ? product
                                                                                      .product
                                                                                      .price
                                                                                : product.variant
                                                                                ? product
                                                                                      .variant
                                                                                      .price
                                                                                : 0
                                                                        )
                                                                    }}
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    {{
                                                                        product.quantity
                                                                    }}
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>
                                                                    {{
                                                                        numbertotalWithSpaces(
                                                                            product.product
                                                                                ? product
                                                                                      .product
                                                                                      .price
                                                                                : product.variant
                                                                                ? product
                                                                                      .variant
                                                                                      .price
                                                                                : 0,
                                                                            product.quantity
                                                                        )
                                                                    }}
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                Non
                                                                <!----><!----><!----><!----><!---->
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody v-else>
                                                        <p
                                                            class="cart-empty-text ml-3"
                                                        >
                                                            Aucun produit dans
                                                            le panier
                                                        </p>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <!---->
                                    <div class="row g-sm-3 g-2">
                                        <div
                                            class="col-xxl-8 col-lg-12 col-md-7"
                                        >
                                            <div class="card">
                                                <div class="card-body">
                                                    <h3
                                                        class="fw-semibold mb-3"
                                                    >
                                                        Informations
                                                        complementaire
                                                    </h3>
                                                    <div
                                                        class="customer-detail tracking-wrapper"
                                                    >
                                                        <ul class="row g-3">
                                                            <li
                                                                class="col-sm-6 ng-star-inserted"
                                                            >
                                                                <label
                                                                    >Billing
                                                                    Address:</label
                                                                >
                                                                <h4
                                                                    class="ng-star-inserted"
                                                                >
                                                                    26, Starts
                                                                    Hollow
                                                                    Colony
                                                                    Denver
                                                                    Colorado
                                                                    United
                                                                    States 80014
                                                                    <br />
                                                                    Phone : +1
                                                                    5551855359
                                                                </h4>
                                                                <!---->
                                                            </li>
                                                            <!---->
                                                            <li
                                                                class="col-sm-6 ng-star-inserted"
                                                            >
                                                                <label
                                                                    >Shipping
                                                                    Address:</label
                                                                >
                                                                <h4
                                                                    class="ng-star-inserted"
                                                                >
                                                                    26, Starts
                                                                    Hollow
                                                                    Colony
                                                                    Denver
                                                                    Colorado
                                                                    United
                                                                    States 80014
                                                                    <br />
                                                                    Phone : +1
                                                                    5551855359
                                                                </h4>
                                                                <!---->
                                                            </li>
                                                            <!---->
                                                            <li
                                                                class="col-sm-6 ng-star-inserted"
                                                            >
                                                                <label
                                                                    >Delivery
                                                                    Slot:</label
                                                                >
                                                                <h4>
                                                                    Standard
                                                                    Delivery |
                                                                    Approx 5 to
                                                                    7 Days
                                                                </h4>
                                                            </li>
                                                            <!---->
                                                            <li
                                                                class="col-sm-3 ng-star-inserted"
                                                            >
                                                                <label
                                                                    >Payment
                                                                    Mode:</label
                                                                >
                                                                <div
                                                                    class="d-flex align-items-center gap-2"
                                                                >
                                                                    <h4>COD</h4>
                                                                </div>
                                                            </li>
                                                            <!---->
                                                            <li
                                                                class="col-sm-3 ng-star-inserted"
                                                            >
                                                                <label
                                                                    >Payment
                                                                    Status:</label
                                                                >
                                                                <div
                                                                    class="d-flex align-items-center gap-2"
                                                                >
                                                                    <h4>
                                                                        COMPLETED
                                                                    </h4>
                                                                </div>
                                                            </li>
                                                            <!---->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="col-xxl-4 col-lg-12 col-md-5"
                                        >
                                            <div class="card h-m30">
                                                <div class="card-body">
                                                    <h3
                                                        class="fw-semibold mb-3"
                                                    >
                                                        Summary
                                                    </h3>
                                                    <div
                                                        class="tracking-total tracking-wrapper"
                                                    >
                                                        <ul>
                                                            <li>
                                                                Total HT
                                                                <span>{{
                                                                    numberWithSpaces(
                                                                        GET_USER_SIMPLE_ORDER.ht_amount
                                                                    )
                                                                }}</span>
                                                            </li>
                                                            <li
                                                                class="ng-star-inserted"
                                                            >
                                                                Transport
                                                                <span>{{
                                                                    numberWithSpaces(
                                                                        '00'
                                                                    )
                                                                }}</span>
                                                            </li>
                                                            <!---->
                                                            <li>
                                                                Taxe
                                                                <span>{{
                                                                    numberWithSpaces(
                                                                        GET_USER_SIMPLE_ORDER.tax_amount
                                                                    )
                                                                }}</span>
                                                            </li>
                                                            <!----><!----><!---->
                                                            <li>
                                                                Total
                                                                <span>{{
                                                                    numberWithSpaces(
                                                                        GET_USER_SIMPLE_ORDER.total_amount
                                                                    )
                                                                }}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!---->
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
                    </div>

                    <div class="col-lg-4">
                        <div class="order-summary" style="border-radius: 10px">
                            <div class="d-flex justify-content-between">
                                <h3>INFO PERSONNEL</h3>
                                <div class="checkout-discount">
                                    <h4>
                                        Suggestion ou préocupation ?
                                        <button
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                            class="btn btn-link btn-toggle"
                                            @click="codeOpened = !codeOpened"
                                        >
                                            CLIQUER ICI
                                        </button>
                                    </h4>
                                </div>
                                <br />
                            </div>
                            <div>
                                <vue-slide-toggle :open="codeOpened">
                                    <div class="feature-box">
                                        <div class="feature-box-content">
                                            <p>
                                                Si vous avez un code promo,
                                                veuillez l'appliquer ci-dessous.
                                            </p>

                                            <form action="#">
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-sm w-auto"
                                                        placeholder="Code coupon"
                                                        required
                                                    />
                                                    <div
                                                        class="input-group-append"
                                                    >
                                                        <button
                                                            class="btn btn-sm mt-0"
                                                            type="submit"
                                                        >
                                                            Appliquer le code
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </vue-slide-toggle>
                            </div>

                            <div class="card" style="padding: 0px">
                                <div class="card-body">
                                    <div
                                        class="customer-detail tracking-wrapper"
                                    >
                                        <ul class="row g-3">
                                            <li class="ng-star-inserted">
                                                <label
                                                    >ID Client: #{{
                                                        GET_USER_SIMPLE_ORDER.user.uuid.slice(
                                                            0,
                                                            5
                                                        )
                                                    }}
                                                </label>
                                                <h4 class="ng-star-inserted">
                                                    Nom:
                                                    {{
                                                        GET_USER_SIMPLE_ORDER
                                                            .user.name
                                                    }}<br />
                                                    Email:
                                                    {{
                                                        GET_USER_SIMPLE_ORDER
                                                            .user.email
                                                    }}<br />
                                                    Contact:
                                                    {{
                                                        GET_USER_SIMPLE_ORDER
                                                            .user.call_phone
                                                    }}<br />
                                                    Lieu d'habitation:
                                                    {{
                                                        GET_USER_SIMPLE_ORDER
                                                            .user.municipality
                                                            .name
                                                    }}<br />
                                                    Adresse:
                                                    {{
                                                        GET_USER_SIMPLE_ORDER
                                                            .user.address
                                                    }}
                                                </h4>
                                                <!---->
                                            </li>
                                            <!---->
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <button
                                type="submit"
                                class="btn btn-dark btn-place-order"
                                form="checkout-form"
                                style="background-color: red"
                            >
                                ANNULLER LA COMMANDE
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </main>
</template>

<script>
import PvBillingCreate from '~/components/features/widgets/PvBillingCreate';
import PvBillingUpdate from '~/components/features/widgets/PvBillingUpdate';
import PvShippingCreate from '~/components/features/widgets/PvShippingCreate.vue';

import { VueSlideToggle } from 'vue-slide-toggle';
import { mapGetters, mapActions } from 'vuex';
import PvQuantityInput from '~/components/features/PvQuantityInput';

import { constant } from '~/api';

import {
    retrieveAndDecryptData,
    isLoggedIn,
} from '../../utils/storage/crypto.service';
import {
    priceFormatService,
    intervalPriceFormatService,
    totalpriceFormatService,
} from '~/utils/service';

export default {
    components: {
        VueSlideToggle,
        PvQuantityInput,
        PvShippingCreate,
        PvShippingCreate,
        PvBillingUpdate,
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
            orderItems: null,
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
            user: Object,
            selectedShippingAddress: null,
            selectedShippingAddress_uuid: null,
            billing_uuid: null,
        };
    },

    computed: {
        //     ...mapGetters('cart', ['cartList', 'totalPrice', 'cartAmount']),
        //     ...mapGetters('session', ['GET_USER_DATA', 'GET_USER_STATUS']),
        //     ...mapGetters('place', ['GET_COUNTRY']),
        //     ...mapGetters('billing', ['GET_BILLING']),
        ...mapGetters('order', ['GET_USER_SIMPLE_ORDER']),
    },

    // watch: {
    //     GET_USER_SIMPLE_ORDER: function () {
    //         this.orderItems = this.GET_USER_SIMPLE_ORDER;
    //     },
    // },
    created: function () {
        // this.orderItems = [...this.GET_USER_SIMPLE_ORDER];
        //     this.isConnectedStatus();
        //     this.get_countries();
        console.log('REUCPERE UIIDG', this.$route.query.uuid);
        this.getUserOrder();
    },
    mounted() {
        setTimeout(() => {
            console.log('nnnnnnnnnnnnnnnnnn', this.GET_USER_SIMPLE_ORDER);
        }, 200);

        // if (this.GET_BILLING) {
        //     this.initializeBillingData();
        // }
    },
    methods: {
        //     ...mapActions('cart', ['updateCart', 'removeFromCart']),
        //     ...mapActions('session', ['getUserStatus', 'getUserData']),
        //     ...mapActions('place', ['get_countries']),
        ...mapActions('order', ['getOrder']),
        //     ...mapActions('billing', [
        //         'add_billing_address',
        //         'get_billing_address',
        //     ]),
        //     ...mapActions('shipping', [
        //         'add_shipping_address',
        //         'get_shipping_address',
        //     ]),

        getUserOrder() {
            this.getOrder(this.$route.query.uuid);
        },

        //     openBillingAddress() {
        //         this.billingInfoToggle = !this.billingInfoToggle;
        //         this.userInfoToggle = false;
        //         this.shippingInfoToggle = false;
        //     },

        //     openUserInfo() {
        //         this.userInfoToggle = !this.userInfoToggle;
        //         this.shippingInfoToggle = false;
        //         this.billingInfoToggle = false;
        //     },
        //     openShippingAddress() {
        //         this.shippingInfoToggle = !this.shippingInfoToggle;
        //         this.billingInfoToggle = false;
        //         this.userInfoToggle = false;
        //     },
        //     initializeBillingData() {
        //         this.billingData = {
        //             address_line1: this.GET_BILLING.address_line1,
        //             address_line2: this.GET_BILLING.address_line2,
        //             city: this.GET_BILLING.city,
        //             state: this.GET_BILLING.state,
        //             postal_code: this.GET_BILLING.postal_code,
        //             country: this.GET_BILLING.country,
        //         };

        //         const billingCityName = this.GET_BILLING.city;
        //         const billingStateName = this.GET_BILLING.state;
        //         const billingCountryName = this.GET_BILLING.country;

        //         // Recherche du pays par nom
        //         const country = this.GET_COUNTRY.find(
        //             (country) => country.name === billingCountryName
        //         );
        //         if (country) {
        //             this.selectedCountry = country.uuid;

        //             // Recherche de la région par nom (dans le cas où les pays ont des régions)
        //             if (country.cities && country.cities.length > 0) {
        //                 const city = country.cities.find(
        //                     (city) => city.name === billingCityName
        //                 );
        //                 if (city) {
        //                     this.cities = city;
        //                     this.selectedCity = city.uuid;
        //                     // alert(this.selectedCity);

        //                     // Recherche de la ville par nom
        //                     if (
        //                         city.municipalities &&
        //                         city.municipalities.length > 0
        //                     ) {
        //                         const municipality = city.municipalities.find(
        //                             (municipality) =>
        //                                 municipality.name === billingStateName
        //                         );
        //                         if (municipality) {
        //                             this.municipalities = municipality;
        //                             // Si la ville a été trouvée, utilisez son UUID
        //                             this.selectedMunicipality = municipality.uuid;
        //                         }
        //                     }
        //                 }
        //             }
        //         }

        //         if (this.GET_SHIPPING.length > 0) {
        //             this.selectedShippingAddress = this.GET_SHIPPING[0];
        //             this.selectedShippingAddress_uuid = this.GET_SHIPPING[0].uuid;
        //         }
        //     },
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        numbertotalWithSpaces(price, qty) {
            return totalpriceFormatService(price, qty);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },
        //     updateCities() {
        //         console.log(this.selectedCountry);
        //         if (this.selectedCountry) {
        //             const selectedCountry = this.GET_COUNTRY.find(
        //                 (country) => country.uuid === this.selectedCountry
        //             );
        //             this.cities = selectedCountry.cities;
        //             this.billingData.country = selectedCountry.name;
        //             this.shippingData.country = selectedCountry.name;
        //         } else {
        //             this.cities = [];
        //         }
        //         this.selectedCity = null;
        //         this.municipalities = [];
        //         this.selectedMunicipality = null;
        //     },

        //     updateMunicipalities() {
        //         if (this.selectedCity) {
        //             const selectedCity = this.cities.find(
        //                 (city) => city.uuid === this.selectedCity
        //             );
        //             this.municipalities = selectedCity.municipalities;
        //             this.billingData.city = selectedCity.name;
        //             this.shippingData.city = selectedCity.name;
        //         } else {
        //             this.municipalities = [];
        //         }
        //         this.selectedMunicipality = null;
        //     },
        //     // -------------------- CHECK USER IF USER IS CONNECTED

        //     isConnectedStatus() {
        //         this.isConnected = isLoggedIn();
        //         if (this.isConnected) {
        //             this.user = retrieveAndDecryptData(constant.USER_DATA);
        //             const isSessionId = retrieveAndDecryptData(
        //                 constant.STRIPE_SESSION_ID
        //             );
        //             const urlParams = new URLSearchParams(window.location.search);
        //             // Obtenir la valeur du paramètre session_id
        //             const sessionId = urlParams.get('session_id');

        //             // Vérifier si sessionId existe
        //             if (sessionId) {
        //                 if (sessionId == isSessionId) {
        //                     const orderResponseData = retrieveAndDecryptData(
        //                         constant.ORDER_RESPONSE
        //                     );
        //                     const ship_bill_address = retrieveAndDecryptData(
        //                         constant.SHIP_BILL_ADDRESS
        //                     );
        //                     if (orderResponseData) {
        //                         const formData = {
        //                             order_uuid: orderResponseData.uuid,
        //                             billing_uuid: ship_bill_address.billing_uuid,
        //                             payment_method: 'credit_card',
        //                             payment_date: new Date(),
        //                         };

        //                         console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', formData);
        //                         this.makePayment_bySH(formData);
        //                     } else {
        //                     }
        //                 } else {
        //                     alert('NO');
        //                 }
        //                 // Appeler votre fonction avec sessionId
        //             }
        //         }
        //     },

        //     async submitBillingAddress() {
        //         this.billingData.user_uuid = this.user.uuid;
        //         await this.add_billing_address(this.billingData);
        //     },
        //     async submitShippingAddress() {
        //         this.shippingData.user_uuid = this.user.uuid;
        //         console.log(this.shippingData);
        //         await this.add_shipping_address(this.shippingData);
        //     },
        //     async getAddress() {
        //         const userId = this.user.uuid;
        //         await this.get_billing_address(userId);
        //         await this.get_shipping_address(userId);
        //     },
        //     selectShippingAddress(address) {
        //         this.selectedShippingAddress = address;
        //         this.selectedShippingAddress_uuid = address.uuid;
        //     },

        //     async makeUserOrder() {
        //         const formData = {
        //             user_uuid: this.user.uuid,
        //             shipping_uuid: this.selectedShippingAddress_uuid,
        //             billing_uuid: this.GET_BILLING.uuid,
        //         };
        //         await this.makeOrder(formData);
        //     },
        //     openCreateShippingModal: function () {
        //         this.$modal.show(
        //             () => import('~/components/features/widgets/PvShippingCreate'),
        //             { slug: 'une_variable_ici' },
        //             {
        //                 width: '931',
        //                 height: 'auto',
        //                 adaptive: true,
        //                 class: 'quickview-modal',
        //             }
        //         );
        //     },
    },
};
</script>
<style>
@import url(../../static/css/style-new.css);
.principal {
    background-color: #f0f0f0;
    transition: box-shadow 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}

* {
    box-sizing: border-box;
}

body a {
    text-decoration: none;
}

.controls {
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
}

.controls,
.order-tracker {
    background-color: #fff;
    border-radius: 8px;
}

.order-tracker {
    padding: 40px;
}

.order-info {
    display: flex;
    justify-content: space-between;
}

.order-info__number {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 400;
}

.order-info__number a:last-child {
    color: #1c7ff0;
    font-weight: 700;
}

.order-info__details__arrival-date,
.order-info__details__tracking-number {
    display: block;
    text-align: right;
}

.order-info__details__tracking-number a {
    font-weight: 700;
    color: #000;
}

.order-status__progress {
    margin: 45px 0;
}

.order-status__status-info {
    font-size: 14px;
}

.order-status__status-info ol {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.order-status__status-info__step {
    padding: 0.1px;
}

.icon {
    width: 45%;
    margin-right: 10px;
}

.status {
    margin-top: 10px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
}

/* .overlay-check-bubble,
.checkmark,
.progress-bar {
    visibility: hidden;
} */

.accented {
    fill: #1c7ff0;
    stroke: #1c7ff0;
}

/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
</style>
