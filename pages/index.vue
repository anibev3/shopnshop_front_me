<template>
    <main class="main home skeleton-body">
        <div class="bg-gray pb-5">
            <div class="container pb-3">
                <pv-intro-section></pv-intro-section>

                <pv-category-section></pv-category-section>

                <pv-promo-section></pv-promo-section>
            </div>
        </div>

        <div class="container">
            <pv-service-section></pv-service-section>

            <pv-banner-section></pv-banner-section>

            <pv-special-collection
                :products="exclusivityProducts"
            ></pv-special-collection>
        </div>

        <pv-products-filter-one></pv-products-filter-one>

        <div class="bg-gray">
            <div class="container">
                <pv-category-section-two></pv-category-section-two>

                <pv-products-collection-one
                    :products="products"
                ></pv-products-collection-one>

                <!-- <pv-category-section-three></pv-category-section-three>

                <pv-products-collection-two
                    :products="products"
                ></pv-products-collection-two> -->

                <pv-banner-section-two></pv-banner-section-two>

                <pv-category-section-four
                    :products="products"
                    v-if="products && products.length > 0"
                ></pv-category-section-four>

                <pv-brand-section></pv-brand-section>

                <pv-products-collection-three
                    :newProducts="newProducts"
                    :best-products="bestProducts"
                    :top-rated-products="topRatedProducts"
                ></pv-products-collection-three>

                <pv-feature-section></pv-feature-section>

                <!-- <pv-products-collection-four
                    :products="products"
                ></pv-products-collection-four> -->
            </div>
        </div>
    </main>
</template>

<script>
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvCategorySection from '~/components/partials/home/PvCategorySection';
import PvPromoSection from '~/components/partials/home/PvPromoSection';
import PvFeatureSection from '~/components/partials/home/PvFeatureSection';
import PvBrandSection from '~/components/partials/home/PvBrandSection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvBannerSectionTwo from '~/components/partials/home/PvBannerSectionTwo';
import PvServiceSection from '~/components/partials/home/PvServiceSection';
import PvSpecialCollection from '~/components/partials/home/PvSpecialCollection';
import PvProductsFilterOne from '~/components/partials/home/PvProductsFilterOne';
import PvCategorySectionTwo from '~/components/partials/home/PvCategorySectionTwo';
import PvProductsCollectionOne from '~/components/partials/home/PvProductsCollectionOne';
import PvProductsCollectionTwo from '~/components/partials/home/PvProductsCollectionTwo';
import PvProductsCollectionThree from '~/components/partials/home/PvProductsCollectionThree';
import PvProductsCollectionFour from '~/components/partials/home/PvProductsCollectionFour';
import PvCategorySectionThree from '~/components/partials/home/PvCategorySectionThree';
import PvCategorySectionFour from '~/components/partials/home/PvCategorySectionFour';

import {
    getProductsByAttri,
    getTopSellingProducts,
    getTopRatedProducts,
    filterProductsByCollection,
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl, baseUrl2, constant, apiEndpoints } from '~/api';

export default {
    components: {
        PvIntroSection,
        PvPromoSection,
        PvCategorySection,
        PvServiceSection,
        PvBrandSection,
        PvBannerSection,
        PvBannerSectionTwo,
        PvSpecialCollection,
        PvProductsFilterOne,
        PvProductsCollectionOne,
        PvProductsCollectionTwo,
        PvProductsCollectionThree,
        PvProductsCollectionFour,
        PvCategorySectionTwo,
        PvCategorySectionThree,
        PvCategorySectionFour,
        PvFeatureSection,
    },
    data: function () {
        return {
            products: [],
            products_: [],
            posts: [],
            featuredProducts: [],
            newProducts: [],
            exclusivityProducts: [],
            bestProducts: [],
            topRatedProducts: [],
        };
    },
    computed: {
        lightBoxMedia: function () {
            let pictures = [];
            for (let i = 0; i < this.posts.length; i++) {
                pictures.push(this.posts[i].picture[0]);
            }
            return pictures.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        src: `${baseUrl}${cur.url}`,
                        thumb: `${baseUrl}${cur.url}`,
                    },
                ];
            }, []);
        },
    },
    mounted: function () {
        this.getProducts();

        Api.get(`${baseUrl}/demo36`)
            .then((response) => {
                this.products = response.data.products;
                console.log('111111', this.products);
                this.posts = response.data.posts;
                this.featuredProducts = getProductsByAttri(
                    response.data.products
                );
                this.newProducts = getProductsByAttri(
                    response.data.products,
                    'is_new'
                );
                this.bestProducts = getTopSellingProducts(
                    response.data.products
                );
                this.topRatedProducts = getTopRatedProducts(
                    response.data.products
                );
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        this.timerId = setTimeout(() => {
            if (
                this.$route.path === '/' &&
                getCookie('newsletter') !== 'false'
            ) {
                this.$modal.show(
                    () =>
                        import('~/components/features/modal/PvNewsletterModal'),
                    {},
                    {
                        width: '740',
                        height: 'auto',
                        adaptive: true,
                        class: 'newsletter-modal',
                    }
                );
            }
        }, 10000);
    },
    destroyed: function () {
        clearTimeout(this.timerId);
    },
    methods: {
        getProducts() {
            Api.get(`${baseUrl2}${apiEndpoints.products}`)
                .then((response) => {
                    this.products_ = response.data.data;
                    console.log('111111222', this.products_);
                    this.exclusivityProducts = filterProductsByCollection(
                        this.products_,
                        'exclusivites'
                    );
                    console.log('exclu', this.exclusivityProducts);
                })
                .catch((error) => ({ error: JSON.stringify(error) }));
        },
        toggleSidebar: function () {
            let body = document.querySelector('body');
            if (body.classList.contains('sidebar-opened')) {
                body.classList.remove('sidebar-opened');
            } else {
                body.classList.add('sidebar-opened');
            }
        },
    },
};
</script>
