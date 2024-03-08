<template>
    <div
        class="newsletter-popup mfp-hide bg-img"
        id="newsletter-popup-form"
        style="padding: 20px 20px"
    >
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <h2 class="mb-6">PLANIFICATION D'ASSISTANCE</h2>
        <div class="">
            <div id="accordion">
                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[0],
                            collapsed: !toggleState[0],
                        }"
                        @click.prevent="changeToggle(0)"
                    >
                        Date et heure
                    </a>

                    <vue-slide-toggle :open="toggleState[0]">
                        <div class="card-body">
                            <div style="margin-top: 15px">
                                <div>
                                    <div class="flex mb-2">
                                        <label class="text-gray-600 font-medium"
                                            ><input
                                                class="mr-1"
                                                type="radio"
                                                value=""
                                                v-model="timezone"
                                            />Local</label
                                        >
                                        <label
                                            class="text-gray-600 font-medium ml-3"
                                            ><input
                                                class="mr-1"
                                                type="radio"
                                                value="utc"
                                                v-model="timezone"
                                            />UTC</label
                                        >
                                    </div>
                                    <div class="row">
                                        <div class="class col-lg-8">
                                            <v-date-picker
                                                v-model="date"
                                                :disabled-dates="disabledDates"
                                                style="width: 100%"
                                            />
                                        </div>
                                        <div class="class col-lg-4">
                                            <h5>Thursday, March 14</h5>
                                            <div class="heure-container">
                                                <div
                                                    v-for="hour in generateHours(
                                                        8,
                                                        18,
                                                        5
                                                    )"
                                                    :key="hour"
                                                    :class="{
                                                        'heure-selected':
                                                            hour ===
                                                            selectedHour,
                                                    }"
                                                    @click="selectHour(hour)"
                                                    class="heure"
                                                >
                                                    <span class="heure__">{{
                                                        hour
                                                    }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-end"
                                style="margin-top: 20px"
                            >
                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                >
                                    Place order
                                </button>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>

                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[1],
                            collapsed: !toggleState[1],
                        }"
                        @click.prevent="changeToggle(1)"
                    >
                        Information personnel
                    </a>

                    <vue-slide-toggle :open="toggleState[1]">
                        <div class="card-body">
                            <div class="login-form-container login-area">
                                <h4 class="">
                                    Déjà client ?
                                    <button
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                        class="btn btn-link btn-toggle"
                                        @click="loginOpened = !loginOpened"
                                    >
                                        Se connecter
                                    </button>
                                </h4>

                                <vue-slide-toggle :open="loginOpened">
                                    <div class="login-section feature-box">
                                        <div class="feature-box-content">
                                            <form action="#" id="login-form">
                                                <p>
                                                    If you have shopped with us
                                                    before, please enter your
                                                    details below. If you are a
                                                    new customer, please proceed
                                                    to the Billing & Shipping
                                                    section.
                                                </p>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label
                                                                class="mb-0 pb-1"
                                                            >
                                                                Username or
                                                                email
                                                                <span
                                                                    class="required"
                                                                    >*</span
                                                                >
                                                            </label>
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label
                                                                class="mb-0 pb-1"
                                                            >
                                                                Password
                                                                <span
                                                                    class="required"
                                                                    >*</span
                                                                >
                                                            </label>
                                                            <input
                                                                type="password"
                                                                class="form-control"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    class="btn"
                                                >
                                                    LOGIN
                                                </button>

                                                <div class="form-footer mb-1">
                                                    <div
                                                        class="custom-control custom-checkbox mb-0 mt-0"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            class="custom-control-input"
                                                            id="lost-password"
                                                        />
                                                        <label
                                                            class="custom-control-label mb-0"
                                                            for="lost-password"
                                                        >
                                                            Remember me
                                                        </label>
                                                    </div>

                                                    <nuxt-link
                                                        to="/pages/forgot-password"
                                                        class="forget-password"
                                                        >Lost your
                                                        password?</nuxt-link
                                                    >
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </vue-slide-toggle>
                            </div>

                            <div>
                                <ul class="checkout-steps">
                                    <li>
                                        <h2 class="step-title">Détails</h2>

                                        <form action="#" id="checkout-form">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>
                                                            First name
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>
                                                            Last name
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label
                                                    >Company name
                                                    (optional)</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>

                                            <div class="form-group">
                                                <label>
                                                    Phone
                                                    <abbr
                                                        class="required"
                                                        title="required"
                                                        >*</abbr
                                                    >
                                                </label>
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>

                                            <div class="form-group">
                                                <label>
                                                    Email address
                                                    <abbr
                                                        class="required"
                                                        title="required"
                                                        >*</abbr
                                                    >
                                                </label>
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    required
                                                />
                                            </div>

                                            <div class="form-group mb-1">
                                                <div
                                                    class="custom-control custom-checkbox"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        class="custom-control-input"
                                                        id="create-account"
                                                    />
                                                    <label
                                                        class="custom-control-label"
                                                        data-toggle="collapse"
                                                        data-target="#collapseThree"
                                                        aria-controls="collapseThree"
                                                        for="create-account"
                                                        @click="
                                                            accountOpened =
                                                                !accountOpened
                                                        "
                                                        >Create an
                                                        account?</label
                                                    >
                                                </div>
                                            </div>

                                            <vue-slide-toggle
                                                :open="accountOpened"
                                            >
                                                <div class="form-group">
                                                    <label>
                                                        Create account password
                                                        <abbr
                                                            class="required"
                                                            title="required"
                                                            >*</abbr
                                                        >
                                                    </label>
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        class="form-control"
                                                        required
                                                    />
                                                </div>
                                            </vue-slide-toggle>
                                            <hr />
                                            <div class="form-group">
                                                <label class="order-comments"
                                                    >Raison de
                                                    l'assistance</label
                                                >
                                                <textarea
                                                    class="form-control"
                                                    placeholder="Donnez plus de détails sur ceux pour quoi vous voulez l'assistance"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-dark btn-place-order"
                                                form="checkout-form"
                                            >
                                                Continuer
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>

                <div class="card card-accordion">
                    <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[4],
                            collapsed: !toggleState[4],
                        }"
                        @click.prevent="changeToggle(4)"
                    >
                        Soumission
                    </a>

                    <vue-slide-toggle :open="toggleState[4]">
                        <div class="card-body">
                            <div class="order-summary">
                                <h3>YOUR ORDER</h3>

                                <table class="table table-mini-cart">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Product</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="cartList.length > 0">
                                        <tr
                                            v-for="(product, index) in cartList"
                                            :key="'cart-product-' + index"
                                        >
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    {{ product.name }} ×
                                                    <span class="product-qty">{{
                                                        product.qty
                                                    }}</span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span
                                                    >${{
                                                        product.price
                                                            | priceFormat
                                                    }}</span
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <p class="cart-empty-text ml-3">
                                            No products in the cart.
                                        </p>
                                    </tbody>
                                    <tfoot>
                                        <tr class="cart-subtotal">
                                            <td>
                                                <h4>Subtotal</h4>
                                            </td>

                                            <td class="price-col">
                                                <span
                                                    >${{
                                                        totalPrice | priceFormat
                                                    }}</span
                                                >
                                            </td>
                                        </tr>
                                        <tr class="order-shipping">
                                            <td class="text-left" colspan="2">
                                                <h4 class="m-b-sm">Shipping</h4>

                                                <div
                                                    class="form-group form-group-custom-control"
                                                >
                                                    <div
                                                        class="custom-control custom-radio d-flex"
                                                    >
                                                        <input
                                                            type="radio"
                                                            class="custom-control-input"
                                                            name="radio"
                                                            checked
                                                        />
                                                        <label
                                                            class="custom-control-label"
                                                            >Local Pickup</label
                                                        >
                                                    </div>
                                                </div>

                                                <div
                                                    class="form-group form-group-custom-control mb-0"
                                                >
                                                    <div
                                                        class="custom-control custom-radio d-flex mb-0"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="radio"
                                                            class="custom-control-input"
                                                        />
                                                        <label
                                                            class="custom-control-label"
                                                            >Flat Rate</label
                                                        >
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="order-total">
                                            <td>
                                                <h4>Total</h4>
                                            </td>
                                            <td>
                                                <b class="total-price">
                                                    <span
                                                        >${{
                                                            totalPrice
                                                                | priceFormat
                                                        }}</span
                                                    >
                                                </b>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="payment-methods">
                                    <h4 class>Payment methods</h4>
                                    <div class="info-box with-icon p-0">
                                        <p>
                                            Sorry, it seems that there are no
                                            available payment methods for your
                                            state. Please contact us if you
                                            require assistance or wish to make
                                            alternate arrangements.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                >
                                    Place order
                                </button>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->

        <div>
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
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import Calendar from 'vue2-slot-calendar';
import { setCookie } from '~/utils/index';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            toggleState: [true, false, false],
            active: 0,
            selectedHour: null,
            loginOpened: false,
            codeOpened: false,
            accountOpened: false,
            addressOpened: false,

            // -----------------
            date: new Date(),
            today: new Date(),
            disabledDates: [],

            timezone: '',
        };
    },
    components: {
        VueSlideToggle,
        Calendar,
    },
    computed: {
        ...mapGetters('cart', ['cartList', 'totalCount', 'totalPrice']),
        disablePastDates() {
            // Calculer la date du jour et désactiver toutes les dates antérieures
            let dates = [];
            for (
                let d = new Date(this.today);
                d < this.today;
                d.setDate(d.getDate() + 1)
            ) {
                dates.push(new Date(d));
            }
            return dates;
        },
    },
    mounted() {
        this.disabledDates = this.disablePastDates;
    },

    methods: {
        removeNewsletter: function (e) {
            setCookie('newsletter', !e.target.checked);
        },
        changeToggle: function (index) {
            let tmp = this.toggleState[index];
            this.toggleState.fill(false);
            this.toggleState[index] = !tmp;
            this.toggleState = [...this.toggleState];
        },

        generateHours(startHour, endHour, interval) {
            const hours = [];
            for (let hour = startHour; hour <= endHour; hour++) {
                for (let minute = 0; minute < 60; minute += interval) {
                    // Formatage de l'heure pour l'affichage (par exemple, "14:10")
                    const formattedHour = `${hour
                        .toString()
                        .padStart(2, '0')}:${minute
                        .toString()
                        .padStart(2, '0')}`;
                    hours.push(formattedHour);
                }
            }
            return hours;
        },

        selectHour(hour) {
            // alert(hour);
            this.selectedHour = hour;
            // Vous pouvez ajouter d'autres logiques ici en fonction de la sélection de l'heure
        },
    },
};
</script>

<style scoped>
/* Importez les styles de PrimeVue */
/* @import '@primevue/resources/themes/saga-blue/theme.css'; */
/* @import '~primevue/resources/primevue.min.css';
@import '~primeicons/primeicons.css'; */
.accordion-custom {
    i,
    span {
        vertical-align: middle;
    }

    span {
        margin: 0 0.5rem;
    }
}

.heure {
    border: 1px solid;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer l'interactivité */

    /* Styles par défaut */
    transition: background-color 0.3s, box-shadow 0.3s;
}

.heure:hover {
    background-color: #f5f5f5; /* Couleur de surbrillance au survol */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
}

.heure__ {
    /* color: #222529; */
    font-weight: 700;
    line-height: 1.1;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    padding: 12px;
}
.accordion-custom {
    i,
    span {
        vertical-align: middle;
    }

    span {
        margin: 0 0.5rem;
    }
}

.heure {
    border: 1px solid;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-bottom: 10px;
    cursor: pointer; /* Ajoutez un curseur pointeur pour indiquer l'interactivité */

    /* Styles par défaut */
    transition: background-color 0.3s, box-shadow 0.3s;
}

.heure:hover {
    background-color: #f5f5f5; /* Couleur de surbrillance au survol */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ombre portée au survol */
}

.heure__ {
    color: #222529;
    font-weight: 700;
    line-height: 1.1;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    padding: 12px;
}

.heure-selected {
    /* background-color: red; */
    color: rgb(187, 49, 187);
    border: 2px solid rgb(187, 49, 187);
}

.heure-container {
    max-height: 222px; /* Ajustez la hauteur maximale selon vos besoins */
    overflow-y: auto; /* Ajoute une barre de défilement verticale si nécessaire */
}

.login-area {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}
</style>
