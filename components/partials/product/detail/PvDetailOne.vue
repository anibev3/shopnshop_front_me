<template>
    <div>
        <h1 class="product-title">{{ product.name }}</h1>
        <pv-product-nav
            v-if="isProductNav"
            :prev-product="prevProduct"
            :next-product="nextProduct"
        ></pv-product-nav>

        <div class="ratings-container">
            <div class="product-ratings">
                <span
                    class="ratings"
                    :style="'width:' + product.ratings * 20 + '%'"
                ></span>
                <span class="tooltiptext tooltip-top">{{
                    product.ratings | priceFormat
                }}</span>
            </div>
            <a
                href="javascript:;"
                class="rating-link"
                v-if="product.reviews > 0"
                >( {{ product.reviews }} Reviews )</a
            >
            <a href="javascript:;" class="rating-link" v-else
                >( Il n'y a pas encore de commentaire. )</a
            >
        </div>

        <hr class="short-divider" />

        <div
            class="price-box"
            v-if="product.price && product.variants.length === 0"
            key="singlePrice"
        >
            <!-- <h4>111111111111111</h4> -->
            <template v-if="!product.is_sale">
                <span class="new-price">{{
                    numberWithSpaces(product.price)
                }}</span>
            </template>

            <template v-else>
                <span class="new-price">{{
                    numberWithSpaces(product.sale_price)
                }}</span>
                <span class="old-price">{{
                    numberWithSpaces(product.price)
                }}</span>
            </template>
        </div>

        <div class="price-box" v-else>
            <!-- <h4>22222222222222</h4> -->
            <template v-if="product.interval_price">
                <span class="new-price">{{
                    intervalNumberWithSpaces(product.interval_price)
                }}</span>
            </template>

            <template v-else>
                <span class="new-price">{{
                    numberWithSpaces(product.price)
                }}</span>
            </template>
        </div>

        <div class="product-countdown-container-two mt-1" v-if="product.until">
            <h5 class="daily-deal-title">L'offre prend fin dans :</h5>
            <pv-count-down
                class="product-countdown countdown-compact"
                :until="product.until"
                :label-short="true"
            ></pv-count-down>
        </div>

        <div class="product-desc" v-if="product.short_description">
            <p>{{ product.short_description }}</p>
        </div>

        <div class="row">
            <div class="col-md-5">
                <ul class="single-info-list">
                    <li v-if="product.sku">
                        SKU:
                        <strong>{{ product.sku }}</strong>
                    </li>

                    <li>
                        CATEGORY:
                        <strong>
                            <nuxt-link
                                :to="{
                                    path: '/shop',
                                    query: { category: item.slug },
                                }"
                                class="product-category"
                                v-for="(
                                    item, index
                                ) in product.product_categories"
                                :key="'product-category-' + index"
                            >
                                {{ item.name }}
                                <template
                                    v-if="
                                        index <
                                        product.product_categories.length - 1
                                    "
                                    >,</template
                                >
                            </nuxt-link>
                        </strong>
                    </li>

                    <li v-if="product.tags.length > 0">
                        TAGS:
                        <strong>
                            <nuxt-link
                                :to="{
                                    path: '/shop',
                                    query: { tag: item.slug },
                                }"
                                class="product-category"
                                v-for="(item, index) in product.tags"
                                :key="'product-category-' + index"
                            >
                                #{{ item.name }}
                                <template v-if="index < product.tags.length - 1"
                                    >,</template
                                >
                            </nuxt-link>
                        </strong>
                    </li>
                </ul>
            </div>
            <div class="col-md-7">
                <!-- ---------------------------------------------------------------------- -->
                <div>
                    <button v-if="selectedVariant" @click="resetSelection">
                        Réinitialiser
                    </button>
                    <div
                        class="text-center"
                        style="font-size: 12px"
                        v-if="product.variants.length > 0"
                    >
                        <strong>VARIANTS</strong>
                    </div>
                    <p
                        class="text-center"
                        style="margin-bottom: 0.2rem; font-size: 10px"
                        v-if="product.variants.length > 0"
                    >
                        Sélectionner une variante
                    </p>
                    <div class="scrollable-div">
                        <div
                            v-for="(variant, index) in product.variants"
                            :key="'variant-' + index"
                            class="variant-container"
                            @click="
                                variant.quantity > 0 && selectVariant(variant)
                            "
                            :class="{
                                'selected-variant': isSelectedVariant(variant),
                                'out-of-stock': variant.quantity === 0,
                            }"
                        >
                            <div class="variant-details">
                                <p
                                    :style="{
                                        padding: '7px 7px',
                                        borderRadius: '5px',
                                        backgroundColor:
                                            variant.options[0].value,
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }"
                                ></p>
                                <p style="margin: 10px"></p>
                                <p
                                    :style="{
                                        padding: '7px 7px',
                                        border: '1px solid #ebe4e4',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                    }"
                                    class="d-flex justify-content-around"
                                >
                                    <span>{{ variant.options[1].value }}</span>
                                    -
                                    <span>
                                        {{ numberWithSpaces(variant.price) }}
                                    </span>

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5359/5359700.png"
                                        alt=""
                                        style="width: 11%"
                                        v-if="variant.quantity === 0"
                                    />

                                    <span v-if="variant.quantity > 0">
                                        <strong>Qté:</strong>
                                        {{ variant.quantity }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-action">
            <!-- <vue-slide-toggle
                :open="(isPriceShow = true)"
                v-if="product.variants.length === 0"
            >
                <div class="price-box product-filtered-price" key="samePrice">
                    <span class="product-stock"
                        >{{ product.stock }} en stock</span
                    >
                </div>
            </vue-slide-toggle> -->

            <div class="product-single-qty">
                <div
                    class="input-group bootstrap-touchspin bootstrap-touchspin-injected"
                >
                    <span class="input-group-btn input-group-prepend">
                        <button
                            class="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                            type="button"
                            @click="minusQty"
                        ></button>
                    </span>
                    <input
                        class="horizontal-quantity form-control bg-transparent"
                        type="text"
                        v-model.number="qty"
                        :max="product.stock"
                        @change="changeQty($event)"
                    />
                    <span class="input-group-btn input-group-append">
                        <button
                            class="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                            type="button"
                            @click="plusQty"
                        ></button>
                    </span>
                </div>
            </div>

            <a
                href="javascript:;"
                class="btn btn-dark add-cart mr-2"
                title="AJOUTER AU PANIER"
                @click="addCart"
                :class="{ disabled: !isCartActive }"
                >Ajouter au panier</a
            >

            <nuxt-link to="/pages/cart" class="btn btn-gray view-cart d-none"
                >Panier</nuxt-link
            >
        </div>

        <hr class="divider mb-0 mt-0" />

        <div class="product-single-share mb-3">
            <label class="sr-only">Share:</label>

            <div class="social-icons mr-2" v-if="isShare">
                <a
                    href="javascript:;"
                    class="social-icon social-facebook icon-facebook"
                    title="Facebook"
                ></a>
                <a
                    href="javascript:;"
                    class="social-icon social-twitter icon-twitter"
                    title="Twitter"
                ></a>
                <a
                    href="javascript:;"
                    class="social-icon social-linkedin fab fa-linkedin-in"
                    title="Linkedin"
                ></a>
                <a
                    href="javascript:;"
                    class="social-icon social-gplus fab fa-google-plus-g"
                    title="Google +"
                ></a>
                <a
                    href="javascript:;"
                    class="social-icon social-mail icon-mail-alt"
                    title="Mail"
                ></a>
            </div>

            <nuxt-link
                to="/pages/wishlist"
                class="btn-icon-wish add-wishlist added-wishlist"
                title="Go to Wishlist"
                v-if="isWishlisted"
            >
                <i class="icon-wishlist-2"></i>
                <span>Go to Wishlist</span>
            </nuxt-link>

            <a
                href="javascript:;"
                class="btn-icon-wish add-wishlist"
                title="Add to Wishlist"
                @click="addWishlist($event)"
                v-if="!isWishlisted"
            >
                <i class="icon-wishlist-2"></i>
                <span>Add to Wishlist</span>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';
import PvProductNav from '~/components/partials/product/PvProductNav';
import { baseUrl } from '~/api/index';
import PvCountDown from '~/components/features/PvCountDown';
import {
    intervalPriceFormatService,
    priceFormatService,
} from '~/utils/service';

export default {
    components: {
        VueSlideToggle,
        PvProductNav,
        PvCountDown,
    },
    props: {
        product: Object,
        prevProduct: Object,
        nextProduct: Object,
        isProductNav: {
            type: Boolean,
            default: true,
        },
    },
    data: function () {
        return {
            minPrice: 0,
            maxPrice: 0,
            qty: 1,
            currentIndex: 0,
            baseUrl: baseUrl,
            vSizes: [],
            vColors: [],
            curSize: {
                name: null,
                text: null,
                image: null,
            },
            curColor: {
                name: null,
                text: null,
                image: null,
            },
            tIndex: 0,
            isShare: {
                type: Boolean,
                default: true,
            },
            selectedVariant: null,
        };
    },
    watch: {
        $route: function () {
            this.getFlag();
        },
    },
    computed: {
        ...mapGetters('wishlist', ['wishList']),
        curIndex: function () {
            if (this.curColor.name !== null && this.vSizes.length === 0) {
                let index = this.product.variants.findIndex(
                    (item) => item.colors[0].color_name === this.curColor.name
                );
                this.tIndex = index;
                return index;
            }
            if (this.curSize.name !== null && this.vColors.length === 0) {
                let index = this.product.variants.findIndex(
                    (item) => item.size[0].size_name === this.curSize.name
                );
                this.tIndex = index;
                return index;
            }
            if (this.curColor.name !== null && this.curSize.name !== null) {
                let index = this.product.variants.findIndex(
                    (item) =>
                        item.colors[0].color_name === this.curColor.name &&
                        item.size[0].size_name === this.curSize.name
                );
                this.tIndex = index;
                return index;
            } else {
                return this.tIndex;
            }
        },
        isCartActive: function () {
            if (this.selectedVariant !== null) {
                if (this.selectedVariant.quantity < parseInt(this.qty))
                    return false;
            }
            if (this.product.variants.length === 0) return true;
            // if (this.curSize.name !== null && this.curColor.name !== null)
            //     return true;
            // if (this.curColor.name !== null && this.vSizes.length === 0)
            //     return true;
            // if (this.curSize.name !== null && this.vColors.length === 0)
            //     return true;
            if (this.selectedVariant !== null) return true;

            return false;
        },
        isWishlisted: function () {
            if (
                this.wishList.findIndex(
                    (item) => item.name === this.product.name
                ) > -1
            )
                return true;
            return false;
        },
        // isPriceShow: function () {
        //     if (this.curSize.name !== null && this.curColor.name !== null)
        //         return true;
        //     if (this.curColor.name !== null && this.vSizes.length === 0)
        //         return true;
        //     if (this.curSize.name !== null && this.vColors.length === 0)
        //         return true;
        //     return false;
        // },
    },
    created: function () {
        this.getFlag();
    },
    mounted: function () {
        console.log('DEMARAGE');
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
        ...mapActions('cart', ['addToCart']),
        ...mapActions('wishlist', ['addToWishlist']),
        selectVariant(variant) {
            // Mettre à jour l'état de l'option sélectionnée
            this.selectedVariant = variant;
        },
        isSelectedVariant(variant) {
            // Vérifier si la variante est sélectionnée
            return this.selectedVariant === variant;
        },
        resetSelection() {
            // Réinitialiser la sélection
            this.selectedVariant = null;
        },
        plusQty: function () {
            if (this.qty < this.product.stock) this.qty++;
        },
        minusQty: function () {
            if (this.qty > 1) this.qty--;
        },

        addCart: function () {
            if (this.isCartActive) {
                let saledProduct;
                if (this.product.variants.length > 0) {
                    let saledPrice;
                    if (this.product.price)
                        saledPrice = this.product.sale_price
                            ? this.product.sale_price
                            : this.product.price.min;
                    else {
                        // saledPrice = this.product.variants[this.curIndex]
                        //     .sale_price
                        //     ? this.product.variants[this.curIndex].sale_price
                        //     : this.product.variants[this.curIndex].price;

                        saledPrice = this.selectedVariant.price;
                    }

                    // let saledName;
                    // if (this.curColor.name && this.curSize.name) {
                    //     saledName =
                    //         this.curColor.name.charAt(0).toUpperCase() +
                    //         this.curColor.name.slice(1) +
                    //         ', ' +
                    //         this.curSize.name;
                    // }
                    // if (!this.curColor.name) {
                    //     saledName = this.curSize.name;
                    // }
                    // if (!this.curSize.name) {
                    //     saledName =
                    //         this.curColor.name.charAt(0).toUpperCase() +
                    //         this.curColor.name.slice(1);
                    // }

                    saledProduct = {
                        ...this.product,
                        qty: this.qty,
                        name: this.product.name,
                        //  + ' - ' + saledName,
                        price: saledPrice,
                        selectedVariant: this.selectedVariant,
                    };
                } else {
                    saledProduct = {
                        ...this.product,
                        qty: this.qty,
                        price:
                            // this.product.sale_price
                            //     ? this.product.sale_price
                            //     :
                            this.product.price.min,
                    };
                }

                this.addToCart({ product: saledProduct });
            }
        },
        addWishlist: function (e) {
            e.currentTarget.classList.add('load-more-overlay', 'loading');

            setTimeout(() => {
                this.addToWishlist({ product: this.product });
                document
                    .querySelector('.wishlist-popup')
                    .classList.add('active');

                setTimeout(() => {
                    document
                        .querySelector('.wishlist-popup')
                        .classList.remove('active');
                }, 1000);
            }, 1000);
        },
        isDisabled: function (color, size) {
            if (!color.name || !size.name) return false;

            if (this.vSizes.length === 0) {
                return (
                    this.product.variants.findIndex(
                        (item) => item.colors[0].color_name === color.name
                    ) === -1
                );
            }

            if (this.vColors.length === 0) {
                return (
                    this.product.variants.findIndex(
                        (item) => item.size[0].size_name === size.name
                    ) === -1
                );
            }

            return (
                this.product.variants.findIndex(
                    (item) =>
                        item.colors[0].color_name === color.name &&
                        item.size[0].size_name === size.name
                ) === -1
            );
        },
        toggleColorItem: function (color) {
            if (!this.isDisabled(color, this.curSize)) {
                if (this.curColor === color) {
                    this.curColor = { name: null, text: null, image: null };
                } else {
                    this.curColor = color;
                }
            }
        },
        toggleSizeItem: function (size) {
            if (!this.isDisabled(this.curColor, size)) {
                if (this.curSize === size) {
                    this.curSize = { name: null, text: null, image: null };
                } else {
                    this.curSize = size;
                }
            }
        },
        resetValue() {
            this.curColor = { name: null, text: null, image: null };
            this.curSize = { name: null, text: null, image: null };
        },
        changeQty(e) {},
        getFlag: function () {
            if (this.$route.path.includes('sticky-info')) this.isShare = false;
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
<style scoped>
.variant-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 3px;
    padding: 4px;
}

.variant-container h3 {
    margin-top: 0;
}

.variant-details p {
    margin: 5px 0;
}

.variant-details p strong {
    font-weight: bold;
}

.selected-variant {
    border: 3px solid rgb(0, 0, 0); /* Exemple de bordure épaisse */
    border-color: rgb(0, 0, 0); /* Exemple de couleur de bordure différente */
}

.scrollable-div {
    max-height: 183px;
    overflow-y: auto;
}
</style>
