<template>
    <div class="dropdown cart-dropdown">
        <a
            href="javascript:;"
            title="Cart"
            class="dropdown-toggle dropdown-arrow cart-toggle"
            role="button"
            @click="showCartMenu"
        >
            <i class="icon-cart-thick"></i>
            <span class="cart-count badge-circle">{{ totalCount }}</span>
        </a>

        <div class="cart-overlay" @click="hideCartMenu"></div>

        <div class="dropdown-menu mobile-cart">
            <a
                href="javascript:;"
                title="Close (Esc)"
                class="btn-close"
                @click="hideCartMenu"
                >×</a
            >

            <div class="dropdownmenu-wrapper custom-scrollbar">
                <div class="dropdown-cart-header">Panier</div>

                <template v-if="cartList.length > 0">
                    <div class="dropdown-cart-products">
                        <div
                            class="product"
                            v-for="(product, index) in cartList"
                            :key="'cart-product-' + index"
                        >
                            <div class="product-details">
                                <h4 class="product-title">
                                    <nuxt-link
                                        :to="
                                            '/product/default/' +
                                            (product.product
                                                ? product.product.slug
                                                : product.variant
                                                ? product.variant.slug
                                                : '0')
                                        "
                                    >
                                        {{
                                            product.product
                                                ? product.product.name
                                                : product.variant
                                                ? product.variant.title
                                                : 0
                                        }}
                                    </nuxt-link>
                                </h4>

                                <span class="cart-product-info">
                                    <span class="cart-product-qty">{{
                                        product.quantity
                                    }}</span>
                                    ×
                                    {{
                                        numberWithSpaces(
                                            product.product
                                                ? product.product.price
                                                : product.variant
                                                ? product.variant.price
                                                : 0
                                        )
                                    }}
                                </span>
                            </div>

                            <figure class="product-image-container">
                                <nuxt-link
                                    :to="
                                        '/product/default/' +
                                        (product.product
                                            ? product.product.slug
                                            : product.variant
                                            ? product.variant.slug
                                            : 0)
                                    "
                                >
                                    <img
                                        v-lazy="
                                            `${
                                                product.product
                                                    ? product.product
                                                          .pictures[0]
                                                    : product.variant
                                                    ? product.variant
                                                          .pictures[0]
                                                    : 0
                                            }`
                                        "
                                        alt="product"
                                        width="150"
                                        height="
                                            150
                                        "
                                    />
                                </nuxt-link>

                                <a
                                    href="javascript:;"
                                    class="btn-remove"
                                    title="Remove Product"
                                    @click="removeCart(product)"
                                >
                                    <span>×</span>
                                </a>
                            </figure>
                        </div>
                    </div>

                    <div class="dropdown-cart-total">
                        <span>Total HT:</span>
                        <span class="cart-total-price float-right">{{
                            numberWithSpaces(cartAmount.ht_amount)
                        }}</span>
                    </div>

                    <div class="dropdown-cart-action">
                        <nuxt-link
                            to="/pages/cart"
                            class="btn btn-gray btn-block view-cart"
                            >Panier</nuxt-link
                        >
                        <nuxt-link
                            to="/pages/checkout"
                            class="btn btn-dark btn-block"
                            >Vérification</nuxt-link
                        >
                    </div>
                </template>

                <p v-else class="cart-empty-text">
                    Aucun produit dans le panier
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';
import {
    priceFormatService,
    intervalPriceFormatService,
} from '~/utils/service';

export default {
    data: function () {
        return {
            baseUrl: baseUrl,
        };
    },
    mounted() {
        this.getCart();
        // console.log('mutata 2', cartList);
    },
    computed: {
        ...mapGetters('cart', [
            'cartList',
            'totalCount',
            'totalPrice',
            'cartAmount',
        ]),
    },
    methods: {
        ...mapActions('cart', ['removeFromCart', 'getCart']),
        showCartMenu: function () {
            document.querySelector('body').classList.add('cart-opened');
        },
        hideCartMenu: function () {
            document.querySelector('body').classList.remove('cart-opened');
        },
        removeCart: function (product) {
            this.removeFromCart({ product: product });
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
