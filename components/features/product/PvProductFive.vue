<template>
    <div
        class="product-default deal-product"
        v-if="product"
        style="border-color: white"
    >
        <figure>
            <!-- <nuxt-link :to="`/product/default/${product.slug}`">
                <img
                    v-for="(item, index) in product.large_pictures.slice(0, 1)"
                    :key="`deal-product-${index}`"
                    :src="`${baseUrl}${item.url}`"
                    alt="large-picture"
                    width="450"
                    height="450"
                />
            </nuxt-link> -->

            <nuxt-link
                v-if="
                    product && product.pictures && product.pictures.length > 0
                "
                :to="`/product/default/${product.slug}`"
            >
                <img
                    v-for="(item, index) in product.pictures.slice(0, 2)"
                    :key="`related-large-${index}`"
                    :src="`${item}`"
                    alt="large-picture"
                    width="450"
                    v-lazy="`${item}`"
                    height="450"
                />
            </nuxt-link>

            <div
                class="product-countdown-container custom-product-countdown"
                v-if="product.until"
            >
                <span class="product-countdown-title"
                    >L'offre prend fin dans:</span
                >
                <!-- <pv-count-down
                    class="product-countdown countdown-compact"
                    :until="product.until"
                    :compact="true"
                ></pv-count-down> -->
            </div>
        </figure>
        <div class="product-details">
            <div class="category-list">
                <span
                    v-for="(cat, index) in product.product_categories"
                    :key="`product-category-${index}`"
                >
                    <nuxt-link
                        :to="{ path: '/shop', query: { category: cat.slug } }"
                        >{{ cat.name }}</nuxt-link
                    >
                    <template
                        v-if="index < product.product_categories.length - 1"
                        >,</template
                    >
                </span>
            </div>

            <h3 class="product-title">
                <nuxt-link :to="'/product/default/' + product.slug">{{
                    product.name
                }}</nuxt-link>
            </h3>

            <div class="ratings-container">
                <div class="product-ratings">
                    <span
                        class="ratings"
                        :style="{ width: product.ratings * 20 + '%' }"
                    ></span>
                    <span class="tooltiptext tooltip-top">{{
                        product.ratings.toFixed(2)
                    }}</span>
                </div>
            </div>
            <div
                class="price-box"
                v-if="product.price && product.variants.length === 0"
                key="singlePrice"
            >
                <template v-if="!product.is_sale">
                    <span class="product-price">{{
                        numberWithSpaces(product.price)
                    }}</span>
                </template>

                <template v-else>
                    <span class="old-price">{{
                        numberWithSpaces(product.price)
                    }}</span>
                    <span class="product-price">{{
                        numberWithSpaces(product.sale_price)
                    }}</span>
                </template>
            </div>

            <div class="price-box" v-else>
                <template v-if="minPrice !== maxPrice">
                    <span class="product-price"
                        >{{ numberWithSpaces(minPrice) }} &ndash;
                        {{ numberWithSpaces(maxPrice) }}</span
                    >
                </template>

                <template v-else>
                    <span class="product-price">{{
                        numberWithSpaces(minPrice)
                    }}</span>
                </template>
            </div>

            <div class="product-action">
                <nuxt-link
                    to="/pages/wishlist"
                    class="btn-icon-wish added-wishlist"
                    title="Go to Wishlist"
                    v-if="isWishlisted"
                >
                    <i class="icon-wishlist-2"></i>
                </nuxt-link>

                <a
                    href="javascript:;"
                    class="btn-icon-wish"
                    title="Add to Wishlist"
                    @click="addWishlist($event)"
                    v-if="!isWishlisted"
                >
                    <i class="icon-wishlist-2"></i>
                </a>

                <nuxt-link
                    :to="'/product/default/' + product.slug"
                    class="btn-icon btn-add-cart"
                    v-if="product.variants.length > 0"
                    key="variantProduct"
                >
                    <i class="fa fa-arrow-right"></i>
                    <span>SELECTIONNER UN OPTION</span>
                </nuxt-link>

                <a
                    href="javascript:;"
                    class="btn-icon btn-add-cart product-type-simple"
                    v-else
                    @click="addCart"
                >
                    <i class="icon-shopping-cart"></i>
                    <span>AJOUTER AU PANIER</span>
                </a>

                <a
                    href="javascript:;"
                    class="btn-quickview"
                    title="Apercu"
                    @click="openQuickview"
                >
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';
import PvCountDown from '~/components/features/PvCountDown';
import { priceFormatService } from '~/utils/service';
import {
    isLoggedIn,
    retrieveAndDecryptData,
} from '~/utils/storage/crypto.service';

export default {
    components: {
        PvCountDown,
    },
    props: {
        product: Object,
        adClass: String,
        isActions: {
            type: Boolean,
            default: true,
        },
    },
    data: function () {
        return {
            baseUrl: baseUrl,
            minPrice: 0,
            maxPrice: 0,
            discount: 0,
        };
    },
    computed: {
        ...mapGetters('wishlist', ['wishList']),
        isWishlisted: function () {
            if (
                this.wishList.findIndex(
                    (item) => item.name === this.product.name
                ) > -1
            )
                return true;
            return false;
        },
    },
    mounted: function () {
        console.log('JE SI yo', this.product);
        if (this.product.is_sale && this.product.price) {
            this.discount =
                ((this.product.price.min - this.product.sale_price) /
                    this.product.price.min) *
                100;
            this.discount = parseInt(this.discount);
        }

        if (
            this.product.variants.length > 0
            // && !this.product.price
        ) {
            console.log('DEMARAGE 1');

            this.minPrice = this.product.variants[0].price;
            console.log('DEMARAGE 2', this.minPrice);

            this.product.variants.forEach((item) => {
                let itemPrice = item.sale_price ? item.sale_price : item.price;
                if (this.minPrice > itemPrice) this.minPrice = itemPrice;
                if (this.maxPrice < itemPrice) this.maxPrice = itemPrice;
            });
            console.log('DEMARAGE 3', this.minPrice);
            console.log('DEMARAGE 4', this.maxPrice);
        }
    },
    methods: {
        ...mapActions('wishlist', ['addToWishlist']),
        ...mapActions('cart', ['addToCart']),
        openQuickview: function () {
            this.$modal.show(
                () => import('~/components/features/product/PvQuickview'),
                { slug: this.product.slug },
                {
                    width: '931',
                    height: 'auto',
                    adaptive: true,
                    class: 'quickview-modal',
                }
            );
        },
        // addWishlist: function (e) {
        //     e.currentTarget.classList.add('load-more-overlay', 'loading');

        //     setTimeout(() => {
        //         this.addToWishlist({ product: this.product });
        //         document
        //             .querySelector('.wishlist-popup')
        //             .classList.add('active');

        //         setTimeout(() => {
        //             document
        //                 .querySelector('.wishlist-popup')
        //                 .classList.remove('active');
        //         }, 1000);
        //     }, 1000);
        // },

        addWishlist: function (e) {
            const isConnected = isLoggedIn();
            if (isConnected) {
                e.currentTarget.classList.add('load-more-overlay', 'loading');
                this.addToWishlist({ product: this.product })
                    .then(() => {
                        document
                            .querySelector('.wishlist-popup')
                            .classList.add('active');
                        setTimeout(() => {
                            document
                                .querySelector('.wishlist-popup')
                                .classList.remove('active');
                        }, 1000);
                    })
                    .catch((error) => {
                        console.error(
                            "Erreur lors de l'ajout à la liste de souhaits :",
                            error
                        );
                        e.currentTarget.classList.remove('loading');
                    });
            } else {
                this.openLoginModal();
            }
        },

        // rmWishlist: function (e) {
        //     e.currentTarget.classList.add('load-more-overlay', 'loading');

        //     setTimeout(() => {
        //         this.removeFromWishlist({ product: this.product });
        //         document
        //             .querySelector('.wishlist-popup')
        //             .classList.add('active');

        //         setTimeout(() => {
        //             document
        //                 .querySelector('.wishlist-popup')
        //                 .classList.remove('active');
        //         }, 1000);
        //     }, 1000);
        // },

        rmWishlist: function (e) {
            e.currentTarget.classList.add('load-more-overlay', 'loading');
            this.removeFromWishlist({ product: this.product })
                .then(() => {
                    document
                        .querySelector('.wishlist-rm-popup')
                        .classList.add('active');
                    setTimeout(() => {
                        document
                            .querySelector('.wishlist-rm-popup')
                            .classList.remove('active');
                    }, 1000);
                })
                .catch((error) => {
                    console.error(
                        "Erreur lors de l'ajout à la liste de souhaits :",
                        error
                    );
                    e.currentTarget.classList.remove('loading');
                });
        },
        addCart: function () {
            const isConnected = isLoggedIn();
            if (isConnected) {
                // userData = retrieveAndDecryptData(constant.USER_DATA);
                if (this.product.stock > 0) {
                    let saledProduct = { ...this.product };
                    if (this.product.is_sale) {
                        saledProduct.price = this.product.sale_price;
                    }

                    this.addToCart({ product: saledProduct });
                }
            } else {
                this.openLoginModal();
            }
        },
        openLoginModal() {
            this.$modal.show(
                () => import('~/components/features/modal/PvLoginModal'),
                {},
                {
                    // style: {
                    // 'max-width': '40rem',
                    width: '400',
                    height: 'auto',
                    // },
                    adaptive: true,
                }
            );
        },
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
    },
};
</script>

<style scoped>
.product-details {
    margin-top: 3.4rem !important;
}
</style>
