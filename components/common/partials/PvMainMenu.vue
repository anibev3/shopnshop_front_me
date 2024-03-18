<template>
    <nav class="main-nav w-100">
        <ul class="menu main-menu sf-arrows w-100">
            <li class="menu-item" :class="{ show: isDepart }">
                <a
                    href="javascript:;"
                    style="background-color: black"
                    class="d-inline-flex align-items-center sf-with-ul text-white"
                    @click.prevent="mmenuAddHandler"
                >
                    <i class="custom-icon-toggle-menu d-inline-table"></i
                    ><span>TOUTE CATEGORIES</span></a
                >
                <div
                    class="menu-depart-overlay"
                    @click.stop="mmenuRemoveHandler"
                ></div>
                <div class="menu-depart" :class="{ opened: isDepart }">
                    <ul
                        class="menu menu-vertical sf-arrows d-block no-superfish"
                    >
                        <li
                            v-for="category in GET_CATEGORIES"
                            :key="category.uuid"
                        >
                            <a href="javascript:;" class="sf-with-ul">
                                <i class="icon-category-fashion"></i
                                >{{ category.name }}
                            </a>

                            <div
                                class="megamenu megamenu-fixed-width megamenu-one"
                            >
                                <div class="row">
                                    <div
                                        v-for="subCategory in category.sub_categories"
                                        :key="subCategory.uuid"
                                        class="col-lg-4 mb-1 pb-2"
                                    >
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >{{ subCategory.name }}</a
                                        >
                                        <ul class="submenu">
                                            <li
                                                v-for="subSubCategory in subCategory.sub_sub_categories"
                                                :key="subSubCategory.uuid"
                                            >
                                                <nuxt-link
                                                    :to="`/shop/${subSubCategory.slug}`"
                                                    >{{
                                                        subSubCategory.name
                                                    }}</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

            <li>
                <nuxt-link to="/">Accueil</nuxt-link>
            </li>

            <!-- <li>
                <nuxt-link to="/shop"> Articles </nuxt-link>
            </li> -->
            <li>
                <nuxt-link to="/shop"> MODE FEMME </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/shop"> MODE HOMME </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/shop"> MODE ENFANT </nuxt-link>
            </li>

            <li>
                <a
                    href="javascript:;"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: isPageItemActived }"
                    >Pages
                </a>

                <ul>
                    <li v-for="item in mainMenu.other" :key="item.title">
                        <nuxt-link
                            :to="item.url"
                            :class="{ 'sub-menu-link': item.subPages }"
                            >{{ item.title }}</nuxt-link
                        >

                        <ul v-if="item.subPages">
                            <li
                                v-for="subItem in item.subPages"
                                :key="subItem.title"
                            >
                                <nuxt-link :to="subItem.url">{{
                                    subItem.title
                                }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- <li>
                <a
                    href="javascript:;"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: isPageItemActived }"
                    >Plus</a
                >

                <ul>
                    <li v-for="item in mainMenu.plus" :key="item.title">
                        <nuxt-link
                            :to="item.url"
                            :class="{ 'sub-menu-link': item.subPages }"
                            >{{ item.title }}</nuxt-link
                        >

                        <ul v-if="item.subPages">
                            <li
                                v-for="subItem in item.subPages"
                                :key="subItem.title"
                            >
                                <nuxt-link :to="subItem.url">{{
                                    subItem.title
                                }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li> -->

            <li class="float-right phone">
                <a href="javascript:;" class="d-flex align-items-center"
                    ><i class="icon-phone-1"></i>+225 27 22 29 94 64</a
                >
            </li>
            <li class="float-right">
                <a
                    href="javascript:;"
                    class="d-inline-flex align-items-center sf-with-ul text-white"
                    @click="openConsultationModal"
                    style="
                        background-color: rgb(132, 18, 132);
                        border-radius: 6px;
                    "
                >
                    <!-- <i class="custom-icon-toggle-menu d-inline-table"></i
                    > -->
                    <span>PLANIFIER UNE CONSULTATION</span></a
                >
            </li>
            <!-- <li class="float-right"><a href="javascript:;">FLASH DEALS</a></li> -->
            <!-- <li class="float-right">
                <nuxt-link
                    to="/product/default/beats-solo-hd-drenched-one"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: $route.path.indexOf('/product') > -1 }"
                    >VENTE FLASH</nuxt-link
                >

                <div class="megamenu megamenu-fixed-width megamenu-3cols">
                    <div class="row">
                        <div class="col-lg-12 p-0">
                            <div
                                class="menu-banner menu-banner-2 position-relative"
                            >
                                <figure>
                                    <img
                                        src="~/static/images/menu-banner-1.jpg"
                                        alt="Menu banner"
                                        class="product-promo"
                                        width="380"
                                        height="790"
                                    />
                                </figure>
                                <i>OFF</i>
                                <div class="banner-content">
                                    <h4>
                                        <span class>UP TO</span>
                                        <br />
                                        <b class>50%</b>
                                    </h4>
                                </div>
                                <nuxt-link
                                    to="/shop"
                                    class="btn btn-sm btn-dark"
                                    >SHOP NOW</nuxt-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </li> -->
        </ul>
    </nav>
</template>
<script>
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import { mainMenu } from '~/utils/data/menu';
import Api, { baseUrl, baseUrl2, apiEndpoints } from '~/api';
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import PvCarousel from '~/components/features/PvCarousel';
import PvProductFour from '~/components/features/product/PvProductFour';
import { homeSidebarSlider } from '~/utils/data/carousel';

import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        PvCarousel,
        PvSmallProduct,
        PvProductFour,
        VueSlideToggle,
    },
    data: function () {
        return {
            mainMenu,
            isDepart: false,
            products: [],
            homeSidebarSlider: homeSidebarSlider,
            toggleState: [true, false, false, false, false],
            categoryList: [],
        };
    },
    created() {
        this.get_categories();
    },
    computed: {
        ...mapGetters('product', ['GET_CATEGORIES']),
        isPageItemActived: function () {
            let exItems = ['blog', 'about-us', 'contact-us'];

            if (
                this.$route.path.includes('/pages') &&
                exItems.findIndex((item) => this.$route.path.includes(item)) ===
                    -1
            ) {
                return true;
            }

            return false;
        },
    },
    watch: {
        $route: function () {
            if (
                document
                    .querySelector('body')
                    .classList.contains('mmenu-depart-active')
            )
                document
                    .querySelector('body')
                    .classList.remove('mmenu-depart-active');
            this.isDepart = false;
        },
    },
    // mounted() {
    // this.getCategoryFunction(), this.get_categories();
    // },
    methods: {
        ...mapActions('product', ['get_categories']),
        changeToggle: function (index) {
            let tmp = this.toggleState[index];
            this.toggleState.fill(false);
            this.toggleState[index] = !tmp;
            this.toggleState = [...this.toggleState];
        },
        mmenuAddHandler: function (e) {
            this.isDepart = !this.isDepart;
            if (
                document
                    .querySelector('body')
                    .classList.contains('mmenu-depart-active')
            )
                document
                    .querySelector('body')
                    .classList.remove('mmenu-depart-active');
            else
                document
                    .querySelector('body')
                    .classList.add('mmenu-depart-active');
        },
        mmenuRemoveHandler: function (e) {
            this.isDepart = false;
            document
                .querySelector('body')
                .classList.remove('mmenu-depart-active');
        },
        openConsultationModal: function () {
            this.$modal.show(
                () => import('~/components/features/modal/PvConsultationModal'),
                {},
                { width: '600', height: 'auto', adaptive: true }
            );
        },
    },
};
</script>
