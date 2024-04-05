<template>
    <main class="main">
        <div class="order-content">
            <h3 class="account-sub-title d-none d-md-block">
                <i class="sicon-social-dropbox align-middle mr-3"></i>Commandes
            </h3>
        </div>

        <div class="container">
            <!-- <div class="cart-message carted" style="display: none">
                <strong class="single-cart-notice" v-if="currentProduct"
                    >“{{ currentProduct.name }}”</strong
                >
                <span>has been added to cart successfully.</span>
            </div>

            <div class="cart-message removed" style="display: none">
                <strong class="single-cart-notice" v-if="currentProduct"
                    >“{{ currentProduct.name }}”</strong
                >
                <span>has been successfully removed.</span>
            </div> -->

            <div
                class="wishlist-table-container"
                v-if="GET_USER_ORDER.length > 0"
                key="noEmpty"
            >
                <table class="table table-wishlist mb-0">
                    <thead>
                        <tr>
                            <th class="thumbnail-col">N° CMDE</th>
                            <th class="product-col">DATE</th>
                            <th class="price-col">TOTAL</th>
                            <th class="status-col">STATUT</th>
                            <th class="action-col">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="product-row"
                            v-for="(product, index) in GET_USER_ORDER.slice(
                                0,
                                6
                            )"
                            :key="'order-' + index"
                        >
                            <td>
                                <h5 class="product-title">
                                    #{{ product.uuid.slice(0, 6) }}
                                </h5>
                            </td>
                            <td>
                                <!--  -->
                                <!--  -->
                                <!--  -->
                                <!--  -->
                                <!--  -->
                                <!--  -->
                            </td>

                            <td class="price-box" key="singlePrice">
                                <span class="new-price">{{
                                    numberWithSpaces(product.total_amount)
                                }}</span>
                            </td>

                            <td>
                                <span class="stock-status">{{
                                    product.status
                                }}</span>
                            </td>

                            <td class="action">
                                <nuxt-link
                                    :to="
                                        '/pages/history-details?uuid=' +
                                        product.uuid
                                    "
                                    class="btn btn-dark btn-add-cart product-type-simple btn-shop"
                                >
                                    DETAILS
                                </nuxt-link>

                                <!-- <nuxt-link
                                    :to="
                                        '/product/default/' +
                                        product.product.slug
                                    "
                                    class="btn btn-dark btn-add-cart btn-shop"
                                    v-else
                                    >SELECTIONNER UN OPTION</nuxt-link
                                > -->
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr class="mt-0 mb-3 pb-2" />

                <nuxt-link to="/shop" class="btn btn-dark"
                    >Aller au magasin</nuxt-link
                >
            </div>

            <div class="box-content" v-else>
                <div class="wishlist-table-container">
                    <table
                        class="table-wishlist"
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

                        <tbody class="wishlist-items-wrapper">
                            <tr class="border-0 py-0">
                                <td colspan="6" class="px-3 py-2 text-center">
                                    <i class="far fa-heart wishlist-empty"></i>
                                </td>
                            </tr>
                            <tr class="border-0 py-0">
                                <td
                                    colspan="6"
                                    class="px-3 py-2 wishlist-empty wishlist-text"
                                >
                                    Aucun produit ajouté à la liste de souhaits
                                </td>
                            </tr>
                            <tr class="border-0 py-0">
                                <td colspan="6" class="px-3 text-center">
                                    <nuxt-link
                                        to="/shop"
                                        class="btn btn-go-shop"
                                        >ALLER AU SHOPPING</nuxt-link
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
    priceFormatService,
    intervalPriceFormatService,
} from '~/utils/service';

export default {
    data: function () {
        return {
            orderItems: [],
        };
    },
    computed: {
        ...mapGetters('order', ['GET_USER_ORDER']),
    },
    mounted: function () {
        this.getOrders();
    },
    methods: {
        ...mapActions('order', ['getOrders']),
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },
    },
};
</script>
