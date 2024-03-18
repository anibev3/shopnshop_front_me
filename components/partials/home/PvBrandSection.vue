<template>
    <div
        class="brands-section mt-2 mb-3 appear-animate"
        data-animation-delay="200"
        data-animation-name="fadeIn"
        data-animation-duration="1000"
        v-animate
    >
        <div class="headding">
            <h4 class="section-title text-transform-none">
                Marques en vedette
            </h4>
        </div>

        <pv-carousel
            class="brands-slider swiper-carousel bg-white swiper-theme nav-circle images-center"
            :options="brandSlider"
        >
            <div class="swiper-slide" v-for="(brand, index) in brands">
                <figure>
                    <img
                        :src="brand.logo"
                        width="60"
                        height="60"
                        alt="brand"
                        style="width: 90px; height: 90px"
                    />
                </figure>
            </div>
        </pv-carousel>
    </div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { brandSlider } from '~/utils/data/carousel';

export default {
    components: {
        PvCarousel,
    },
    props: {
        brands: Array,
    },
    data: function () {
        return {
            brandSlider: brandSlider,
        };
    },
};
</script>
