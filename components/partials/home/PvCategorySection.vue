<template>
    <div
        class="categories-section appear-animate"
        data-animation-name="fadeIn"
        data-animation-delay="100"
        v-animate
    >
        <pv-carousel
            class="categories-slider swiper-carousel swiper-theme show-nav-hover nav-outer appear-animate"
            :options="categorySlider"
            data-animation-name="fadeInUpShorter"
            data-animation-delay="200"
            data-animation-duration="1000"
            v-animate
        >
            <template v-if="GET_SHOW_SECTION.length > 0">
                <div
                    class="product-category swiper-slide"
                    data-animation-name="fadeInUpShorter"
                    v-animate
                    v-for="(item, index) in GET_SHOW_SECTION"
                    :key="item.uuid"
                >
                    <nuxt-link
                        :to="{
                            path: '/shop',
                            query: { sub_category: item.slug },
                        }"
                    >
                        <figure>
                            <img
                                v-lazy="item.logo"
                                alt="category"
                                width="280"
                                height="240"
                                style="background: #f4f4f4"
                            />
                        </figure>
                        <div class="category-content">
                            <h3>{{ item.name }}</h3>
                            <!-- <span><mark class="count">7</mark> products</span> -->
                        </div>
                    </nuxt-link>
                </div>
            </template>
        </pv-carousel>
    </div>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { categorySlider } from '~/utils/data/carousel';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        PvCarousel,
    },
    data: function () {
        return {
            categorySlider: categorySlider,
        };
    },

    computed: {
        ...mapGetters('product', ['GET_SHOW_SECTION']),
    },

    created() {
        this.getShowSection();
    },

    methods: {
        ...mapActions('product', ['getShowSection']),
    },
};
</script>
