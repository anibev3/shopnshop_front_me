<template>
    <div
        class="category-filter-section bg-gray appear-animate"
        data-aniamtion-name="fadeInUpShorter"
        data-animation-delay="200"
        v-animate
    >
        <div class="container">
            <pv-tabs>
                <div class="row">
                    <div
                        class="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0 d-none d-lg-block"
                    >
                        <div
                            class="shop-list h-100"
                            ref="shopList"
                            style="background: none"
                        >
                            <video autoplay muted loop class="video-bg">
                                <source
                                    src="https://d-themes.com/vue/porto/demo-6/images/home/slider/slide-2.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <h4 class="text-center" style="font-size: 3.2rem">
                                LUXE SECONDE MAIN
                            </h4>

                            <ul
                                class="nav nav-tabs flex-sm-column border-0"
                                role="tablist"
                            >
                                <template v-if="GET_SHOW_SECTION.length > 0">
                                    <span
                                        v-for="(
                                            item, index
                                        ) in GET_SHOW_SECTION"
                                        :key="item.uuid"
                                    >
                                        <li
                                            @click="setFilterRoute"
                                            class="nav-item"
                                            :data-category="item.slug"
                                        >
                                            <a
                                                style="
                                                    font-size: 25px;
                                                    color: white;
                                                    font-weight: 1000;
                                                "
                                                href="javascript:;"
                                                class="nav-link active"
                                                >{{ item.name }}</a
                                            >
                                        </li>
                                    </span>
                                </template>
                            </ul>

                            <nuxt-link
                                class="view-all"
                                :to="{
                                    path: '/shop',
                                    query: { collection: 'luxe-seconde-main' },
                                }"
                                style="color: white"
                                >Voir tout<i
                                    class="fas fa-long-arrow-alt-right"
                                ></i
                            ></nuxt-link>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
                        <div
                            class="banner banner3"
                            style="background-color: #efeeec"
                            v-lazy:background-image="
                                './images/home/banners/banner3.jpg'
                            "
                        >
                            <div
                                class="container d-flex justify-content-center"
                            >
                                <div class="banner-layer text-center">
                                    <h4 class="font1">
                                        <i class="font2"
                                            >Découvez nos article de lux et de
                                            prestige second main, passer votre
                                            commande dès maintenant</i
                                        >
                                    </h4>

                                    <!-- <h3 class="text-dark mb-0">MEGA SALE</h3> -->
                                    <!-- <h2 class="text-dark">70% OFF</h2> -->
                                    <h5
                                        class="coupon-sale-text justify-content-end"
                                    >
                                        <span class="text-dark"
                                            >Réduction jusqu'à</span
                                        >
                                        <!-- ><sup>$</sup -->
                                        <b class="text-white align-middle"
                                            ><em class="align-text-top">70</em
                                            ><sup>%</sup></b
                                        >
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0"
                    >
                        <div class="product-content products-with-divide">
                            <div
                                class="row row-joined h-100"
                                v-if="products.length === 0"
                            >
                                <div
                                    class="col-6 col-sm-4 mb-2"
                                    v-for="item in [1, 2, 3, 4, 5, 6]"
                                    :key="'product' + item"
                                >
                                    <div
                                        class="swiper-slide product-loading-overlay"
                                    ></div>
                                </div>
                            </div>

                            <div class="row row-joined h-100">
                                <div
                                    class="col-6 col-sm-4 appear-animate"
                                    v-for="(product, index) in products.slice(
                                        0,
                                        6
                                    )"
                                    :key="'product-' + index"
                                    data-animation-name="fadeIn"
                                    data-animation-duration="1000"
                                    :data-animation-delay="200"
                                    v-animate
                                >
                                    <pv-product-three
                                        :product="product"
                                    ></pv-product-three>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </pv-tabs>
        </div>
    </div>
</template>

<script>
import PvProductThree from '~/components/features/product/PvProductThree';
import PvTabs from '~/components/features/PvTabs';
import Api, { baseUrl, currentDemo } from '~/api';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        PvTabs,
        PvProductThree,
    },
    data: function () {
        return {
            products: [],
            category: '',
        };
    },
    mounted: function () {
        this.setFilterRoute();
    },
    computed: {
        ...mapGetters('product', [
            'GET_PRODUCTS',
            'GET_EXCLU_PRODUCTS',
            'GET_SECOND_HAND_PRODUCTS',
            'GET_NEW_PRODUCTS',
            'GET_LAST_CHANCE_PRODUCTS',
            'GET_TOP_RATING_PRODUCTS',
            'GET_SHOW_SECTION',
        ]),
    },
    // created() {
    //     this.get_products();
    // },
    methods: {
        ...mapActions(
            'product',
            ['get_products', 'get_categories'],
            'getShowSection'
        ),

        setFilterRoute: async function (e) {
            this.products = [];
            if (e) {
                this.category = e.currentTarget.getAttribute('data-category');
                console.log('categori', this.category);

                e.currentTarget.parentNode
                    .querySelector('.active')
                    .classList.remove('active');
                e.currentTarget.querySelector('a').classList.add('active');
            }

            // Attendre que get_products soit résolu
            await this.get_products();

            // Maintenant, vous pouvez accéder aux produits après qu'ils ont été chargés
            this.products = this.GET_SECOND_HAND_PRODUCTS;

            // console.log('prod', this.products);

            // Api.get(`${baseUrl}/shop`, {
            //     params: { category: this.category, demo: currentDemo },
            // })
            //     .then((response) => {
            //         this.products = response.data.products;
            //     })
            //     .catch((error) => ({ error: JSON.stringify(error) }));
        },
    },
};
</script>
<style scoped>
.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* assurez-vous que la vidéo est en arrière-plan */
}

.shop-list {
    position: relative; /* assurez-vous que la position est relative pour contenir la vidéo */
}
</style>
