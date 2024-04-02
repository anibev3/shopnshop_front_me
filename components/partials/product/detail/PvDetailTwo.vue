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
            <a href="javascript:;" class="rating-link"
                >( {{ product.reviews }} Commentaires )</a
            >
        </div>

        <hr class="short-divider" />

        <div class="price-box" v-if="product.price" key="singlePrice">
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
            <template v-if="product.interval_price">
                <span class="new-price">{{
                    intervalNumberWithSpaces(product.interval_price)
                }}</span>
            </template>

            <!-- <template v-else>
                <span class="new-price">${{ minPrice | priceFormat }}</span>
            </template> -->
        </div>

        <div class="product-countdown-container-two mt-1" v-if="product.until">
            <h5 class="daily-deal-title">L'offre se termine dans :</h5>
            <!-- <pv-count-down
                class="product-countdown countdown-compact"
                :until="product.until"
                :label-short="true"
            ></pv-count-down> -->
        </div>

        <div class="product-desc" v-if="product.description">
            <p v-html="formatDescription(product.description)"></p>
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
                                        // border: `1px solid {variant.options[0].value}`,
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

        <!-- <div
            class="product-filters-container"
            v-if="product.variants.length > 0"
        >
            <div class="product-single-filter" v-if="vColors.length > 0">
                <label>Color:</label>

                <ul
                    class="config-size-list config-color-list config-filter-list"
                >
                    <li
                        v-for="(item, index) in vColors"
                        :key="'variant-color-' + index"
                        @click="toggleColorItem(item)"
                        :class="{
                            disabled: isDisabled(item, curSize),
                            active: curColor === item,
                        }"
                    >
                        <a
                            href="javascript:;"
                            class="filter-thumb p-0"
                            :class="{ disabled: isDisabled(item, curSize) }"
                            v-if="item.image[0]"
                            key="thumbForm"
                        >
                            <img
                                :src="`${baseUrl}${item.image[0].url}`"
                                :width="item.image[0].width"
                                :height="item.image[0].height"
                                alt="color thumb"
                            />
                        </a>
                        <a
                            href="javascript:;"
                            class="filter-color border-0"
                            :style="{ backgroundColor: item.text }"
                            :class="{ disabled: isDisabled(item, curSize) }"
                            v-else
                            key="colorForm"
                        ></a>
                    </li>
                </ul>
            </div>

            <div class="product-single-filter" v-if="vSizes.length > 0">
                <label>Size:</label>

                <ul class="config-size-list">
                    <li
                        v-for="(item, index) in vSizes"
                        :key="'variant-size-' + index"
                        @click="toggleSizeItem(item)"
                        :class="{
                            disabled: isDisabled(curColor, item),
                            active: curSize === item,
                        }"
                    >
                        <a
                            href="javascript:;"
                            class="filter-thumb p-0"
                            :class="{ disabled: isDisabled(item, curSize) }"
                            v-if="item.image[0]"
                            key="thumbSizeForm"
                        >
                            <img
                                :src="`${baseUrl}${item.image[0].url}`"
                                :width="item.image[0].width"
                                :height="item.image[0].height"
                                alt="size thumb"
                            />
                        </a>
                        <a
                            href="javascript:;"
                            class="d-flex align-items-center justify-content-center"
                            :class="{ disabled: isDisabled(curColor, item) }"
                            v-else
                        >
                            <template v-if="item.text">{{
                                item.text
                            }}</template>
                            <img
                                v-else
                                :src="`${baseUrl}${item.thumbnail[0]}`"
                                alt="thumb-image"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <div class="product-single-filter">
                <vue-slide-toggle
                    :open="curColor.name !== null || curSize.name !== null"
                >
                    <label></label>
                    <a
                        class="font1 text-uppercase clear-btn"
                        href="javascript:;"
                        @click="resetValue"
                        >Clear</a
                    >
                </vue-slide-toggle>
            </div>
        </div> -->

        <div class="sticky-cart-header sticky-header">
            <div class="container">
                <div class="sticky-img mr-4">
                    <img
                        :src="product.pictures[0]"
                        :width="50"
                        :height="50"
                        alt="product"
                    />
                </div>
                <div class="sticky-detail">
                    <div class="sticky-product-name">
                        <h2 class="product-title w-100 ls-0">
                            {{ product.name }}
                        </h2>
                        <div
                            class="price-box"
                            v-if="product.price"
                            key="singlePrice"
                        >
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
                            <template v-if="product.interval_price">
                                <span class="product-price">{{
                                    intervalNumberWithSpaces(
                                        product.interval_price
                                    )
                                }}</span>
                            </template>

                            <!-- <template v-else>
                                <span class="product-price"
                                    >${{ minPrice | priceFormat }}</span
                                >
                            </template> -->
                        </div>
                    </div>
                    <div class="ratings-container">
                        <div class="product-ratings">
                            <span
                                class="ratings"
                                :style="'width:' + product.ratings * 20 + '%'"
                            ></span>
                        </div>
                        <a
                            href="javascript:;"
                            class="rating-link"
                            v-if="product.reviews > 0"
                            >( {{ product.reviews }} Commentaires )</a
                        >
                        <a href="javascript:;" class="rating-link" v-else
                            >( Il n’y a pas encore de commentaires. )</a
                        >
                    </div>
                </div>

                <div class="product-action">
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
                                class="horizontal-quantity form-control"
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
                        >AJOUTER AU PANIER</a
                    >

                    <nuxt-link to="/pages/cart" class="btn btn-gray view-cart"
                        >Panier</nuxt-link
                    >
                </div>
            </div>
        </div>

        <hr class="divider mb-0 mt-0" />

        <div class="product-single-share mb-3 d-flex justify-content-between">
            <label class="sr-only">Partager:</label>

            <div class="social-icons mr-2">
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
                <span>Ajouter au favoris</span>
            </nuxt-link>

            <a
                href="javascript:;"
                class="btn-icon-wish add-wishlist"
                title="Add to Wishlist"
                @click="addWishlist($event)"
                v-if="!isWishlisted"
            >
                <i class="icon-wishlist-2"></i>
                <span>Ajouter au favoris</span>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';
import { baseUrl } from '~/api/index';
import PvProductNav from '~/components/partials/product/PvProductNav';
import PvCountDown from '~/components/features/PvCountDown';
import {
    priceFormatService,
    intervalPriceFormatService,
} from '~/utils/service';

import {
    isLoggedIn,
    retrieveAndDecryptData,
    openLoginModal,
} from '~/utils/storage/crypto.service';
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
            selectedVariant: null,
        };
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
    },
    mounted: function () {
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

        // if (this.product.variants.length > 0) {
        //     if (this.product.variants[0].size[0])
        //         this.product.variants.forEach((item) => {
        //             if (
        //                 this.vSizes.findIndex(
        //                     (vsize) => vsize.name === item.size[0].size_name
        //                 ) === -1
        //             )
        //                 this.vSizes.push({
        //                     name: item.size[0].size_name,
        //                     text: item.size[0].size,
        //                     image: item.size[0].size_thumbnail,
        //                 });
        //         });

        //     if (this.product.variants[0].colors[0])
        //         this.product.variants.forEach((item) => {
        //             if (
        //                 this.vColors.findIndex(
        //                     (vColor) =>
        //                         vColor.name === item.colors[0].color_name
        //                 ) === -1
        //             )
        //                 this.vColors.push({
        //                     name: item.colors[0].color_name,
        //                     text: item.colors[0].color,
        //                     image: item.colors[0].color_thumbnail,
        //                 });
        //         });
        // }

        window.addEventListener('scroll', this.stickyCartHandler, {
            passive: true,
        });
        window.addEventListener('resize', this.stickyCartHandler);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.stickyCartHandler, {
            passive: true,
        });
        window.removeEventListener('resize', this.stickyCartHandler);
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        ...mapActions('wishlist', ['addToWishlist']),
        plusQty: function () {
            if (this.qty < this.product.stock) this.qty++;
        },
        minusQty: function () {
            if (this.qty > 1) this.qty--;
        },
        addCart: function () {
            const isConnected = isLoggedIn();
            if (isConnected) {
                if (this.isCartActive) {
                    let saledProduct;
                    if (this.product.variants.length > 0) {
                        let saledPrice;
                        // if (this.product.price)
                        //     saledPrice = this.product.sale_price
                        //         ? this.product.sale_price
                        //         : this.product.price.min;
                        // else {
                        saledPrice = this.selectedVariant.price;
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
                                this.product.price,
                        };
                    }

                    this.addToCart({ product: saledProduct });
                }
            } else {
                this.openLoginModal();
            }
        },
        addWishlist: function (e) {
            const isConnected = isLoggedIn();
            if (isConnected) {
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
            } else {
                this.openLoginModal();
            }
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
        stickyCartHandler: function () {
            let top = 600;
            let stickyHeader = document.querySelector('.sticky-cart-header');
            let header = document.querySelector(
                '.header .sticky-wrapper.desktop-sticky .sticky-header'
            );

            if (
                (window.pageYOffset < top || window.innerWidth < 992) &&
                stickyHeader.classList.contains('fixed')
            ) {
                stickyHeader.classList.remove('fixed');
            }
            let headerHeight = 0;
            let height = 0;
            if (stickyHeader) {
                height = stickyHeader.offsetHeight;
            }
            if (header) {
                headerHeight = header.offsetHeight;
            }

            if (window.pageYOffset >= top && window.innerWidth > 991) {
                if (stickyHeader) {
                    stickyHeader.classList.add('fixed');
                    if (!document.querySelector('.sticky-cart-wrapper')) {
                        let newNode = document.createElement('div');
                        newNode.className = 'sticky-cart-wrapper';
                        stickyHeader.parentNode.insertBefore(
                            newNode,
                            stickyHeader
                        );
                        document
                            .querySelector('.sticky-cart-wrapper')
                            .insertAdjacentElement('beforeend', stickyHeader);
                    }
                    document
                        .querySelector('.sticky-cart-header')
                        .setAttribute('style', 'top: ' + headerHeight + 'px');
                }
            } else if (window.pageYOffset < top || window.innerWidth < 992) {
                if (stickyHeader) {
                    stickyHeader.classList.remove('fixed');
                }

                if (document.querySelector('.sticky-cart-wrapper')) {
                    document
                        .querySelector('.sticky-cart-wrapper')
                        .removeAttribute('style');
                }
            }
        },
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },

        formatDescription(description) {
            // Appliquer la mise en forme spécifique à la description
            description = description.replace(
                /\*\*([^*]+)\*\*/g,
                '<strong>$1</strong>'
            ); // Mise en gras entre ** **
            description = description.replace(/\n\n/g, '<br>'); // Saut de ligne
            description = description.replace(
                /([^\n:]+)\s*:\s*([^\n]+)/g,
                '<strong>$1:</strong> $2<br>'
            ); // Mise en gras pour les colonnes et leurs valeurs
            return description;
        },
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

        openLoginModal: function () {
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
