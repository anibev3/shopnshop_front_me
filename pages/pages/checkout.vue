<template>
    <main class="main main-test">
        <div class="container checkout-container">
            <ul
                class="checkout-progress-bar d-flex justify-content-center flex-wrap"
            >
                <li>
                    <nuxt-link to="/pages/cart">Panier</nuxt-link>
                </li>
                <li class="active">
                    <nuxt-link to="/pages/checkout">Vérification</nuxt-link>
                </li>
                <li class="disabled">
                    <a href="javascript:;">Commande terminée</a>
                </li>
            </ul>

            <template v-if="cartList.length > 0">
                <!-- <div class="login-form-container">
                    <h4>
                        <span>Vous n'êtes pas connecté</span>
                        <button
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            class="btn btn-link btn-toggle"
                            @click="userInfoToggle = !userInfoToggle"
                            style="
                                border: 1px solid rgb(132, 18, 132);
                                background-color: rgb(132, 18, 132);
                                padding: 3px 50px 3px 50px;
                                color: white;
                            "
                        >
                            Se connecter
                        </button>
                    </h4>

                    <vue-slide-toggle :open="userInfoToggle">
                        <div class="login-section feature-box">
                            <div class="feature-box-content">
                                <form action="#" id="login-form">
                                    <p>
                                        Si vous avez déjà acheté chez nous,
                                        veuillez saisir vos coordonnées
                                        ci-dessous. Si vous êtes un nouveau
                                        client, veuillez passer à la section
                                        Facturation et expédition.
                                    </p>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="mb-0 pb-1">
                                                    Email
                                                    <span class="required"
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
                                                <label class="mb-0 pb-1">
                                                    Mot de passe
                                                    <span class="required"
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

                                    <button type="submit" class="btn">
                                        SE CONNECTER
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
                                                Se souvenir de moi
                                            </label>
                                        </div>

                                        <nuxt-link
                                            to="/pages/forgot-password"
                                            class="forget-password"
                                            >Mot de passe oublié ?</nuxt-link
                                        >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div> -->
                <div class="checkout-discount">
                    <h4>
                        Vous avez un coupon ?
                        <button
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            class="btn btn-link btn-toggle"
                            @click="codeOpened = !codeOpened"
                        >
                            ENTREZ VOTRE COUPON
                        </button>
                    </h4>

                    <vue-slide-toggle :open="codeOpened">
                        <div class="feature-box">
                            <div class="feature-box-content">
                                <p>
                                    Si vous avez un code promo, veuillez
                                    l'appliquer ci-dessous.
                                </p>

                                <form action="#">
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            class="form-control form-control-sm w-auto"
                                            placeholder="Code coupon"
                                            required
                                        />
                                        <div class="input-group-append">
                                            <button
                                                class="btn btn-sm mt-0"
                                                type="submit"
                                            >
                                                Appliquer le code
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </vue-slide-toggle>
                </div>
                <!-- {{ GET_BILLING }} -->
                <div class="row">
                    <div class="col-lg-7">
                        <div class="login-form-container">
                            <div class="d-flex" style="cursor: pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m14.7 8.39l-3.78 5l-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38a1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22Z"
                                    />
                                </svg>
                                <h3
                                    @click="openUserInfo()"
                                    style="margin-left: 15px"
                                >
                                    1. Informations client
                                </h3>
                            </div>

                            <vue-slide-toggle :open="userInfoToggle">
                                <div class="login-section feature-box">
                                    <div class="feature-box-content">
                                        <form action="#" id="login-form">
                                            <p>
                                                Si vous avez déjà acheté chez
                                                nous, veuillez saisir vos
                                                coordonnées ci-dessous. Si vous
                                                êtes un nouveau client, veuillez
                                                passer à la section Facturation
                                                et expédition.
                                            </p>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>
                                                            Nom et prénom
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
                                                            :value="user.name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label
                                                            class="mb-0 pb-1"
                                                        >
                                                            Email
                                                            <span
                                                                class="required"
                                                                >*</span
                                                            >
                                                        </label>
                                                        <input
                                                            type="email"
                                                            class="form-control"
                                                            required
                                                            :value="user.email"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label
                                                            class="mb-0 pb-1"
                                                        >
                                                            Contact
                                                            <span
                                                                class="required"
                                                                >*</span
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            :value="
                                                                user.call_phone
                                                            "
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label
                                                            class="mb-0 pb-1"
                                                        >
                                                            Commune
                                                            <span
                                                                class="required"
                                                                >*</span
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            :value="
                                                                user.municipality
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label
                                                            class="mb-0 pb-1"
                                                        >
                                                            Ville
                                                            <span
                                                                class="required"
                                                                >*</span
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            :value="user.city"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label
                                                            class="mb-0 pb-1"
                                                        >
                                                            Pays
                                                            <span
                                                                class="required"
                                                                >*</span
                                                            >
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            required
                                                            :value="
                                                                user.country
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </vue-slide-toggle>
                        </div>
                        <div class="login-form-container">
                            <div class="d-flex" style="cursor: pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m14.7 8.39l-3.78 5l-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38a1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22Z"
                                    />
                                </svg>
                                <h3
                                    @click="openBillingAddress()"
                                    style="margin-left: 15px"
                                >
                                    2. Informations de facturation
                                </h3>
                            </div>

                            <vue-slide-toggle :open="billingInfoToggle">
                                <div class="login-section feature-box">
                                    <div class="feature-box-content">
                                        <div v-if="GET_BILLING">
                                            <p>
                                                Si vous avez déjà acheté chez
                                                nous, veuillez saisir vos
                                                coordonnées ci-dessous. Si vous
                                                êtes un nouveau client, veuillez
                                                passer à la section Facturation
                                                et expédition.
                                            </p>
                                            <pv-billing-update></pv-billing-update>
                                        </div>

                                        <div v-if="!GET_BILLING">
                                            <p>
                                                Vous n'avez pas encore paramétré
                                                ce type d'adresse .
                                            </p>
                                            <pv-billing-create></pv-billing-create>
                                        </div>
                                    </div>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <div class="login-form-container">
                            <div class="d-flex" style="cursor: pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    style="color: green"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m14.7 8.39l-3.78 5l-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38a1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22Z"
                                    />
                                </svg>
                                <h3
                                    @click="openShippingAddress()"
                                    style="margin-left: 15px"
                                >
                                    3. Informations de livraison
                                </h3>
                            </div>

                            <vue-slide-toggle :open="shippingInfoToggle">
                                <div class="login-section feature-box">
                                    <div class="feature-box-content">
                                        <div
                                            class="address-box"
                                            v-if="GET_SHIPPING.length == 0"
                                        >
                                            Vous n'avez pas encore paramétré ce
                                            type d'adresse .
                                        </div>

                                        <div v-if="GET_SHIPPING.length != 0">
                                            <p>
                                                Si vous avez déjà acheté chez
                                                nous, veuillez saisir vos
                                                coordonnées ci-dessous. Si vous
                                                êtes un nouveau client, veuillez
                                                passer à la section Facturation
                                                et expédition.
                                            </p>
                                            <div
                                                v-for="(
                                                    shipping_address, index
                                                ) in GET_SHIPPING"
                                                class="address-box"
                                                @click="
                                                    selectShippingAddress(
                                                        shipping_address
                                                    )
                                                "
                                            >
                                                <div
                                                    :class="{
                                                        'address-box': true,
                                                        'selected-address':
                                                            shipping_address ===
                                                            selectedShippingAddress,
                                                        'not-selected-address':
                                                            shipping_address !==
                                                            selectedShippingAddress,
                                                    }"
                                                >
                                                    <div
                                                        class="checkmark"
                                                        v-if="
                                                            shipping_address ===
                                                            selectedShippingAddress
                                                        "
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="32"
                                                            height="32"
                                                            viewBox="0 0 24 24"
                                                            style="
                                                                color: #14c314;
                                                            "
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"
                                                            />
                                                            <path
                                                                fill="currentColor"
                                                                d="m14.7 8.39l-3.78 5l-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38a1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22Z"
                                                            />
                                                        </svg>
                                                    </div>

                                                    <div>
                                                        Pays :
                                                        {{
                                                            shipping_address.country
                                                        }}
                                                    </div>
                                                    <div>
                                                        Ville :
                                                        {{
                                                            shipping_address.city
                                                        }}
                                                    </div>
                                                    <div>
                                                        Nom et prénom du
                                                        receveur :
                                                        {{
                                                            shipping_address.recipient_name
                                                        }}
                                                    </div>
                                                    <div>
                                                        Adresse 1 :
                                                        {{
                                                            shipping_address.address_line_1
                                                        }}
                                                    </div>
                                                    <div>
                                                        Adresse 2 :
                                                        {{
                                                            shipping_address.address_line_2
                                                        }}
                                                    </div>
                                                    <div>
                                                        Code postal :
                                                        {{
                                                            shipping_address.postal_code
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex justify-content-between"
                                        >
                                            <span
                                                @click="openCreateShippingModal"
                                                class="btn btn-default address-action link-to-tab"
                                                >Ajouter une Adresse</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </vue-slide-toggle>
                        </div>

                        <ul class="checkout-steps">
                            <li>
                                <!-- <form action="#" id="checkout-form"> -->
                                <div class="form-group mb-1">
                                    <div class="custom-control custom-checkbox">
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
                                                accountOpened = !accountOpened
                                            "
                                            >Create an account?</label
                                        >
                                    </div>
                                </div>

                                <vue-slide-toggle :open="accountOpened">
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
                                <!-- </form> -->
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-5">
                        <div class="order-summary">
                            <h3>VOTRE COMMANDE</h3>

                            <table class="table table-mini-cart">
                                <thead>
                                    <tr>
                                        <th colspan="2">Article</th>
                                    </tr>
                                </thead>

                                <tbody v-if="cartList.length > 0">
                                    <tr
                                        v-for="(product, index) in cartItems"
                                        :key="'cart-product-' + index"
                                    >
                                        <!-- <h4 v-if="product."> -->

                                        <!-- </h4> -->
                                        <td class="product-col">
                                            <div class="d-flex">
                                                <figure
                                                    class="product-image-container"
                                                >
                                                    <nuxt-link
                                                        :to="
                                                            '/product/default/' +
                                                            (product.product
                                                                ? product
                                                                      .product
                                                                      .slug
                                                                : product.variant
                                                                ? product
                                                                      .variant
                                                                      .slug
                                                                : 0)
                                                        "
                                                        class="product-image"
                                                    >
                                                        <img
                                                            :src="`${
                                                                product.product
                                                                    ? product
                                                                          .product
                                                                          .pictures[0]
                                                                    : product.variant
                                                                    ? product
                                                                          .variant
                                                                          .pictures[0]
                                                                    : 0
                                                            }`"
                                                            width="100"
                                                            height="100"
                                                            alt="product"
                                                        />
                                                    </nuxt-link>
                                                </figure>

                                                <div>
                                                    <h2 class="product-title">
                                                        <span
                                                            class="product-qty"
                                                            >{{
                                                                product.quantity
                                                            }}</span
                                                        >
                                                        ×
                                                        <nuxt-link
                                                            :to="
                                                                '/product/default/' +
                                                                (product.product
                                                                    ? product
                                                                          .product
                                                                          .slug
                                                                    : product.variant
                                                                    ? product
                                                                          .variant
                                                                          .slug
                                                                    : '0')
                                                            "
                                                        >
                                                            {{
                                                                product.product
                                                                    ? product
                                                                          .product
                                                                          .name
                                                                    : product.variant
                                                                    ? product
                                                                          .variant
                                                                          .title
                                                                    : 0
                                                            }}
                                                        </nuxt-link>
                                                    </h2>

                                                    <h6>
                                                        {{
                                                            product.product
                                                                ? ''
                                                                : product.variant
                                                                ? product
                                                                      .variant
                                                                      .combinaisons
                                                                : 0
                                                        }}
                                                    </h6>
                                                    <h3
                                                        @click="
                                                            removeFromCart({
                                                                product:
                                                                    product,
                                                            })
                                                        "
                                                        style="
                                                            border: 1px solid;
                                                            font-size: 13px;
                                                            padding: 2px;
                                                            text-align: center;
                                                            color: red;
                                                            border-radius: 7px;
                                                            width: 70px;
                                                            font-weight: initial;
                                                            cursor: pointer;
                                                            margin-bottom: 0rem;
                                                        "
                                                    >
                                                        retirer
                                                    </h3>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="price-col">
                                            <span>{{
                                                numbertotalWithSpaces(
                                                    product.product
                                                        ? product.product.price
                                                        : product.variant
                                                        ? product.variant.price
                                                        : 0,
                                                    product.quantity
                                                )
                                            }}</span>
                                            <div style="margin-top: 8px">
                                                <pv-quantity-input
                                                    :qty="product.quantity"
                                                    :product="product"
                                                    @changeQty="changeQty"
                                                ></pv-quantity-input>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <p class="cart-empty-text ml-3">
                                        Aucun produit dans le panier
                                    </p>
                                </tbody>
                                <tfoot>
                                    <tr class="cart-subtotal">
                                        <td>
                                            <h4>Montant Hors Taxe</h4>
                                        </td>

                                        <td class="price-col">
                                            <span>{{
                                                numberWithSpaces(
                                                    cartAmount.ht_amount
                                                )
                                            }}</span>
                                        </td>
                                    </tr>
                                    <tr class="cart-subtotal">
                                        <td>
                                            <h4>Montant Taxe</h4>
                                        </td>

                                        <td class="price-col">
                                            <span>{{
                                                numberWithSpaces(
                                                    cartAmount.tax_amount
                                                )
                                            }}</span>
                                        </td>
                                    </tr>
                                    <tr class="order-shipping">
                                        <td class="text-left" colspan="2">
                                            <h4 class="m-b-sm">
                                                Mode de livraison
                                            </h4>

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
                                                        >Recuperation au point
                                                        relais</label
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
                                                        >Livraison à
                                                        domicile</label
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
                                                <span>{{
                                                    numberWithSpaces(
                                                        cartAmount.total_amount
                                                    )
                                                }}</span>
                                            </b>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div class="payment-methods">
                                <h4 class>Métode de paiement</h4>
                                <div class="info-box with-icon p-0">
                                    <div class="payment-info">
                                        <p>
                                            Tous les paiements sont traités en
                                            toute sécurité par Stripe, l'une des
                                            plateformes de paiement en ligne les
                                            plus fiables. Vos informations de
                                            paiement sont cryptées et protégées
                                            à tout moment.
                                        </p>
                                        <p>
                                            Vous pouvez effectuer vos achats en
                                            toute confiance, sachant que votre
                                            sécurité est notre priorité absolue.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="btn btn-dark btn-place-order"
                                form="checkout-form"
                                @click="makeUserOrder()"
                            >
                                PASSER AU PAIEMENT
                            </button>
                        </div>
                    </div>
                </div>
            </template>

            <div class="box-content" v-else>
                <table
                    class="table-cart"
                    data-pagination="no"
                    data-per-page="5"
                    data-page="1"
                    data-id
                    data-token
                >
                    <thead class="d-none">
                        <tr>
                            <th class="product-thumbnail"></th>

                            <th class="product-name">
                                <span class="nobr">Product</span>
                            </th>

                            <th class="product-price">
                                <span class="nobr">price</span>
                            </th>

                            <th class="product-stock-status">
                                <span class="nobr">Stock status</span>
                            </th>

                            <th class="product-add-to-cart">
                                <span class="nobr">Actions</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="cart-items-wrapper">
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 py-2 text-center">
                                <p class="noproduct-msg mb-2">
                                    Checkout is not available while your cart is
                                    empty.
                                </p>
                                <i class="icon-bag-2 cart-empty"></i>
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td
                                colspan="6"
                                class="px-3 py-2 text-center cart-empty"
                            >
                                No products added to the cart
                            </td>
                        </tr>
                        <tr class="border-0 py-0">
                            <td colspan="6" class="px-3 text-center">
                                <nuxt-link to="/shop" class="btn btn-go-shop"
                                    >RETURN TO SHOP</nuxt-link
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="mb-6"></div>
            </div>
        </div>
    </main>
</template>

<script>
import PvBillingCreate from '~/components/features/widgets/PvBillingCreate';
import PvBillingUpdate from '~/components/features/widgets/PvBillingUpdate';
import PvShippingCreate from '~/components/features/widgets/PvShippingCreate.vue';

import { VueSlideToggle } from 'vue-slide-toggle';
import { mapGetters, mapActions } from 'vuex';
import PvQuantityInput from '~/components/features/PvQuantityInput';

import { constant } from '~/api';

import {
    retrieveAndDecryptData,
    isLoggedIn,
} from '../../utils/storage/crypto.service';
import {
    priceFormatService,
    intervalPriceFormatService,
    totalpriceFormatService,
} from '~/utils/service';

export default {
    components: {
        VueSlideToggle,
        PvQuantityInput,
        PvShippingCreate,
        PvShippingCreate,
        PvBillingUpdate,
    },
    data: function () {
        return {
            userInfoToggle: true,
            codeOpened: false,
            billingInfoToggle: false,
            shippingInfoToggle: false,
            accountOpened: false,
            addressOpened: false,
            cartItems: [],
            billingItem: null,
            userData: null,
            // ---------------------------------------
            isSticky: false,
            isConnected: false,
            countries: [], // Pour stocker les pays
            selectedCountry: null, // Pour stocker le pays sélectionné
            cities: [], // Pour stocker les villes en fonction du pays sélectionné
            selectedCity: null, // Pour stocker la ville sélectionnée
            municipalities: [], // Pour stocker les municipalités en fonction de la ville sélectionnée
            selectedMunicipality: null, // Pour stocker la municipalité sélectionnée
            billingData: {
                user_uuid: '',
                address_line1: '',
                address_line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
            },
            shippingData: {
                user_uuid: '',
                recipient_name: '',
                address_line_1: '',
                address_line_2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
            },
            user: Object,
            selectedShippingAddress: null,
            selectedShippingAddress_uuid: null,
            billing_uuid: null,
        };
    },
    computed: {
        ...mapGetters('cart', ['cartList', 'totalPrice', 'cartAmount']),
        ...mapGetters('session', ['GET_USER_DATA', 'GET_USER_STATUS']),
        ...mapGetters('place', ['GET_COUNTRY']),
        ...mapGetters('billing', ['GET_BILLING']),
        ...mapGetters('shipping', ['GET_SHIPPING']),
    },

    watch: {
        cartList: function () {
            this.cartItems = this.cartList;
        },
    },
    created: function () {
        this.cartItems = [...this.cartList];
        this.isConnectedStatus();
        this.get_countries();
    },
    async mounted() {
        await this.getAddress();
        // setTimeout(() => {

        // }, 600);

        if (this.GET_BILLING) {
            this.initializeBillingData();
        }
    },
    methods: {
        ...mapActions('cart', ['updateCart', 'removeFromCart']),
        ...mapActions('session', ['getUserStatus', 'getUserData']),
        ...mapActions('place', ['get_countries']),
        ...mapActions('order', ['makeOrder', 'makePayment_bySH']),
        ...mapActions('billing', [
            'add_billing_address',
            'get_billing_address',
        ]),
        ...mapActions('shipping', [
            'add_shipping_address',
            'get_shipping_address',
        ]),

        openBillingAddress() {
            this.billingInfoToggle = !this.billingInfoToggle;
            this.userInfoToggle = false;
            this.shippingInfoToggle = false;
        },

        openUserInfo() {
            this.userInfoToggle = !this.userInfoToggle;
            this.shippingInfoToggle = false;
            this.billingInfoToggle = false;
        },
        openShippingAddress() {
            this.shippingInfoToggle = !this.shippingInfoToggle;
            this.billingInfoToggle = false;
            this.userInfoToggle = false;
        },
        initializeBillingData() {
            this.billingData = {
                address_line1: this.GET_BILLING.address_line1,
                address_line2: this.GET_BILLING.address_line2,
                city: this.GET_BILLING.city,
                state: this.GET_BILLING.state,
                postal_code: this.GET_BILLING.postal_code,
                country: this.GET_BILLING.country,
            };

            const billingCityName = this.GET_BILLING.city;
            const billingStateName = this.GET_BILLING.state;
            const billingCountryName = this.GET_BILLING.country;

            // Recherche du pays par nom
            const country = this.GET_COUNTRY.find(
                (country) => country.name === billingCountryName
            );
            if (country) {
                this.selectedCountry = country.uuid;

                // Recherche de la région par nom (dans le cas où les pays ont des régions)
                if (country.cities && country.cities.length > 0) {
                    const city = country.cities.find(
                        (city) => city.name === billingCityName
                    );
                    if (city) {
                        this.cities = city;
                        this.selectedCity = city.uuid;
                        // alert(this.selectedCity);

                        // Recherche de la ville par nom
                        if (
                            city.municipalities &&
                            city.municipalities.length > 0
                        ) {
                            const municipality = city.municipalities.find(
                                (municipality) =>
                                    municipality.name === billingStateName
                            );
                            if (municipality) {
                                this.municipalities = municipality;
                                // Si la ville a été trouvée, utilisez son UUID
                                this.selectedMunicipality = municipality.uuid;
                            }
                        }
                    }
                }
            }

            if (this.GET_SHIPPING.length > 0) {
                this.selectedShippingAddress = this.GET_SHIPPING[0];
                this.selectedShippingAddress_uuid = this.GET_SHIPPING[0].uuid;
            }
        },
        changeQty: function (value, product) {},
        numberWithSpaces(price) {
            return priceFormatService(price);
        },
        numbertotalWithSpaces(price, qty) {
            return totalpriceFormatService(price, qty);
        },
        intervalNumberWithSpaces(intervalPrice) {
            return intervalPriceFormatService(intervalPrice);
        },
        updateCities() {
            console.log(this.selectedCountry);
            if (this.selectedCountry) {
                const selectedCountry = this.GET_COUNTRY.find(
                    (country) => country.uuid === this.selectedCountry
                );
                this.cities = selectedCountry.cities;
                this.billingData.country = selectedCountry.name;
                this.shippingData.country = selectedCountry.name;
            } else {
                this.cities = [];
            }
            this.selectedCity = null;
            this.municipalities = [];
            this.selectedMunicipality = null;
        },

        updateMunicipalities() {
            if (this.selectedCity) {
                const selectedCity = this.cities.find(
                    (city) => city.uuid === this.selectedCity
                );
                this.municipalities = selectedCity.municipalities;
                this.billingData.city = selectedCity.name;
                this.shippingData.city = selectedCity.name;
            } else {
                this.municipalities = [];
            }
            this.selectedMunicipality = null;
        },
        // -------------------- CHECK USER IF USER IS CONNECTED

        isConnectedStatus() {
            this.isConnected = isLoggedIn();
            if (this.isConnected) {
                this.user = retrieveAndDecryptData(constant.USER_DATA);
                const isSessionId = retrieveAndDecryptData(
                    constant.STRIPE_SESSION_ID
                );
                const urlParams = new URLSearchParams(window.location.search);
                // Obtenir la valeur du paramètre session_id
                const sessionId = urlParams.get('session_id');

                // Vérifier si sessionId existe
                if (sessionId) {
                    if (sessionId == isSessionId) {
                        const orderResponseData = retrieveAndDecryptData(
                            constant.ORDER_RESPONSE
                        );
                        const ship_bill_address = retrieveAndDecryptData(
                            constant.SHIP_BILL_ADDRESS
                        );
                        if (orderResponseData) {
                            const formData = {
                                order_uuid: orderResponseData.uuid,
                                billing_uuid: ship_bill_address.billing_uuid,
                                payment_method: 'credit_card',
                                payment_date: new Date(),
                            };

                            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', formData);
                            this.makePayment_bySH(formData);
                        } else {
                        }
                    } else {
                        alert('NO');
                    }
                    // Appeler votre fonction avec sessionId
                }
            }
        },

        // -------------------- ADD BILLING ADRESS
        async submitBillingAddress() {
            this.billingData.user_uuid = this.user.uuid;
            await this.add_billing_address(this.billingData);
        },
        async submitShippingAddress() {
            this.shippingData.user_uuid = this.user.uuid;
            console.log(this.shippingData);
            await this.add_shipping_address(this.shippingData);
        },
        async getAddress() {
            const userId = this.user.uuid;
            await this.get_billing_address(userId);
            await this.get_shipping_address(userId);
        },
        selectShippingAddress(address) {
            this.selectedShippingAddress = address;
            this.selectedShippingAddress_uuid = address.uuid;
            // alert(address.uuid);
            // alert(JSON.stringify(address));
        },

        async makeUserOrder() {
            const formData = {
                user_uuid: this.user.uuid,
                shipping_uuid: this.selectedShippingAddress_uuid,
                billing_uuid: this.GET_BILLING.uuid,
            };
            await this.makeOrder(formData);
            // console.log(formData);
        },
        openCreateShippingModal: function () {
            this.$modal.show(
                () => import('~/components/features/widgets/PvShippingCreate'),
                { slug: 'une_variable_ici' },
                {
                    width: '931',
                    height: 'auto',
                    adaptive: true,
                    class: 'quickview-modal',
                }
            );
        },
    },
};
</script>

<style scoped>
.selected {
    background-color: #f0f0f0; /* Couleur de fond sélectionnée */
    border-color: #00cc00; /* Couleur de la bordure sélectionnée */
    border: 3px solid #00cc00;
    border-radius: 10px;
}

.checkmark {
    position: absolute;
    top: 5px;
    right: 5px;
}

.checkmark-svg {
    width: 20px;
    height: 20px;
    fill: #00cc00; /* Couleur du SVG de vérification */
}

.address-box {
    position: relative;
    /* Autres styles... */
}

.selected-address {
    background-color: #f0f0f0; /* Couleur de fond sélectionnée */
    border-color: #00cc00; /* Couleur de la bordure sélectionnée */
    border: 3px solid #00cc00;
    border-radius: 10px;
    padding: 10px;
}

.not-selected-address {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px;
    cursor: pointer;
}

.address-box {
    /* display: inline-block;
  position: relative; */
    margin-bottom: 0.9rem !important;
    /* width: 100%;
  transition: 0.3s border-color;
  font-size: 1.4rem;
  line-height: 3rem;
  vertical-align: top;
  word-wrap: break-word; */
}
</style>
