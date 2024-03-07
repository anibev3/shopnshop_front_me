<template>
    <div @click="hideMobileSearch">
        <div class="page-wrapper">
            <!-- <div
                class="top-notice bg-dark text-white pt-3"
                :class="{ 'd-none': isHide }"
            >
                <div
                    class="container text-center d-flex align-items-center justify-content-center flex-wrap"
                >
                    <img
                        src="~/static/images/home/shop-logo.png"
                        width="116"
                        height="23"
                        alt="logo"
                    />
                    <h5 class="d-inline-block mb-0 pl-3 pr-3 pt-2 pb-2">
                        The lowest Prices Once A Month! Hurry To Snap Up
                    </h5>
                    <nuxt-link to="/shop" class="btn btn-darkcategory ls-0"
                        >SHOP NOW!</nuxt-link
                    >
                    <button
                        title="Close (Esc)"
                        type="buttin"
                        class="mfp-close d-none"
                        @click="hideTopNotice"
                    >
                        ×
                    </button>
                </div>
            </div> -->

            <pv-header></pv-header>
            <nuxt></nuxt>

            <pv-footer></pv-footer>

            <div class="wishlist-popup">
                <div class="wishlist-popup-msg">Product added!</div>
            </div>
        </div>

        <pv-cart-popup class="minipopup-area"></pv-cart-popup>

        <a
            id="scroll-top"
            href="javascript:;"
            title="Top"
            role="button"
            @click="scrollToTop"
        >
            <i class="icon-angle-up"></i>
        </a>

        <pv-mobile-menu></pv-mobile-menu>

        <pv-sticky-footer></pv-sticky-footer>
    </div>
</template>

<script>
import PvHeader from '~/components/common/PvHeader';
import PvFooter from '~/components/common/PvFooter';
import PvCartPopup from '~/components/common/partials/PvCartPopup';
import PvMobileMenu from '~/components/common/partials/PvMobileMenu';
import PvStickyFooter from '~/components/common/partials/PvStickyFooter';

import {
    scrollTop,
    stickyHeaderHandler,
    resizeHandler,
    showScrollTopHandler,
    setCookie,
    getCookie,
} from '~/utils';

export default {
    components: {
        PvHeader,
        PvFooter,
        PvCartPopup,
        PvMobileMenu,
        PvStickyFooter,
    },
    data: function () {
        return {
            isHide: false,
            value: null,
        };
    },
    watch: {
        $route: function () {
            resizeHandler();
            this.$modal.hideAll();
            this.isHide = getCookie('topNotice');
        },
    },
    created: function () {
        this.isHide = getCookie('topNotice');
    },
    mounted: function () {
        window.addEventListener('scroll', stickyHeaderHandler, {
            passive: true,
        });
        window.addEventListener('scroll', showScrollTopHandler, {
            passive: true,
        });
        window.addEventListener('resize', stickyHeaderHandler);
        window.addEventListener('resize', resizeHandler);
    },
    destroyed: function () {
        window.removeEventListener('scroll', showScrollTopHandler, {
            passive: true,
        });
        window.removeEventListener('scroll', stickyHeaderHandler, {
            passive: true,
        });
        window.removeEventListener('resize', stickyHeaderHandler);
        window.removeEventListener('resize', resizeHandler);
    },
    methods: {
        scrollToTop: function () {
            scrollTop(false);
        },
        hideTopNotice: function () {
            this.isHide = true;
            setCookie('topNotice', false);
        },
        hideMobileSearch: function () {
            if (document.querySelector('.header-search.header-search-inline')) {
                let headerSearch = document.querySelector(
                    '.header-search.header-search-inline'
                );
                headerSearch.classList.remove('show');
                headerSearch
                    .querySelector('.header-search-wrapper')
                    .classList.remove('show');
            }
            if (document.querySelector('.search-suggests')) {
                document
                    .querySelector('.search-suggests')
                    .setAttribute('style', 'display: none');
            }
        },
    },
};
</script>
