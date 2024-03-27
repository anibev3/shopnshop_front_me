<template>
    <main class="main">
        <div class="order-content">
            <h3 class="account-sub-title d-none d-md-block">
                <i class="sicon-social-dropbox align-middle mr-3"></i>Commandes
            </h3>
        </div>

        <div class="container">
            <div class="cart-message carted" style="display: none">
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
            </div>

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
                            <th class="status-col">STATUS</th>
                            <th class="action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="product-row"
                            v-for="(product, index) in GET_USER_ORDER"
                            :key="'wishlist-' + index"
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
import { baseUrl, currentDemo } from '~/api';
import {
    priceFormatService,
    intervalPriceFormatService,
} from '~/utils/service';

export default {
    data: function () {
        return {
            baseUrl: baseUrl,
            currentDemo: currentDemo,
            wishItems: [],
            orderItems: [],
            currentProduct: null,
        };
    },
    computed: {
        ...mapGetters('wishlist', ['wishList']),
        ...mapGetters('order', ['GET_USER_ORDER']),
    },
    watch: {
        wishList: function () {
            this.makeCartItems();
        },
    },
    mounted: function () {
        this.makeCartItems();
        this.getOrders();
    },
    methods: {
        ...mapActions('wishlist', ['removeFromWishlist', 'getWishlist']),
        ...mapActions('cart', ['addToCartFromWishlist']),
        ...mapActions('order', ['getOrders']),
        makeCartItems: function () {
            this.wishItems = this.wishList;
            console.log('LES WISHLIST', this.wishItems);
            this.wishItems = this.wishList.reduce((acc, product) => {
                let minPrice = 0,
                    maxPrice = 0;
                console.log('WISHLIST_PRODUCT', product.product);
                if (
                    product.product.variants.length > 0
                    // && !this.product.price
                ) {
                    console.log('DEMARAGE 1');

                    minPrice = product.product.variants[0].price;
                    console.log('DEMARAGE 2', minPrice);

                    product.product.variants.forEach((item) => {
                        let itemPrice = item.sale_price
                            ? item.sale_price
                            : item.price;
                        if (minPrice > itemPrice) minPrice = itemPrice;
                        if (maxPrice < itemPrice) maxPrice = itemPrice;
                    });
                    console.log('DEMARAGE 3', minPrice);
                    console.log('DEMARAGE 4', maxPrice);
                }

                return [
                    ...acc,
                    {
                        ...product,
                        minPrice: minPrice,
                        maxPrice: maxPrice,
                    },
                ];
            }, []);
        },
        openQuickview: function (product) {
            this.$modal.show(
                () => import('~/components/features/product/PvQuickview'),
                { slug: product.slug },
                {
                    width: '931',
                    height: 'auto',
                    adaptive: true,
                    class: 'quickview-modal',
                }
            );
        },
        addCart: function (product) {
            this.currentProduct = product;
            console.log(product.uuid);
            document.querySelector('.cart-message.removed').style.display =
                'none';
            document.querySelector('.cart-message.carted').style.display =
                'block';
            this.addToCartFromWishlist({ product: product });
            this.removeFromWishlist({ id: product.uuid });
        },
        removeWishlist: function (product) {
            this.currentProduct = product;
            document.querySelector('.cart-message.carted').style.display =
                'none';
            document.querySelector('.cart-message.removed').style.display =
                'block';
            this.removeFromWishlist({ id: product.product.uuid });
        },

        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },
    },
};
</script>
