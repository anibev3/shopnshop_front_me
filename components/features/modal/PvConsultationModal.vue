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
        <h2 class="mb-6" v-if="!isApointmented">PLANIFICATION D'ASSISTANCE</h2>
        <div class="d-flex justify-content-center" v-if="isApointmented">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                style="color: green"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296a3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043a3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296a3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043a3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12"
                />
            </svg>
        </div>
        <div class="">
            <div id="accordion">
                <div v-if="!isApointmented">
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
                            Article & Marque
                        </a>

                        <vue-slide-toggle :open="toggleState[0]">
                            <div class="card-body">
                                <div style="margin-top: 15px">
                                    <div>
                                        <div class="mb-2 text-center">
                                            <h6
                                                class="text-gray-600 font-medium"
                                            >
                                                Veuillez sélection le type de
                                                produit aini que la marque
                                                concernée
                                            </h6>
                                        </div>
                                        <div class="row">
                                            <div
                                                class="class col-lg-4"
                                                v-for="category in GET_CATEGORIES"
                                                :key="category.uuid"
                                                @click="
                                                    showSubCategories(category)
                                                "
                                                :class="{
                                                    'selected-category':
                                                        isSelectedProductAttribut(
                                                            category
                                                        ),
                                                }"
                                            >
                                                <div class="heure-container">
                                                    <div class="heure">
                                                        <span
                                                            class="heure__"
                                                            :class="{
                                                                'selected-text':
                                                                    isSelectedProductAttribut(
                                                                        category
                                                                    ),
                                                            }"
                                                            style="
                                                                text-transform: uppercase;
                                                            "
                                                        >
                                                            {{ category.name }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="row"
                                            style="margin-top: 10px"
                                        >
                                            <div class="class col-lg-6">
                                                <div class="">
                                                    <label>
                                                        Catégorie
                                                        <abbr
                                                            class="required"
                                                            title="required"
                                                            >*</abbr
                                                        >
                                                    </label>

                                                    <v-select
                                                        v-if="selectedCategory"
                                                        v-model="
                                                            product_attribut.sub_category_uuid
                                                        "
                                                        :options="
                                                            subCategoriesData
                                                        "
                                                        placeholder="Sélectionner une catégorie"
                                                    ></v-select>
                                                    <div
                                                        v-if="!selectedCategory"
                                                    >
                                                        <Skeleton
                                                            height="3rem"
                                                        ></Skeleton>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="class col-lg-6">
                                                <div
                                                    class=""
                                                    v-if="brandsData.length > 0"
                                                >
                                                    <label>
                                                        Marques
                                                        <abbr
                                                            class="required"
                                                            title="required"
                                                            >*</abbr
                                                        >
                                                    </label>

                                                    <v-select
                                                        v-model="
                                                            product_attribut.brand_uuid
                                                        "
                                                        :options="brandsData"
                                                        option-text="label"
                                                        option-value="uuid"
                                                        placeholder="Sélectionner une marque"
                                                    ></v-select>
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
                                        @click="submitProductAttribut()"
                                    >
                                        CONTINUER
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
                            Date et heure
                        </a>

                        <vue-slide-toggle :open="toggleState[1]">
                            <div class="card-body">
                                <div style="margin-top: 15px">
                                    <div>
                                        <div class="flex mb-2">
                                            <label
                                                class="text-gray-600 font-medium"
                                                ><input
                                                    class="mr-1"
                                                    type="radio"
                                                    value="local"
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
                                                    :disabled-dates="
                                                        disabledDates
                                                    "
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
                                                        @click="
                                                            selectHour(hour)
                                                        "
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
                                        @click="submitDateAttribut()"
                                    >
                                        CONTINUER
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
                                expanded: toggleState[2],
                                collapsed: !toggleState[2],
                            }"
                            @click.prevent="changeToggle(2)"
                        >
                            Information personnel
                        </a>

                        <vue-slide-toggle :open="toggleState[2]">
                            <div class="card-body">
                                <div
                                    class="login-form-container login-area"
                                    v-if="!isConnected"
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center;"
                                        style="align-items: baseline"
                                        v-if="!loginOpened"
                                    >
                                        <h4 class="">
                                            Veuillez vous connecter
                                        </h4>

                                        <div
                                            class="for_me_oh"
                                            style="
                                                margin-bottom: 0;
                                                padding-top: 0rem;
                                                padding-bottom: 0rem;
                                            "
                                        >
                                            <button
                                                type="submit"
                                                class="btn"
                                                @click="
                                                    loginOpened = !loginOpened
                                                "
                                                style="margin-top: 0rem"
                                            >
                                                SE CONNECTER
                                            </button>
                                        </div>
                                    </div>

                                    <vue-slide-toggle :open="loginOpened">
                                        <div class="login-section feature-box">
                                            <div class="feature-box-content">
                                                <div
                                                    class="d-flex justify-content-end"
                                                >
                                                    <i
                                                        @click="
                                                            loginOpened =
                                                                !loginOpened
                                                        "
                                                        class="fas fa-xmark"
                                                        style="
                                                            font-size: 26px;
                                                            margin-bottom: -3px;
                                                        "
                                                    ></i>
                                                </div>
                                                <form
                                                    @submit.prevent="
                                                        submitLogin
                                                    "
                                                    style="padding-top: 0rem"
                                                >
                                                    <p>
                                                        Vous devez vous
                                                        connecter pour faire
                                                        appel à un personnal
                                                        shopper
                                                    </p>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <label
                                                                    class="mb-0 pb-1"
                                                                >
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
                                                                    v-model="
                                                                        loginData.email
                                                                    "
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div
                                                                class="form-group"
                                                            >
                                                                <label
                                                                    class="mb-0 pb-1"
                                                                >
                                                                    Mot de passe
                                                                    <span
                                                                        class="required"
                                                                        >*</span
                                                                    >
                                                                </label>
                                                                <input
                                                                    v-model="
                                                                        loginData.password
                                                                    "
                                                                    type="password"
                                                                    class="form-control"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="d-flex justify-content-between"
                                                        style="
                                                            align-items: baseline;
                                                        "
                                                    >
                                                        <nuxt-link
                                                            to="/pages/forgot-password"
                                                            class="forget-password"
                                                            >Mot de passe Oublié
                                                            ?</nuxt-link
                                                        >
                                                        <button
                                                            type="submit"
                                                            class="btn"
                                                        >
                                                            <span
                                                                v-if="
                                                                    !isConnecting
                                                                "
                                                            >
                                                                SE CONNECTER
                                                            </span>
                                                            <div
                                                                v-if="
                                                                    isConnecting
                                                                "
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="32"
                                                                    height="32"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <circle
                                                                        cx="4"
                                                                        cy="12"
                                                                        r="3"
                                                                        fill="currentColor"
                                                                    >
                                                                        <animate
                                                                            id="svgSpinners3DotsBounce0"
                                                                            attributeName="cy"
                                                                            begin="0;svgSpinners3DotsBounce1.end+0.25s"
                                                                            calcMode="spline"
                                                                            dur="0.6s"
                                                                            keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                            values="12;6;12"
                                                                        />
                                                                    </circle>
                                                                    <circle
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="3"
                                                                        fill="currentColor"
                                                                    >
                                                                        <animate
                                                                            attributeName="cy"
                                                                            begin="svgSpinners3DotsBounce0.begin+0.1s"
                                                                            calcMode="spline"
                                                                            dur="0.6s"
                                                                            keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                            values="12;6;12"
                                                                        />
                                                                    </circle>
                                                                    <circle
                                                                        cx="20"
                                                                        cy="12"
                                                                        r="3"
                                                                        fill="currentColor"
                                                                    >
                                                                        <animate
                                                                            id="svgSpinners3DotsBounce1"
                                                                            attributeName="cy"
                                                                            begin="svgSpinners3DotsBounce0.begin+0.2s"
                                                                            calcMode="spline"
                                                                            dur="0.6s"
                                                                            keySplines=".33,.66,.66,1;.33,0,.66,.33"
                                                                            values="12;6;12"
                                                                        />
                                                                    </circle>
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </vue-slide-toggle>
                                </div>

                                <div v-if="isConnected">
                                    <ul class="checkout-steps">
                                        <li>
                                            <h2 class="step-title">Détails</h2>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            Nom et Prénom
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="user.name"
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-7">
                                                    <div class="form-group">
                                                        <label>
                                                            Email
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="user.email"
                                                            type="email"
                                                            class="form-control"
                                                            required
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <label>
                                                            Contact
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="
                                                                user.call_phone
                                                            "
                                                            disabled
                                                            type="tel"
                                                            class="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            Objet de la demande
                                                            <abbr
                                                                class="required"
                                                                title="required"
                                                                >*</abbr
                                                            >
                                                        </label>
                                                        <input
                                                            v-model="
                                                                request_attribut.libelle
                                                            "
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="order-comments"
                                                    >Raison de
                                                    l'assistance</label
                                                >
                                                <textarea
                                                    v-model="
                                                        request_attribut.request
                                                    "
                                                    class="form-control"
                                                    placeholder="Donnez plus de détails sur ceux pour quoi vous voulez l'assistance"
                                                    required
                                                ></textarea>
                                            </div>
                                            <button
                                                type="submit"
                                                class="btn btn-dark btn-place-order"
                                                form="checkout-form"
                                                @click="submitRequestAttribut()"
                                            >
                                                <div v-if="!isApointmenting">
                                                    SOUMETTRE
                                                </div>
                                                <div v-if="isApointmenting">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g>
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".14"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".29"
                                                                transform="rotate(30 12 12)"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".43"
                                                                transform="rotate(60 12 12)"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".57"
                                                                transform="rotate(90 12 12)"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".71"
                                                                transform="rotate(120 12 12)"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                opacity=".86"
                                                                transform="rotate(150 12 12)"
                                                            />
                                                            <rect
                                                                width="2"
                                                                height="5"
                                                                x="11"
                                                                y="1"
                                                                fill="currentColor"
                                                                transform="rotate(180 12 12)"
                                                            />
                                                            <animateTransform
                                                                attributeName="transform"
                                                                calcMode="discrete"
                                                                dur="0.75s"
                                                                repeatCount="indefinite"
                                                                type="rotate"
                                                                values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </vue-slide-toggle>
                    </div>
                </div>

                <div class="card card-accordion">
                    <!-- <a
                        href="#"
                        class="card-header"
                        :class="{
                            expanded: toggleState[3],
                            collapsed: !toggleState[3],
                        }"
                        @click.prevent="changeToggle(3)"
                    >
                        Soumission
                    </a> -->

                    <vue-slide-toggle :open="toggleState[3]">
                        <div class="card-body">
                            <div class="order-summary">
                                <div class="d-flex justify-content-center">
                                    <h3 style="text-transform: uppercase">
                                        reserver avec succes
                                    </h3>
                                </div>

                                <table class="table table-mini-cart">
                                    <thead>
                                        <tr>
                                            <th colspan="2">Votre demande</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="apointmentData">
                                        <tr>
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    ×
                                                    <span class="product-qty"
                                                        >Date :
                                                    </span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span>{{
                                                    apointmentData.date
                                                }}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    ×
                                                    <span class="product-qty"
                                                        >Heure :
                                                    </span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span>{{
                                                    apointmentData.time
                                                }}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    ×
                                                    <span class="product-qty"
                                                        >Libellé :
                                                    </span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span>{{
                                                    apointmentData.libelle
                                                }}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    ×
                                                    <span class="product-qty"
                                                        >Catégorie :
                                                    </span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span>{{
                                                    apointmentData.category.name
                                                }}</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="product-col">
                                                <h2 class="product-title">
                                                    ×
                                                    <span class="product-qty"
                                                        >Marque :
                                                    </span>
                                                </h2>
                                            </td>

                                            <td class="price-col">
                                                <span>{{
                                                    apointmentData.brand.name
                                                }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <p class="cart-empty-text ml-3">
                                            Erreur
                                        </p>
                                    </tbody>
                                    <tfoot>
                                        <tr class="cart-subtotal">
                                            <!--<td>
                                                <h4>Subtotal</h4>
                                            </td>

                                            <td class="price-col">
                                                <span
                                                    >${{
                                                        totalPrice | priceFormat
                                                    }}</span
                                                >
                                            </td> -->
                                        </tr>
                                    </tfoot>
                                </table>

                                <div class="payment-methods">
                                    <h4 class>Note d'information</h4>
                                    <div class="info-box with-icon p-0">
                                        <p>
                                            Un mail de notification vous sera
                                            envoyé resumant votre demande
                                            d'assistance. Aussi des notification
                                            vous seront envoyé par email pour
                                            vous informer des informations
                                            concernant votre personnal shopper y
                                            compris toutes les commoditées
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-dark btn-place-order"
                                    form="checkout-form"
                                    @click="closeModal()"
                                >
                                    Fermer
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
import { mapGetters, mapActions } from 'vuex';
import { GET_BRANDS } from '~/store/prefs/brand';
import {
    retrieveAndDecryptData,
    encryptAndStoreData,
    isLoggedIn,
} from '~/utils/storage/crypto.service';
import Api, { baseUrl2, apiEndpoints, constant } from '~/api';

export default {
    data() {
        return {
            options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                // Ajoutez autant d'options que nécessaire
            ],
            selectedOption: null,
            userData: null,
            isConnected: false,
            user: Object,
            isConnecting: false,

            toggleState: [true, false, false],
            active: 0,
            selectedHour: null,
            loginOpened: false,
            codeOpened: false,
            accountOpened: false,
            addressOpened: false,
            selectedCategory: null,

            // -----------------
            date: new Date(),
            today: new Date(),
            disabledDates: [],
            brandsList: [],
            timezone: '',

            // (--------------------)
            selectedBrand: null,
            brands: [], // Vos données de marques
            filteredBrands: [],
            loginData: {
                email: '',
                password: '',
            },
            product_attribut: {
                category_uuid: '',
                sub_category_uuid: '',
                brand_uuid: '',
                rank: 1,
            },

            date_attribut: {
                date: '',
                time: '',
                timezone: '',
                rank: 2,
            },

            request_attribut: {
                customer_uuid: '',
                libelle: '',
                request: '',
                rank: 3,
            },

            isApointmenting: false,
            isApointmented: false,
            apointmentData: null,
            subCategoriesData: [],
            brandsData: [],
        };
    },
    components: {
        VueSlideToggle,
        Calendar,
    },
    computed: {
        ...mapGetters('product', ['GET_CATEGORIES']),
        ...mapGetters('cart', ['cartList', 'totalCount', 'totalPrice']),
        ...mapGetters('brand', ['GET_BRANDS']),

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
    created() {
        this.isConnectedStatus();
        this.get_categories();
        this.get_brands();
    },
    mounted() {
        this.disabledDates = this.disablePastDates;
        if (this.GET_BRANDS) {
            this.brandsData = this.transformBrands(this.GET_BRANDS);
        }
    },

    methods: {
        ...mapActions('product', ['get_categories']),
        ...mapActions('brand', ['get_brands']),

        isConnectedStatus() {
            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                this.user = retrieveAndDecryptData(constant.USER_DATA);
                console.log(this.user);
            }
        },
        async submitLogin() {
            this.isConnecting = true;
            try {
                Api.post(`${baseUrl2}${apiEndpoints.login}`, this.loginData)
                    .then(async (response) => {
                        const token = response.data.accessToken;
                        encryptAndStoreData(constant.USER_TOKEN, token);
                        return await this.getUserData(token);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isConnecting = false;
            }
        },

        async getUserData(token) {
            this.isConnecting = true;

            try {
                Api.get(`${baseUrl2}${apiEndpoints.user}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(async (response) => {
                        encryptAndStoreData(constant.USER_DATA, response.data);
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isConnecting = false;
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isConnecting = false;
            }
        },

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

        showSubCategories(category) {
            this.selectedCategory = category;
            this.subCategoriesData = this.transformSubCategories(
                category.sub_categories
            );
            console.log(this.subCategoriesData);
            this.product_attribut.category_uuid = category.uuid;
        },
        transformSubCategories(subCategories) {
            return subCategories.map((subCategory) => ({
                label: subCategory.name, // Utilisez le nom comme label
                value: subCategory.slug, // Utilisez le slug comme valeur
                uuid: subCategory.uuid, // Conservez l'uuid
            }));
        },

        transformBrands(brands) {
            return brands.map((brand) => ({
                label: brand.name, // Utilisez le nom comme label
                value: brand.name, // Utilisez le nom comme valeur
                uuid: brand.uuid, // Conservez l'uuid
            }));
        },

        async submitProductAttribut() {
            if (!this.product_attribut.category_uuid) {
                console.log('Sélectionné une categorie');
                return;
            } else if (!this.product_attribut.sub_category_uuid) {
                console.log('Sélectionné une sous categorie');
                return;
            } else if (!this.product_attribut.brand_uuid) {
                console.log('Sélectionné une marque');
                return;
            }
            this.product_attribut.brand_uuid =
                this.product_attribut.brand_uuid.uuid;

            this.product_attribut.sub_category_uuid =
                this.product_attribut.sub_category_uuid.uuid;
            await encryptAndStoreData(
                constant.PRODUCT_ATTRIBUT,
                this.product_attribut
            );
            this.changeToggle(1);
            console.log(this.product_attribut);
        },

        isSelectedProductAttribut(category) {
            return this.selectedCategory === category;
        },

        submitDateAttribut() {
            this.date_attribut.date = this.date;
            this.date_attribut.time = this.selectedHour;
            this.date_attribut.timezone = this.timezone;

            console.log(this.date_attribut);
            this.changeToggle(2);
        },

        async submitRequestAttribut() {
            this.isApointmenting = true;
            this.request_attribut.customer_uuid = this.user.uuid;

            const form_date = {
                date: this.date_attribut.date,
                category_uuid: this.product_attribut.sub_category_uuid,
                brand_uuid: this.product_attribut.brand_uuid,
                customer_uuid: this.request_attribut.customer_uuid,
                time: this.date_attribut.time,
                request: this.request_attribut.request,
                libelle: this.request_attribut.libelle,
            };

            try {
                await Api.post(
                    `${baseUrl2}${apiEndpoints.p_appointments}`,
                    form_date
                )
                    .then(async (response) => {
                        console.log(response);
                        this.apointmentData = response.data.data;
                        this.isApointmenting = false;
                        this.isApointmented = true;
                        this.changeToggle(3);
                    })
                    .catch((error) => {
                        console.log(error);
                        this.isApointmenting = false;
                    });
            } catch (error) {
                console.error(
                    "Erreur lors du chargement des données depuis l'API :",
                    error
                );
                this.isApointmenting = false;
            }
        },

        closeModal() {
            return window.location.reload();
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
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}
.form-input {
    height: 42px;
    border-radius: 10px !important;
    border-color: #1c1818;
}

.product-col {
    padding: 0rem !important;
}

.selected-category {
    border-color: rgb(132, 18, 132);
    border-width: 3px;
}

.selected-text {
    color: rgb(132, 18, 132);
}

.selected-sub-category {
    border-color: rgb(132, 18, 132);
    border-width: 3px;
}
</style>
