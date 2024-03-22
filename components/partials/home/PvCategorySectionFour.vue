<template>
    <div
        class="bg-white appear-animate"
        data-animation-name="fadeIn"
        data-animation-delay="100"
        v-animate
    >
        <div class="row">
            <div class="col-xl-9 col-xl-9cols pr-xl-0">
                <div
                    class="categories-container categories-container-three bg-white pb-0"
                >
                    <div
                        class="heading d-flex flex-lg-row flex-column align-items-lg-center"
                    >
                        <h4 class="section-title text-transform-none mb-0">
                            NOUVEAUTÉS
                        </h4>
                        <ul
                            class="shop-list d-flex flex-wrap align-items-center p-0 mt-2 mt-lg-0"
                        >
                            <li>
                                <nuxt-link to="/shop">Furniture</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/shop"
                                    >Garden & Outdoors</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/shop"
                                    >Home Accessories</nuxt-link
                                >
                            </li>
                            <li>
                                <nuxt-link to="/shop">Lighting</nuxt-link>
                            </li>
                        </ul>
                        <nuxt-link class="view-all" to="/shop"
                            >Voir tout<i class="fas fa-long-arrow-alt-right"></i
                        ></nuxt-link>
                    </div>
                    <div
                        class="banner banner6"
                        style="background-color: #f6ebe5"
                        data-md-order="8"
                    >
                        <figure>
                            <img
                                v-lazy="'./images/home/banners/banner7.jpg'"
                                width="980"
                                height="300"
                                alt="banner"
                            />
                        </figure>

                        <div class="banner-layer text-center content-left">
                            <h4 class="heading-border">La meilleur</h4>
                            <h3 class="ls-0">Collection</h3>
                            <hr class="mb-1 mt-0" />
                            <h5>Consultez nos réductions</h5>
                        </div>

                        <div class="banner-layer text-center content-right">
                            <h5 class="coupon-sale-text">
                                <span>À PARTIR DE</span>
                                <b class="text-dark align-middle"
                                    ><sup>$</sup
                                    ><em class="align-text-top">100</em
                                    ><sup>K</sup></b
                                >
                            </h5>
                            <h6>* OFFRE LIMITÉ</h6>
                        </div>
                    </div>
                </div>

                <div
                    class="product-slider-tab appear-animate bg-white carousel-with-bg"
                    data-animation-name="fadeIn"
                    data-animation-delay="100"
                    v-animate
                >
                    <pv-tabs>
                        <div
                            class="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start"
                        >
                            <ul
                                class="nav ml-0 justify-content-center mb-0"
                                id="myTab"
                                role="tablist"
                            >
                                <li class="nav-item">
                                    <a
                                        class="nav-link active"
                                        id="seller-tab"
                                        data-toggle="tab"
                                        href="#seller"
                                        role="tab"
                                        aria-controls="seller"
                                        aria-selected="true"
                                        >Meilleurs vente</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        id="new-tab"
                                        data-toggle="tab"
                                        href="#new"
                                        role="tab"
                                        aria-controls="new"
                                        aria-selected="false"
                                        >Nouvels Arrivage</a
                                    >
                                </li>
                                <li class="nav-item mr-0">
                                    <a
                                        class="nav-link"
                                        id="best-tab"
                                        data-toggle="tab"
                                        href="#best"
                                        role="tab"
                                        aria-controls="best"
                                        aria-selected="false"
                                        >Meilleures notes</a
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content">
                            <div
                                class="tab-pane fade show active"
                                id="seller"
                                role="tabpanel"
                                aria-labelledby="seller-tab"
                            >
                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    :options="productSliderTwo"
                                    v-if="bestProducts.length === 0"
                                >
                                    <div
                                        v-for="item in [1, 2, 3, 4]"
                                        :key="item"
                                        class="swiper-slide product-loading-overlay"
                                    ></div>
                                </pv-carousel>

                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    data-animation-name="fadeIn"
                                    data-animation-delay="100"
                                    :options="productSliderTwo"
                                    v-animate
                                >
                                    <pv-product-three
                                        v-for="(
                                            product, index
                                        ) in bestProducts.slice(0, 4)"
                                        :key="'fashion' + index"
                                        :product="product"
                                        class="swiper-slide"
                                    ></pv-product-three>
                                </pv-carousel>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="new"
                                role="tabpanel"
                                aria-labelledby="new-tab"
                            >
                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    :options="productSliderTwo"
                                    v-if="newProducts.length === 0"
                                >
                                    <div
                                        v-for="item in [1, 2, 3, 4]"
                                        :key="item"
                                        class="swiper-slide product-loading-overlay"
                                    ></div>
                                </pv-carousel>

                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    data-animation-name="fadeIn"
                                    data-animation-delay="100"
                                    :options="productSliderTwo"
                                    v-animate
                                >
                                    <pv-product-three
                                        v-for="(
                                            product, index
                                        ) in newProducts.slice(0, 4)"
                                        :key="'fashion' + index"
                                        :product="product"
                                        class="swiper-slide"
                                    ></pv-product-three>
                                </pv-carousel>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="best"
                                role="tabpanel"
                                aria-labelledby="best-tab"
                            >
                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    :options="productSliderTwo"
                                    v-if="topRatedProducts.length === 0"
                                >
                                    <div
                                        v-for="item in [1, 2, 3, 4]"
                                        :key="item"
                                        class="swiper-slide product-loading-overlay"
                                    ></div>
                                </pv-carousel>

                                <pv-carousel
                                    class="products-slider swiper-carousel nav-circle swiper-theme pb-0"
                                    data-animation-name="fadeIn"
                                    data-animation-delay="100"
                                    :options="productSliderTwo"
                                    v-animate
                                >
                                    <pv-product-three
                                        v-for="(
                                            product, index
                                        ) in topRatedProducts.slice(0, 4)"
                                        :key="'fashion' + index"
                                        :product="product"
                                        class="swiper-slide"
                                    ></pv-product-three>
                                </pv-carousel>
                            </div>
                        </div>
                    </pv-tabs>
                </div>
            </div>

            <div class="col-xl-3 col-xl-3cols">
                <div class="products-widget-container bg-white">
                    <h2
                        class="section-title d-flex align-items-center text-transform-none"
                    >
                        <i class="icon-percent-shape"></i>Dernière chance
                    </h2>

                    <div
                        class="product-countdown-container custom-product-countdown bg-white"
                        style="
                            border: 1px solid black;
                            padding: 10px 0px 10px 20px;
                            border-radius: 10px;
                        "
                    >
                        <span class="product-countdown-title ls-10"
                            >l'offre se termine dans :</span
                        >
                        <br />
                        <pv-count-down
                            class="product-countdown countdown-compact"
                            until="2021-10-05"
                            :compact="true"
                        ></pv-count-down>
                    </div>

                    <div class="row">
                        <div
                            class="col-xl-12 col-md-4 col-sm-6"
                            v-for="(product, index) in products.slice(10, 16)"
                            :key="'small-product' + index"
                        >
                            <pv-small-product
                                :product="product"
                                :is-lazy="false"
                            ></pv-small-product>
                        </div>
                    </div>

                    <nuxt-link class="view-all" to="/shop"
                        >Voir tout<i class="fas fa-long-arrow-alt-right"></i
                    ></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import PvProductThree from '~/components/features/product/PvProductThree';
import PvCountDown from '~/components/features/PvCountDown';
import PvTabs from '~/components/features/PvTabs';
import PvCarousel from '~/components/features/PvCarousel';
import { productSliderTwo } from '~/utils/data/carousel';

export default {
    components: {
        PvSmallProduct,
        PvProductThree,
        PvCountDown,
        PvTabs,
        PvCarousel,
    },
    data: function () {
        return {
            productSliderTwo: productSliderTwo,
            // newProducts: [],
            // bestProducts: [],
            // topRatedProducts: [],
        };
    },
    props: {
        products: Array,
        bestProducts: Array,
        topRatedProducts: Array,
        newProducts: Array,
    },
};
</script>
