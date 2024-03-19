<template>
    <div
        class="product-single-container product-single-default product-quick-view mb-0 custom-scrollbar skeleton-body"
    >
        <div class="quickview-wrap product" v-if="!GET_PRODUCT">
            <div class="skel-group">
                <div class="col-lg-6 summary-before"></div>
                <div class="col-lg-6 summary entry-summary"></div>
            </div>
        </div>

        <div class="row" v-if="GET_PRODUCT">
            <div class="col-md-6 product-single-gallery mb-md-0">
                <pv-media-one
                    :product="GET_PRODUCT"
                    :is-magnify="false"
                ></pv-media-one>
            </div>

            <div class="col-md-6 product-single-details mb-0">
                <pv-detail-one
                    :product="GET_PRODUCT"
                    :is-product-nav="false"
                ></pv-detail-one>
            </div>

            <button
                title="Close (Esc)"
                type="button"
                class="mfp-close"
                @click="$emit('close')"
            >
                ×
            </button>
        </div>
    </div>
</template>

<script>
import PvMediaOne from '~/components/partials/product/media/PvMediaOne';
import PvDetailOne from '~/components/partials/product/detail/PvDetailOne';
import Respository, {
    baseUrl,
    baseUrl2,
    apiEndpoints,
    currentDemo,
} from '~/api';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        PvMediaOne,
        PvDetailOne,
    },
    props: {
        slug: String,
    },
    data: function () {
        return {
            product: null,
            currentDemo: currentDemo,
        };
    },
    computed: {
        ...mapGetters('product', ['GET_PRODUCT']),
    },
    mounted: function () {
        this.getProduct_(this.slug);
    },
    methods: {
        ...mapActions('product', ['getProduct']),
        getProduct_(slug) {
            return this.getProduct(slug);
        },
    },
};
</script>
