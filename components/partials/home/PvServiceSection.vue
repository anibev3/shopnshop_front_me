<template>
    <pv-carousel
        class="info-boxes-slider swiper-carousel swiper-theme appear-animate"
        data-animation-name="fadeInUpShorter"
        data-animation-delay="200"
        v-animate
        :options="serviceSlider"
    >
        <div class="info-box info-box-icon-left swiper-slide">
            <i class="icon-shipping text-primary"></i>

            <div class="info-box-content">
                <h4>LIVRAISON GRATUITE &amp; RETOUR</h4>
                <p class="text-body">Livraison rapide et éfficace</p>
            </div>
        </div>

        <div class="info-box info-box-icon-left swiper-slide">
            <i class="icon-money text-primary"></i>

            <div class="info-box-content">
                <h4>GARANTIE DE REMBOURSEMENT</h4>
                <p class="text-body">Garantie de remboursement à 100%</p>
            </div>
        </div>

        <div class="info-box info-box-icon-left swiper-slide">
            <i class="icon-support text-primary"></i>

            <div class="info-box-content">
                <h4>SUPPORT EN LIGNE 24/7</h4>
                <p class="text-body">Assistance disponible 24h/24, 7j/7.</p>
            </div>
        </div>

        <div class="info-box info-box-icon-left swiper-slide">
            <i class="icon-password-lock text-primary"></i>

            <div class="info-box-content">
                <h4>PAIEMENT SÉCURISÉ</h4>
                <p class="text-body">Système de paiement sécurisé.</p>
            </div>
        </div>
    </pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { serviceSlider } from '~/utils/data/carousel';

export default {
    components: {
        PvCarousel,
    },
    data: function () {
        return {
            serviceSlider: serviceSlider,
        };
    },
};
</script>
