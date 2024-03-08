<template>
    <main class="main">
        <div class="page-header">
            <div class="container d-flex flex-column align-items-center">
                <nav aria-label="breadcrumb" class="breadcrumb-nav border-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                    </ol>
                </nav>

                <h1>Consultation</h1>
            </div>
        </div>

        <div class="container account-container custom-account-container">
            <div class="row">
                <div
                    class="sidebar widget widget-dashboard col-lg-4 order-0"
                    sticky-container
                >
                    <div v-sticky="isSticky" sticky-offset="{top: 80}">
                        <h2 class="text-uppercase">My Account</h2>
                    </div>
                </div>

                <div class="col-lg-4">
                    <h3>Sélectionner une date</h3>
                    <br />
                    <Calendar v-model="value" :inline="true" :showWeek="true" />
                </div>
                <div class="col-lg-4">
                    <h3>Sélectionner une heure</h3>

                    <div class="field col-12 md:col-4">
                        <label style="margin-right: 10px" for="time12"
                            >Format 24h</label
                        >
                        <Calendar
                            id="time12"
                            v-model="date9"
                            :timeOnly="true"
                            hourFormat="24"
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import PvTabs from '~/components/features/PvTabs';
import Sticky from 'vue-sticky-directive';
import Calendar from 'primevue/calendar';

export default {
    directives: {
        Sticky,
    },
    components: {
        PvTabs,
    },
    data: function () {
        return {
            isSticky: false,
            value: null,
        };
    },
    mounted: function () {
        this.resizeHandler();
        window.addEventListener('resize', this.resizeHandler, {
            passive: true,
        });
    },
    destroyed: function () {
        window.removeEventListener('resize', this.resizeHandler);
    },
    methods: {
        tabClicked: function (e) {
            let linkId = e.target.getAttribute('data-toggle');
            if (!linkId)
                linkId =
                    e.target.parentNode.parentNode.getAttribute('data-toggle');
            if (document.getElementById(linkId + '-tab'))
                document.getElementById(linkId + '-tab').click();
        },
        handler: function (e) {
            let linkId = e.target.getAttribute('href');
            if (document.querySelector(linkId + '-tab')) {
                document.querySelector(linkId + '-tab').classList.add('active');
            }
        },
        resizeHandler: function () {
            this.isSticky = window.innerWidth > 991 ? true : false;
        },
    },
};
</script>
