<template>
    <main class="main main-test">
        <div class="container checkout-container">
            <ul
                class="checkout-progress-bar d-flex justify-content-center flex-wrap"
            >
                <li>
                    <a href="javascript:;" class="disabled">Panier</a>
                </li>
                <li class="disabled">
                    <a href="javascript:;">Vérification</a>
                </li>
                <li class="active">
                    <nuxt-link to="/pages/order-complete"
                        >Commande terminée</nuxt-link
                    >
                </li>
            </ul>

            <div class="box-content">
                <table
                    class="table-cart"
                    data-pagination="no"
                    data-per-page="5"
                    data-page="1"
                    data-id
                    data-token
                >
                    <thead class="d-none">
                        <tr>
                            <th class="product-thumbnail"></th>

                            <th class="product-name">
                                <span class="nobr">Product</span>
                            </th>

                            <th class="product-price">
                                <span class="nobr">price</span>
                            </th>

                            <th class="product-stock-status">
                                <span class="nobr">Stock status</span>
                            </th>

                            <th class="product-add-to-cart">
                                <span class="nobr">Actions</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="cart-items-wrapper" v-if="order">
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 py-2 text-center">
                                <p class="noproduct-msg mb-2">
                                    Votre commande a été passé avec succès.
                                </p>
                                <i class="icon-bag-2 cart-empty"></i>
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td
                                colspan="6"
                                class="px-3 py-2 text-center cart-empty"
                            >
                                Merci pour la confiance que vous nous accorder
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 text-center">
                                <nuxt-link
                                    to="/shop"
                                    class="btn btn-go-shop"
                                    style="margin-right: 5px"
                                    >ALLER AU MAGASIN</nuxt-link
                                >
                                <nuxt-link
                                    :to="
                                        '/pages/history-details?uuid=' +
                                        order.uuid
                                    "
                                    class="btn btn-go-shop"
                                    style="margin-left: 5px"
                                    >VOIR DETAILS COMMANDE</nuxt-link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mb-6"></div>
            </div>
        </div>
    </main>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

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
    middleware: 'authenticated',
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
            order: Object,
            selectedShippingAddress: null,
            selectedShippingAddress_uuid: null,
            billing_uuid: null,
        };
    },

    created: function () {
        this.isConnectedStatus();
    },
    // async mounted() {
    // },
    methods: {
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        numbertotalWithSpaces(price, qty) {
            return totalpriceFormatService(price, qty);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },

        // -------------------- CHECK USER IF USER IS CONNECTED

        isConnectedStatus() {
            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                this.order = retrieveAndDecryptData(constant.ORDER_RESPONSE);
            }
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
