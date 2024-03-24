<template>
    <div class="product-default left-details product-list">
        <figure>
            <nuxt-link :to="`/product/default/${product.slug}`">
                <img
                    v-for="(item, index) in product.pictures.slice(0, 2)"
                    :key="`related-large-${index}`"
                    v-lazy="`${item}`"
                    alt="large-picture"
                    width="200"
                    height="450"
                />
            </nuxt-link>

            <div class="label-group">
                <!-- <div class="product-label label-hot" v-if="product.is_hot">
                    HOT
                </div>
                <div
                    class="product-label label-sale"
                    v-if="product.is_sale && !product.price"
                >
                    Sale
                </div> -->
                <div
                    class="product-label label-sale"
                    v-if="product.is_sale && product.price"
                >
                    -{{ discount }}%
                </div>
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
                        product.ratings | priceFormat
                    }}</span>
                </div>
            </div>

            <div class="product-description" v-if="product.short_description">
                <p class="mb-0">{{ product.short_description }}</p>
            </div>
            <div class="price-box" v-if="product.price" key="singlePrice">
                <template v-if="!product.is_sale">
                    <span class="product-price">{{
                        numberWithSpaces(product.price)
                    }}</span>
                </template>

                <template v-else>
                    <span class="product-price">{{
                        numberWithSpaces(product.sale_price)
                    }}</span>
                    <span class="old-price">{{
                        numberWithSpaces(product.price)
                    }}</span>
                </template>
            </div>

            <div class="price-box" v-else>
                <span class="product-price">{{
                    intervalNumberWithSpaces(product.interval_price)
                }}</span>
            </div>

            <div class="product-action d-flex">
                <nuxt-link
                    :to="'/product/default/' + product.slug"
                    class="btn-icon btn-add-cart product-type-simple"
                    v-if="product.variants.length > 0"
                    key="variantProduct"
                >
                    <i class="fa fa-arrow-right"></i>
                    <span>SELECTIONNER UN OPTIONS</span>
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

                <span
                    style="margin: 0px 5px 0px 5px"
                    class="btn-icon-wish added-wishlist"
                    title="Go to Wishlist"
                    v-if="isWishlisted"
                    @click="rmWishlist($event)"
                >
                    <i class="icon-wishlist-2"></i>
                </span>

                <a
                    style="margin: 0px 5px 0px 5px"
                    href="javascript:;"
                    class="btn-icon-wish"
                    title="Add to Wishlist"
                    @click="addWishlist($event)"
                    v-if="!isWishlisted"
                >
                    <i class="icon-wishlist-2"></i>
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
import {
    priceFormatService,
    intervalPriceFormatService,
} from '~/utils/service';

export default {
    props: {
        product: Object,
        adClass: String,
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
            console.log('WISHLIST', this.wishList);
            if (
                this.wishList.findIndex(
                    (item) => item.product.uuid === this.product.uuid
                ) > -1
            )
                return true;
            return false;
        },
    },
    mounted: function () {
        // console.log('LE PRODUIT :::::::::::> ', product_);
        if (this.product.is_sale && this.product.price) {
            this.discount =
                ((this.product.pricemin - this.product.sale_price) /
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
        ...mapActions('wishlist', ['addToWishlist', 'removeFromWishlist']),
        ...mapActions('cart', ['addToCart']),
        openQuickview: function () {
            console.log(this.product.slug);
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
            if (this.product.stock > 0) {
                let saledProduct = { ...this.product };
                if (this.product.is_sale) {
                    saledProduct.price = this.product.sale_price;
                }

                this.addToCart({ product: saledProduct });
            }
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
