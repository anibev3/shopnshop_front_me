<template>
    <header class="header">
        <!-- <div class="header-top">
            <div class="container bg-dark text-white">
                <div class="header-left d-none d-sm-block">
                    <div
                        class="info-box info-box-icon-left text-primary justify-content-start p-0"
                    >
                        <i class="icon-shipping"></i>

                        <div class="info-box-content">
                            <h4 class="text-transform-none text-white">
                                Livraison express GRATUITE pour les commandes de
                                1 000 000 FCFA et plus
                            </h4>
                        </div>
                    </div>
                </div>

                <div
                    class="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100"
                >
                    <div class="header-dropdown">
                        <a href="javascript:;">USD</a>
                        <div class="header-menu">
                            <ul>
                                <li>
                                    <a href="javascript:;">EUR</a>
                                </li>
                                <li>
                                    <a href="javascript:;">USD</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="header-dropdown mr-auto mr-sm-3 mr-md-0">
                        <a href="javascript:;">
                            <i class="flag-us flag"></i>Eng</a
                        >

                        <div class="header-menu">
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                        <i class="flag-us flag mr-2"></i>ENG</a
                                    >
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i class="flag-fr flag mr-2"></i>FRA</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        class="header-dropdown dropdown-expanded d-none d-lg-block"
                    >
                        <a href="javascript:;">Links</a>
                        <div class="header-menu">
                            <ul>
                                <li>
                                    <nuxt-link to="/pages/account"
                                        >Se connecter</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link to="/pages/cart">Cart</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link
                                        to="/pages/login"
                                        class="login-link"
                                        >Log In</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="social-icons">
                        <a
                            href="javascript:;"
                            class="social-icon social-facebook icon-facebook"
                        ></a>
                        <a
                            href="javascript:;"
                            class="social-icon social-twitter icon-twitter"
                        ></a>
                        <a
                            href="javascript:;"
                            class="social-icon social-instagram icon-instagram"
                        ></a>
                    </div>
                </div>
            </div>
        </div> -->

        <div
            class="header-middle sticky-header mobile-sticky"
            style="background-color: black; color: white"
        >
            <div class="container">
                <div class="header-left col-lg-2 w-auto pl-0">
                    <button
                        class="mobile-menu-toggler text-dark mr-2"
                        type="button"
                        @click="showMobileMenu"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <nuxt-link to="/" class="logo">
                        <img
                            src="~/static/images/logo-white.png"
                            class="w-100"
                            width="200"
                            height="50"
                            alt="Porto Logo"
                        />
                    </nuxt-link>
                </div>

                <div class="header-right w-lg-max">
                    <pv-header-search></pv-header-search>

                    <a
                        href="javascript:;"
                        @click="openLoginModal"
                        class="d-lg-block d-none"
                        title="login"
                    >
                        <div class="header-user">
                            <i class="icon-user-2" style="color: white"></i>
                            <div class="header-userinfo">
                                <span style="color: white">Bienvenu</span>
                                <h4 class="mb-0" style="color: white">
                                    Se connecter
                                </h4>
                            </div>
                        </div>
                    </a>

                    <nuxt-link
                        to="/pages/wishlist"
                        class="header-icon position-relative"
                        title="wishlist"
                    >
                        <i class="icon-wishlist-2"></i
                        ><span class="wishlist-count badge-circle">
                            {{ wishList.length }}
                        </span>
                    </nuxt-link>

                    <pv-cart-menu></pv-cart-menu>
                </div>
            </div>
        </div>

        <div
            class="header-bottom sticky-header d-none d-lg-flex desktop-sticky"
        >
            <div class="container">
                <pv-main-menu></pv-main-menu>
            </div>
        </div>
    </header>
</template>

<script>
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import { mapGetters } from 'vuex';

document.querySelector('body').classList.add('loaded');

export default {
    components: {
        PvMainMenu,
        PvCartMenu,
        PvHeaderSearch,
    },
    data: function () {
        return {
            isHome: {
                type: Boolean,
                default: true,
            },
        };
    },
    computed: {
        ...mapGetters('wishlist', ['wishList']),
    },
    mounted: function () {
        let items = document.querySelectorAll('.menu-vertical > li');
        items.forEach((item) => {
            item.addEventListener('mouseenter', this.mouseOverHandler);
            item.addEventListener('mouseleave', this.mouseLeaveHandler);
        });
    },
    destroyed: function () {
        let items = document.querySelectorAll('.menu-vertical > li');
        items.forEach((item) => {
            item.removeEventListener('mouseover', this.mouseOverHandler);
            item.removeEventListener('mouseleave', this.mouseLeaveHandler);
        });
    },
    methods: {
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
        showMobileMenu: function () {
            document.querySelector('body').classList.add('mmenu-active');
        },
        showMobileSearch: function (e) {
            let headerSearch = e.currentTarget.closest('.header-search');
            headerSearch.classList.add('show');
            headerSearch
                .querySelector('.header-search-wrapper')
                .classList.add('show');
        },
        mouseOverHandler: function (e) {
            e.currentTarget.classList.add('show');
        },
        mouseLeaveHandler: function (e) {
            e.currentTarget.classList.remove('show');
        },
    },
};
</script>
