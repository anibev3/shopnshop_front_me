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
                :products="GET_EXCLU_PRODUCTS"
            ></pv-special-collection>
        </div>

        <pv-products-filter-one></pv-products-filter-one>

        <div class="bg-gray">
            <div class="container">
                <pv-category-section-two></pv-category-section-two>

                <pv-products-collection-one
                    :products="GET_NEW_PRODUCTS"
                ></pv-products-collection-one>

                <!-- <pv-category-section-three></pv-category-section-three>

                <pv-products-collection-two
                    :products="products"
                ></pv-products-collection-two> -->

                <pv-banner-section-two></pv-banner-section-two>

                <pv-category-section-four
                    :products="GET_NEW_PRODUCTS"
                    :newProducts="GET_NEW_PRODUCTS"
                    :best-products="GET_SECOND_HAND_PRODUCTS"
                    :top-rated-products="GET_TOP_RATING_PRODUCTS"
                    v-if="GET_NEW_PRODUCTS && GET_NEW_PRODUCTS.length > 0"
                ></pv-category-section-four>

                <pv-brand-section :brands="GET_BRANDS"></pv-brand-section>

                <pv-products-collection-three
                    :newProducts="GET_NEW_PRODUCTS"
                    :best-products="GET_SECOND_HAND_PRODUCTS"
                    :top-rated-products="GET_TOP_RATING_PRODUCTS"
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

import { getCookie } from '~/utils';
import Api, { baseUrl, baseUrl2, constant, apiEndpoints } from '~/api';
import { mapActions, mapGetters } from 'vuex';

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
        ...mapGetters('product', [
            'GET_PRODUCTS',
            'GET_EXCLU_PRODUCTS',
            'GET_SECOND_HAND_PRODUCTS',
            'GET_NEW_PRODUCTS',
            'GET_LAST_CHANCE_PRODUCTS',
            'GET_TOP_RATING_PRODUCTS',
        ]),
        ...mapGetters('brand', ['GET_BRANDS']),
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
    created() {
        this.get_products();
        this.get_brands();
    },
    mounted: function () {
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
        ...mapActions('product', ['get_products', 'get_categories']),
        ...mapActions('brand', ['get_brands']),
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
