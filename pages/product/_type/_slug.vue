<template>
    <main class="main skeleton-body">
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <nuxt-link to="/">
                            <i class="icon-home"></i>
                        </nuxt-link>
                    </li>

                    <li class="breadcrumb-item">
                        <nuxt-link to="/shop">Shop</nuxt-link>
                        <div v-if="!loaded">Loading...</div>
                    </li>
                    <li class="breadcrumb-item d-none d-lg-block" v-if="loaded">
                        <nuxt-link
                            :to="{
                                path: '/shop',
                                query: { category: category.slug },
                            }"
                            v-for="(
                                category, index
                            ) in product.product_categories"
                            :key="`product-category-${index}`"
                            >{{
                                index === product.product_categories.length - 1
                                    ? category.name
                                    : category.name + ', '
                            }}</nuxt-link
                        >
                    </li>
                    <li
                        class="breadcrumb-item active"
                        aria-current="page"
                        v-if="loaded"
                    >
                        {{ product.name }}
                    </li>
                </ol>
            </div>
        </nav>

        <div class="container">
            <div
                class="product-single-container product-single-default"
                v-if="product"
            >
                <div class="row">
                    <div class="col-lg-5 col-md-6 product-single-gallery">
                        <pv-media-one :product="product"></pv-media-one>
                    </div>

                    <div class="col-lg-7 col-md-6 product-single-details">
                        <pv-detail-two
                            :product="product"
                            :prev-product="prevProduct"
                            :next-product="nextProduct"
                        ></pv-detail-two>
                    </div>
                </div>
            </div>

            <div class="skel-group" v-else>
                <div class="summary-before col-lg-5 col-md-6"></div>
                <div class="summary entry-summary col-lg-7 col-md-6"></div>
                <div class="tab-content col-lg-12 mb-7"></div>
            </div>

            <pv-desc-one :product="product" v-if="product"></pv-desc-one>

            <pv-related-products
                :products="product"
                class="mb-1"
            ></pv-related-products>

            <hr class="mt-0 m-b-5" />

            <div class="skeleton-body">
                <!-- <pv-small-collection
                    :featured-products="featuredProducts"
                    :best-products="bestProducts"
                    :latest-products="latestProducts"
                    :top-rated-products="topRatedProducts"
                ></pv-small-collection> -->
            </div>
        </div>
    </main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import Api, { baseUrl2, apiEndpoints } from '~/api';
import PvMediaOne from '~/components/partials/product/media/PvMediaOne';
import PvDetailTwo from '~/components/partials/product/detail/PvDetailTwo';
import PvDescOne from '~/components/partials/product/description/PvDescOne';
import PvRelatedProducts from '~/components/partials/product/PvRelatedProducts';
import PvSmallCollection from '~/components/partials/product/PvSmallCollection';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        PvMediaOne,
        PvDetailTwo,
        PvDescOne,
        PvRelatedProducts,
        PvSmallCollection,
    },
    data: function () {
        return {
            product: null,
            relatedProducts: null,
            featuredProducts: null,
            bestProducts: null,
            latestProducts: null,
            topRatedProducts: null,
            nextProduct: null,
            prevProduct: null,
            // baseUrl: baseUrl,
            loaded: false,
            categoryList: [],
            productCategory: [],
        };
    },

    // computed: {
    //     ...mapGetters('product', ['GET_PRODUCT']),
    // },
    mounted: function () {
        // this.getProduct_(this.$route.params.slug);
        this.getProduct();
    },
    methods: {
        // ...mapActions('product', ['getProduct']),
        // async getProduct_(slug) {
        //     this.loaded = false;
        //     await this.getProduct(slug); // Attendre que le produit soit chargé
        //     // Maintenant, vous pouvez accéder aux données du produit en toute sécurité
        //     console.log('is ok ;;;;;;;', this.GET_PRODUCT);
        //     if (this.GET_PRODUCT) {
        //         console.log('IS OK ....................');
        //         // Vérifiez si le produit est défini avant d'essayer d'accéder à ses propriétés
        //         console.log('Product categories:', this.GET_PRODUCT);
        //         this.loaded = true;
        //     }
        // },

        getProduct: function () {
            Api.get(
                `${baseUrl2}${apiEndpoints.product}${this.$route.params.slug}`,
                {
                    params: { quick_view: true },
                }
            )
                .then((response) => {
                    this.product = response.data.data;
                    this.loaded = true;

                    console.log('YO YO', this.product);
                })
                .catch((error) => ({ error: JSON.stringify(error) }));
        },
    },
};
</script>
