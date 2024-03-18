<template>
    <main class="main">
        <div class="page-header">
            <div class="container d-flex flex-column align-items-center">
                <nav aria-label="breadcrumb" class="breadcrumb-nav border-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <nuxt-link to="/">Accueil</nuxt-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="shop">
                            <nuxt-link to="/shop">Magasin</nuxt-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Mon Compte
                        </li>
                    </ol>
                </nav>

                <h1>Mon compte</h1>
            </div>
        </div>

        <div class="container account-container custom-account-container">
            <div class="row">
                <div
                    class="sidebar widget widget-dashboard col-lg-3 order-0"
                    sticky-container
                >
                    <div v-sticky="isSticky" sticky-offset="{top: 80}">
                        <h2 class="text-uppercase">Mon compte</h2>

                        <pv-tabs>
                            <ul
                                class="nav nav-tabs list flex-column mb-0"
                                role="tablist"
                            >
                                <li class="nav-item">
                                    <a
                                        class="nav-link active"
                                        id="dashboard-tab"
                                        data-toggle="tab"
                                        href="#dashboard"
                                        role="tab"
                                        aria-controls="dashboard"
                                        aria-selected="true"
                                        >Tableau de bord</a
                                    >
                                </li>

                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        id="order-tab"
                                        data-toggle="tab"
                                        href="#order"
                                        role="tab"
                                        aria-controls="order"
                                        aria-selected="false"
                                        >Commandes</a
                                    >
                                </li>

                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        id="address-tab"
                                        data-toggle="tab"
                                        href="#address"
                                        role="tab"
                                        aria-controls="address"
                                        aria-selected="false"
                                        >Adresses</a
                                    >
                                </li>

                                <li class="nav-item">
                                    <a
                                        class="nav-link"
                                        id="edit-tab"
                                        data-toggle="tab"
                                        href="#edit"
                                        role="tab"
                                        aria-controls="edit"
                                        aria-selected="false"
                                        >Profil utilisateur</a
                                    >
                                </li>

                                <li>
                                    <nuxt-link to="/pages/wishlist"
                                        >Articles favoris</nuxt-link
                                    >
                                </li>

                                <li>
                                    <nuxt-link to="/">Déconnexion</nuxt-link>
                                </li>

                                <li class="nav-item d-none">
                                    <a
                                        class="nav-link"
                                        id="billing-tab"
                                        data-toggle="tab"
                                        href="#billing"
                                        role="tab"
                                        aria-controls="billing"
                                        aria-selected="false"
                                        >Facturation</a
                                    >
                                </li>

                                <li class="nav-item d-none">
                                    <a
                                        class="nav-link"
                                        id="shipping-tab"
                                        data-toggle="tab"
                                        href="#shipping"
                                        role="tab"
                                        aria-controls="shipping"
                                        aria-selected="false"
                                        >Transport</a
                                    >
                                </li>
                            </ul>
                        </pv-tabs>
                    </div>
                </div>

                <div class="tab-content col-lg-9 order-1 order-lg-last">
                    <div
                        class="tab-pane fade show active"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                    >
                        <div class="dashboard-content">
                            <!-- <p>
                                Hello
                                <strong class="text-dark">Editor</strong> (not
                                <strong class="text-dark">Editor</strong>?
                                <nuxt-link
                                    to="/pages/login"
                                    class="btn btn-link"
                                    >Log out</nuxt-link
                                >)
                            </p> -->

                            <p>
                                À partir du tableau de bord de votre compte,
                                <a
                                    class="btn btn-link link-to-tab"
                                    href="#order"
                                    data-toggle="order"
                                    @click.prevent="tabClicked($event)"
                                    >vos recentes commandes</a
                                >, gérer votre
                                <a
                                    class="btn btn-link link-to-tab"
                                    href="#address"
                                    data-toggle="address"
                                    @click.prevent="tabClicked($event)"
                                    >adresse de facturation ainsi que votre
                                    adresse de livraison</a
                                >, et
                                <a
                                    class="btn btn-link link-to-tab"
                                    href="#edit"
                                    data-toggle="edit"
                                    @click.prevent="tabClicked($event)"
                                    >modifiez votre mot de passe et les détails
                                    de votre compte.</a
                                >
                            </p>

                            <div class="mb-2 mb-lg-5"></div>

                            <div class="row row-lg">
                                <div class="col-6 col-md-4">
                                    <div
                                        class="feature-box text-center pb-4"
                                        data-toggle="order"
                                        @click.prevent="tabClicked($event)"
                                    >
                                        <a href="#order" class="link-to-tab">
                                            <i class="sicon-social-dropbox"></i>
                                        </a>
                                        <div class="feature-box-content">
                                            <h3>COMMANDES</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div
                                        class="feature-box text-center pb-4"
                                        data-toggle="address"
                                        @click.prevent="tabClicked($event)"
                                    >
                                        <a href="#address" class="link-to-tab">
                                            <i class="sicon-location-pin"></i>
                                        </a>
                                        <div class="feature-box-content">
                                            <h3>ADRESSES</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div
                                        class="feature-box text-center pb-4"
                                        data-toggle="edit"
                                        @click.prevent="tabClicked($event)"
                                    >
                                        <a href="#edit" class="link-to-tab">
                                            <i class="icon-user-2"></i>
                                        </a>
                                        <div class="feature-box-content p-0">
                                            <h3>DETAILS DU COMPTE</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div class="feature-box text-center pb-4">
                                        <nuxt-link to="/pages/wishlist">
                                            <i class="sicon-heart"></i>
                                        </nuxt-link>
                                        <div class="feature-box-content">
                                            <h3>FAVORIS</h3>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-md-4">
                                    <div class="feature-box text-center pb-4">
                                        <nuxt-link to="/">
                                            <i class="sicon-logout"></i>
                                        </nuxt-link>
                                        <div class="feature-box-content">
                                            <h3>DECONNEXION</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End .row -->
                        </div>
                    </div>

                    <div
                        class="tab-pane fade"
                        id="order"
                        role="tabpanel"
                        aria-labelledby="order-tab"
                    >
                        <div class="order-content">
                            <h3 class="account-sub-title d-none d-md-block">
                                <i
                                    class="sicon-social-dropbox align-middle mr-3"
                                ></i
                                >Orders
                            </h3>
                            <div class="order-table-container text-center">
                                <table class="table table-order text-left">
                                    <thead>
                                        <tr>
                                            <th class="order-id">ORDER</th>
                                            <th class="order-date">DATE</th>
                                            <th class="order-status">STATUS</th>
                                            <th class="order-price">TOTAL</th>
                                            <th class="order-action">
                                                ACTIONS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                class="text-center p-0"
                                                colspan="5"
                                            >
                                                <p class="mb-5 mt-5">
                                                    No Order has been made yet.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr class="mt-0 mb-3 pb-2" />

                                <nuxt-link to="/shop" class="btn btn-dark"
                                    >Aller au magasin</nuxt-link
                                >
                            </div>
                        </div>
                    </div>
                    <!-- End .tab-pane -->

                    <div
                        class="tab-pane fade"
                        id="address"
                        role="tabpanel"
                        aria-labelledby="address-tab"
                    >
                        <h3 class="account-sub-title d-none d-md-block mb-1">
                            <i class="sicon-location-pin align-middle mr-3"></i
                            >Addresses
                        </h3>
                        <div class="addresses-content">
                            <p class="mb-4">
                                Les adresses suivantes seront utilisées sur pour
                                paiement par défaut.
                            </p>

                            <div class="row">
                                <div class="address col-md-6">
                                    <div class="heading d-flex">
                                        <h4 class="text-dark mb-0">
                                            Adresse de facturation
                                        </h4>
                                    </div>

                                    <div class="address-box">
                                        Vous n'avez pas encore paramétré ce type
                                        d'adresse .
                                    </div>

                                    <a
                                        href="#address"
                                        class="btn btn-default address-action link-to-tab"
                                        data-toggle="billing"
                                        @click.prevent="
                                            tabClicked($event), handler($event)
                                        "
                                        >Ajouter une Adresse</a
                                    >
                                </div>

                                <div class="address col-md-6 mt-5 mt-md-0">
                                    <div class="heading d-flex">
                                        <h4 class="text-dark mb-0">
                                            Adresse de livraison
                                        </h4>
                                    </div>

                                    <div class="address-box">
                                        Vous n'avez pas encore paramétré ce type
                                        d'adresse .
                                    </div>

                                    <a
                                        href="#address"
                                        class="btn btn-default address-action link-to-tab"
                                        data-toggle="shipping"
                                        @click.prevent="
                                            tabClicked($event), handler($event)
                                        "
                                        >Ajouter une Adresse</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End .tab-pane -->

                    <div
                        class="tab-pane fade"
                        id="edit"
                        role="tabpanel"
                        aria-labelledby="edit-tab"
                    >
                        <h3
                            class="account-sub-title d-none d-md-block mt-0 pt-1 ml-1"
                        >
                            <i class="icon-user-2 align-middle mr-3 pr-1"></i
                            >Détails du compte
                        </h3>
                        <div class="account-content">
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="acc-name">
                                                Prénom
                                                <span class="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Editor"
                                                id="acc-name"
                                                name="acc-name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="acc-lastname">
                                                Nom
                                                <span class="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="acc-lastname"
                                                name="acc-lastname"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group mb-2">
                                    <label for="acc-text">
                                        Pseudo
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="acc-text"
                                        name="acc-text"
                                        placeholder="Editor"
                                        required
                                    />
                                    <p>
                                        Ce sera ainsi que ton nom sera affiché
                                        dans la section compte et dans
                                        Commentaires
                                    </p>
                                </div>

                                <div class="form-group mb-4">
                                    <label for="acc-email">
                                        Adresse Email
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="acc-email"
                                        name="acc-email"
                                        placeholder="editor@gmail.com"
                                        required
                                    />
                                </div>

                                <div class="change-password">
                                    <h3 class="text-uppercase mb-2">
                                        Modifier le mot de passe
                                    </h3>

                                    <div class="form-group">
                                        <label for="acc-password"
                                            >Mot de passe actuel (laissez vide
                                            pour laisser inchangé)</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="acc-password"
                                            name="acc-password"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="acc-password"
                                            >Nouveau mot de passe (laissez vide
                                            pour quitter inchangé)</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="acc-new-password"
                                            name="acc-new-password"
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label for="acc-password"
                                            >Confirmer le nouveau mot de
                                            passe</label
                                        >
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="acc-confirm-password"
                                            name="acc-confirm-password"
                                        />
                                    </div>
                                </div>

                                <div class="form-footer mt-3 mb-0">
                                    <button
                                        type="submit"
                                        class="btn btn-dark mr-0"
                                    >
                                        Soumettre
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End .tab-pane -->

                    <div
                        class="tab-pane fade"
                        id="billing"
                        role="tabpanel"
                        aria-labelledby="billing-tab"
                    >
                        <div class="address account-content mt-0 pt-2">
                            <h4 class="title">Billing address</h4>

                            <form class="mb-2" action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>
                                                First name
                                                <span class="required">*</span>
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
                                                <span class="required">*</span>
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
                                    <label>Company</label>
                                    <input type="text" class="form-control" />
                                </div>

                                <div class="select-custom">
                                    <label>
                                        Country / Region
                                        <span class="required">*</span>
                                    </label>
                                    <select name="orderby" class="form-control">
                                        <option value selected="selected">
                                            British Indian Ocean Territory
                                        </option>
                                        <option value="1">Brunei</option>
                                        <option value="2">Bulgaria</option>
                                        <option value="3">Burkina Faso</option>
                                        <option value="4">Burundi</option>
                                        <option value="5">Cameroon</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>
                                        Street address
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="House number and street name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        Town / City
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        State / Country
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        Postcode / ZIP
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group mb-3">
                                    <label>
                                        Phone
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group mb-3">
                                    <label>
                                        Email address
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="editor@gmail.com"
                                        required
                                    />
                                </div>

                                <div class="form-footer mb-0">
                                    <div class="form-footer-right">
                                        <button
                                            type="submit"
                                            class="btn btn-dark py-4"
                                        >
                                            Save Address
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End .tab-pane -->

                    <div
                        class="tab-pane fade"
                        id="shipping"
                        role="tabpanel"
                        aria-labelledby="shipping-tab"
                    >
                        <div class="address account-content mt-0 pt-2">
                            <h4 class="title mb-3">Shipping Address</h4>

                            <form class="mb-2" action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>
                                                First name
                                                <span class="required">*</span>
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
                                                <span class="required">*</span>
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
                                    <label>Company</label>
                                    <input type="text" class="form-control" />
                                </div>

                                <div class="select-custom">
                                    <label>
                                        Country / Region
                                        <span class="required">*</span>
                                    </label>
                                    <select name="orderby" class="form-control">
                                        <option value selected="selected">
                                            British Indian Ocean Territory
                                        </option>
                                        <option value="1">Brunei</option>
                                        <option value="2">Bulgaria</option>
                                        <option value="3">Burkina Faso</option>
                                        <option value="4">Burundi</option>
                                        <option value="5">Cameroon</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>
                                        Street address
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="House number and street name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        Town / City
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        State / Country
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-group">
                                    <label>
                                        Postcode / ZIP
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        required
                                    />
                                </div>

                                <div class="form-footer mb-0">
                                    <div class="form-footer-right">
                                        <button
                                            type="submit"
                                            class="btn btn-dark py-4"
                                        >
                                            Save Address
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End .tab-pane -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import PvTabs from '~/components/features/PvTabs';
import Sticky from 'vue-sticky-directive';

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
