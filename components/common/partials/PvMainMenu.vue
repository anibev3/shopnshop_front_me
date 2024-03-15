<template>
    <nav class="main-nav w-100">
        <ul class="menu main-menu sf-arrows w-100">
            <li class="menu-item" :class="{ show: isDepart }">
                <a
                    href="javascript:;"
                    style="background-color: black"
                    class="d-inline-flex align-items-center sf-with-ul text-white"
                    @click.prevent="mmenuAddHandler"
                >
                    <i class="custom-icon-toggle-menu d-inline-table"></i
                    ><span>TOUTE CATEGORIES</span></a
                >
                <div
                    class="menu-depart-overlay"
                    @click.stop="mmenuRemoveHandler"
                ></div>
                <div class="menu-depart" :class="{ opened: isDepart }">
                    <ul
                        class="menu menu-vertical sf-arrows d-block no-superfish"
                    >
                        <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-category-fashion"></i>Mode
                                Femme</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-one"
                            >
                                <div class="row">
                                    <div class="col-lg-4 mb-1 pb-2">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >VETEMENTS</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tous les
                                                    vêtements</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Activewear</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop">
                                                    Maillots de bain & vêtements
                                                    de plage</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Manteaux</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Denim</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Robes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Vestes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Maille</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Lingerie & vêtements de
                                                    nuit
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop">
                                                    Tenues de ski</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Hauts
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pantalons
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >CHAUSSURES</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Toutes les
                                                    chaussures</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Ballerines</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Bottes &
                                                    bottines</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Espadrilles</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tongs &
                                                    claquettes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Mocassins</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Mules</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Escarpins</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sandales</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Baskets</nuxt-link
                                                >
                                            </li>
                                        </ul>

                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >ACCESSORIES</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop">
                                                    Tous les
                                                    accessoires</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Ceintures &
                                                    Gants</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Lunettes &
                                                    montures</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- <div class="col-lg-5 p-0 d-lg-block d-none">
                                        <div class="menu-banner menu-banner-2">
                                            <figure>
                                                <img
                                                    src="~/static/images/home/menu-banner-1.jpg"
                                                    alt="Menu banner"
                                                    class="product-promo w-100"
                                                />
                                            </figure>
                                            <i>OFF</i>
                                            <div class="banner-content">
                                                <h4>
                                                    <span class="text-dark"
                                                        >UP TO</span
                                                    ><br />
                                                    <b class="text-dark">50%</b>
                                                </h4>
                                            </div>
                                        </div>
                                    </div> -->
                                    <div class="col-lg-4">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >SACS</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tous les sacs</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs à dos</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs de plage</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs seau</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pochettes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Mini sacs</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs à
                                                    bandoulière</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs porté
                                                    épaule</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs cabas</nuxt-link
                                                >
                                            </li>
                                        </ul>

                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >Joaillerie</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Toute la
                                                    joaillerie</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Bracelets fins</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Bagues fines</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Montres de
                                                    prestige</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12 d-lg-block d-none">
                                        <div class="partners-container row">
                                            <div class="col-xl-5col">
                                                <div class="partner">
                                                    <img
                                                        src="~/static/images/brands/small/brand1.png"
                                                        alt="logo image"
                                                        width="140"
                                                        height="60"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xl-5col">
                                                <div class="partner">
                                                    <img
                                                        src="~/static/images/brands/small/brand2.png"
                                                        alt="logo image"
                                                        width="140"
                                                        height="60"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xl-5col">
                                                <div class="partner">
                                                    <img
                                                        src="~/static/images/brands/small/brand3.png"
                                                        alt="logo image"
                                                        width="140"
                                                        height="60"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xl-5col">
                                                <div class="partner">
                                                    <img
                                                        src="~/static/images/brands/small/brand4.png"
                                                        alt="logo image"
                                                        width="140"
                                                        height="60"
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-xl-5col">
                                                <div class="partner">
                                                    <img
                                                        src="~/static/images/brands/small/brand5.png"
                                                        alt="logo image"
                                                        width="140"
                                                        height="60"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-boy-broad-smile"></i>Mode
                                Homme</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-two"
                            >
                                <div class="row">
                                    <div class="col-lg-3">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >VÊTEMENTS</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tous les
                                                    vêtements</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Activewear</nuxt-link
                                                >
                                            </li>

                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Manteaux</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Jeans</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Polos</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pre-owned</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Chemises
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop">
                                                    Shorts</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Costumes
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pantalons
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-2">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >CHAUSSURES</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Bottines</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Richelieus</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Derbies</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Espadrilles</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tongs &
                                                    claquettes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Mocassins</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Chaussures à
                                                    boucles</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Chaussures
                                                    Oxford</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sandales</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Baskets</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-0">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >SACS</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tous les sacs</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs à dos</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs banane</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pochettes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs ordinateur</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs fourre-tout</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs à
                                                    bandoulière</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs porté
                                                    épaule</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sacs cabas</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-0">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >ACCESSOIRES</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Tous les
                                                    accessoires</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Ceintures</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gants & Écharpes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Chapeaux, bonnets &
                                                    casquettes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Lunettes de
                                                    soleil</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Cravates & nœuds
                                                    papillon</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Portefeuilles &
                                                    porte-cartes</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Accessoires
                                                    pre-owned</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Accessoires
                                                    responsables</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="banner-container w-100 pl-3 pr-3 d-lg-block d-none"
                                    >
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div
                                                    class="banner banner7 banner-md-vw text-transform-none"
                                                >
                                                    <figure>
                                                        <img
                                                            src="~/static/images/home/menu-banner-2.jpg"
                                                            alt="banner"
                                                        />
                                                    </figure>

                                                    <div
                                                        class="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0"
                                                    >
                                                        <div
                                                            class="content-left"
                                                        >
                                                            <h4
                                                                class="banner-layer-circle-item mb-0 ls-0"
                                                            >
                                                                40<sup
                                                                    >%<small
                                                                        class="ls-0"
                                                                        >OFF</small
                                                                    ></sup
                                                                >
                                                            </h4>
                                                        </div>
                                                        <div
                                                            class="content-right text-right"
                                                        >
                                                            <h5 class="ls-0">
                                                                <del
                                                                    class="d-block m-b-2 text-secondary"
                                                                    >$450</del
                                                                >$270
                                                            </h5>
                                                            <h4
                                                                class="m-b-1 ls-n-25"
                                                            >
                                                                Watches
                                                            </h4>
                                                            <h3 class="mb-0">
                                                                HURRY UP!
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div
                                                    class="banner banner8 banner-md-vw"
                                                >
                                                    <figure>
                                                        <img
                                                            src="~/static/images/home/menu-banner-3.jpg"
                                                            alt="banner"
                                                        />
                                                    </figure>

                                                    <div
                                                        class="banner-layer banner-layer-middle d-flex align-items-end flex-column"
                                                    >
                                                        <h3
                                                            class="text-dark text-right"
                                                        >
                                                            Electronic<br />Deals
                                                        </h3>

                                                        <div
                                                            class="coupon-sale-content"
                                                        >
                                                            <h4
                                                                class="menu-coupon-sale-text bg-dark text-white d-block font1 text-transform-none"
                                                            >
                                                                Exclusive COUPON
                                                            </h4>
                                                            <h5
                                                                class="custom-coupon-sale-text font1 text-dark ls-n-10 p-0"
                                                            >
                                                                <b
                                                                    class="text-dark"
                                                                    >$100</b
                                                                >
                                                                OFF
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-smiling-baby"></i>Mode Enfant</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-four megamenu-product"
                            >
                                <div class="row">
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
                                                Bébé (0-36 mois)
                                            </a>

                                            <vue-slide-toggle
                                                :open="toggleState[0]"
                                            >
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div
                                                            class="col-lg-4 mb-0 pb-2"
                                                        >
                                                            <a
                                                                href="javascript:;"
                                                                class="nolink pl-0"
                                                                >PETITE FILLE</a
                                                            >
                                                            <ul
                                                                class="submenu pb-0"
                                                            >
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Accessoires</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Chaussures</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Tous
                                                                        les
                                                                        vêtements</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Vêtements
                                                                        pour
                                                                        bébé</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Manteaux</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Robes</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Vestes</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Shorts</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Jupes</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Maillots
                                                                        de
                                                                        bain</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Pantalons
                                                                        de
                                                                        jogging</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Pantalons</nuxt-link
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <a
                                                                href="javascript:;"
                                                                class="nolink pl-0 pt-2"
                                                                >PETIT GARÇON</a
                                                            >
                                                            <ul
                                                                class="submenu pb-0"
                                                            >
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Accessoires</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Chaussures</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Tous
                                                                        les
                                                                        vêtements</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Vêtements
                                                                        pour
                                                                        bébé</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Manteaux</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Vestes</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Shorts</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Maillots
                                                                        de
                                                                        bain</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Pantalons
                                                                        de
                                                                        jogging</nuxt-link
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <nuxt-link
                                                                        to="/shop"
                                                                        >Pantalons</nuxt-link
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            class="col-lg-5 d-lg-block d-none menu-product"
                                                        >
                                                            <pv-carousel
                                                                class="swiper-carousel swiper-theme show-nav-hover nav-outer dots-small"
                                                                :options="
                                                                    homeSidebarSlider
                                                                "
                                                                v-if="
                                                                    products &&
                                                                    products.length >
                                                                        0
                                                                "
                                                            >
                                                                <pv-product-four
                                                                    :product="
                                                                        products[7]
                                                                    "
                                                                    class="swiper-slide"
                                                                    :isDeal="
                                                                        true
                                                                    "
                                                                ></pv-product-four>
                                                                <pv-product-four
                                                                    :product="
                                                                        products[12]
                                                                    "
                                                                    class="swiper-slide"
                                                                ></pv-product-four>
                                                            </pv-carousel>
                                                        </div>
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
                                                Enfant (2-12 ans)
                                            </a>

                                            <vue-slide-toggle
                                                :open="toggleState[1]"
                                            >
                                                <div class="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit.
                                                        Curabitur eget leo at
                                                        velit imperdiet varius.
                                                        In eu ipsum vitae velit
                                                        congue iaculis vitae at
                                                        risus. Nullam tortor
                                                        nunc, bibendum vitae
                                                        semper a, volutpat eget
                                                        massa. Lorem ipsum dolor
                                                        sit amet, consectetur
                                                        adipiscing elit. Integer
                                                        fringilla, orci sit amet
                                                        posuere auctor, orci
                                                        eros pellentesque odio,
                                                        nec pellentesque erat
                                                        ligula nec massa. Aenean
                                                        consequat lorem ut felis
                                                        ullamcorper posuere
                                                        gravida tellus faucibus.
                                                        Maecenas dolor elit,
                                                        pulvinar eu vehicula eu,
                                                        consequat et lacus. Duis
                                                        et purus ipsum. In
                                                        auctor mattis ipsum id
                                                        molestie. Donec risus
                                                        nulla, fringilla a
                                                        rhoncus vitae, semper a
                                                        massa. Vivamus
                                                        ullamcorper, enim sit
                                                        amet consequat laoreet,
                                                        tortor tortor dictum
                                                        urna, ut egestas urna
                                                        ipsum nec libero. Nulla
                                                        justo leo, molestie vel
                                                        tempor nec, egestas at
                                                        massa. Aenean pulvinar,
                                                        felis porttitor iaculis
                                                        pulvinar, odio orci
                                                        sodales odio, ac
                                                        pulvinar felis quam sit.
                                                    </p>
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
                                                >Adolescent (13-16 ans)
                                            </a>

                                            <vue-slide-toggle
                                                :open="toggleState[2]"
                                            >
                                                <div class="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit.
                                                        Curabitur eget leo at
                                                        velit imperdiet varius.
                                                        In eu ipsum vitae velit
                                                        congue iaculis vitae at
                                                        risus. Nullam tortor
                                                        nunc, bibendum vitae
                                                        semper a, volutpat eget
                                                        massa.
                                                    </p>
                                                </div>
                                            </vue-slide-toggle>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-category-gifts"></i
                                >Nouveautés</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-three"
                            >
                                <div class="row">
                                    <div class="col-lg-3">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-flex flex-column align-items-start"
                                            ><i class="icon-boy-broad-smile"></i
                                            >FOR HIM</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for
                                                    Boyfriend</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for
                                                    Husband</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Dad</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-2">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-flex flex-column align-items-start"
                                            ><i class="icon-smiling-girl"></i
                                            >FOR HER</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for
                                                    Girlfriend</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Wife</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Mom</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-0">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-flex flex-column align-items-start"
                                            ><i class="icon-smiling-baby"></i
                                            >FOR KIDS</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Boys</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Grils</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Gifts for Tween
                                                    Boys</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-lg-3 pl-xl-0">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-flex flex-column align-items-start"
                                            ><i class="icon-gift-2"></i
                                            >BIRTHDAY</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Birthday for Him</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Birthday for Her</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Boyfriend Gifts</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li> -->
                        <!-- <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-boy-broad-smile"></i>Home &
                                Garden</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-four"
                            >
                                <div class="row">
                                    <div class="col-lg-4 mb-1 pb-2">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-lg-none d-block"
                                            >VARIATION 1</a
                                        >
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >FURNITURE</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BEAUTY & PERSONAL
                                                    CARE</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >SOF & COUCHES</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >ARMCHARIRS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BED FRAMES</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BEDSIDE TABLES</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BRESSING TABLES</nuxt-link
                                                >
                                            </li>
                                        </ul>

                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >HOME ACCESSORIES</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >DECORATIVE
                                                    ACCESSORIES</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >CANDLES &
                                                    HOLDERS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >HOME FRAGRANCE</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >MIRRORS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >CLOCKS</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0 d-lg-none d-block"
                                            >VARIATION 2</a
                                        >
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >LIGHTING</a
                                        >
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >LIGHT BULBS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >LAMPS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >CEILING LIGHTS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >WALL LIGHTS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BATHROOM
                                                    LIGHTING</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >OUTDOOR LIGHTING</nuxt-link
                                                >
                                            </li>
                                        </ul>

                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >GARDEN & OUTDOORS</a
                                        >
                                        <ul class="submenu pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >GARDEN FURNITURE</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >LAWN MOWERS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >PRESSURE WASHERS</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >ALL ARDEN TOOLS &
                                                    EQUIPMENT</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >BARBECURE & OUTDOOR
                                                    DINING</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 d-lg-block d-none">
                                        <div class="product-widgets-container">
                                            <pv-small-product
                                                :product="product"
                                                v-for="(
                                                    product, index
                                                ) in products.slice(0, 5)"
                                                :key="
                                                    'megamenu-product' + index
                                                "
                                                :is-lazy="false"
                                            ></pv-small-product>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:;" class="sf-with-ul"
                                ><i class="icon-category-music"></i>Gaming</a
                            >

                            <div
                                class="megamenu megamenu-fixed-width megamenu-five text-transform-none"
                                style="
                                    background-image: url(./images/home/menu-banner-4.jpg);
                                "
                            >
                                <div class="row">
                                    <div class="col-lg-4 pt-0">
                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >INSTRUMENTS</a
                                        >
                                        <ul class="submenu bg-transparent">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Beverages</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Guitar</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Drums Sets</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Percussions</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Pedals & Effects</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Sound Cards</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Studio
                                                    Equipments</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Piano &
                                                    Keyboards</nuxt-link
                                                >
                                            </li>
                                        </ul>

                                        <a
                                            href="javascript:;"
                                            class="nolink pl-0"
                                            >EXTRA</a
                                        >
                                        <ul class="submenu bg-transparent pb-0">
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Alcohol</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Strings</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Recorders</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Amplifiers</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/shop"
                                                    >Accessories</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        class="col-lg-8 pt-0 d-lg-block d-none"
                                    >
                                        <div
                                            class="banner banner9 mb-2 h-100 d-flex align-items-center"
                                        >
                                            <div
                                                class="banner-layer text-right pt-0"
                                            >
                                                <h6 class="text-transform-none">
                                                    CHECK NEW ARRIVALS
                                                </h6>
                                                <h3 class="text-white">
                                                    PROFESSIONAL
                                                </h3>
                                                <h2
                                                    class="text-transform-none text-white"
                                                >
                                                    HEADPHONES
                                                </h2>
                                                <nuxt-link
                                                    to="/shop"
                                                    class="btn btn-dark"
                                                    >VIEW ALL NOW</nuxt-link
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> -->
                    </ul>
                </div>
            </li>

            <li>
                <nuxt-link to="/">Accueil</nuxt-link>
            </li>

            <!-- <li>
                <nuxt-link to="/shop"> Articles </nuxt-link>
            </li> -->
            <li>
                <nuxt-link to="/shop"> MODE FEMME </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/shop"> MODE HOMME </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/shop"> MODE ENFANT </nuxt-link>
            </li>

            <li>
                <a
                    href="javascript:;"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: isPageItemActived }"
                    >Pages
                </a>

                <ul>
                    <li v-for="item in mainMenu.other" :key="item.title">
                        <nuxt-link
                            :to="item.url"
                            :class="{ 'sub-menu-link': item.subPages }"
                            >{{ item.title }}</nuxt-link
                        >

                        <ul v-if="item.subPages">
                            <li
                                v-for="subItem in item.subPages"
                                :key="subItem.title"
                            >
                                <nuxt-link :to="subItem.url">{{
                                    subItem.title
                                }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <!-- <li>
                <a
                    href="javascript:;"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: isPageItemActived }"
                    >Plus</a
                >

                <ul>
                    <li v-for="item in mainMenu.plus" :key="item.title">
                        <nuxt-link
                            :to="item.url"
                            :class="{ 'sub-menu-link': item.subPages }"
                            >{{ item.title }}</nuxt-link
                        >

                        <ul v-if="item.subPages">
                            <li
                                v-for="subItem in item.subPages"
                                :key="subItem.title"
                            >
                                <nuxt-link :to="subItem.url">{{
                                    subItem.title
                                }}</nuxt-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li> -->

            <li class="float-right phone">
                <a href="javascript:;" class="d-flex align-items-center"
                    ><i class="icon-phone-1"></i>+225 27 22 29 94 64</a
                >
            </li>
            <li class="float-right">
                <a
                    href="javascript:;"
                    class="d-inline-flex align-items-center sf-with-ul text-white"
                    @click="openConsultationModal"
                    style="
                        background-color: rgb(132, 18, 132);
                        border-radius: 6px;
                    "
                >
                    <!-- <i class="custom-icon-toggle-menu d-inline-table"></i
                    > -->
                    <span>PLANIFIER UNE CONSULTATION</span></a
                >
            </li>
            <!-- <li class="float-right"><a href="javascript:;">FLASH DEALS</a></li> -->
            <!-- <li class="float-right">
                <nuxt-link
                    to="/product/default/beats-solo-hd-drenched-one"
                    class="sub-menu-link sf-with-ul"
                    :class="{ active: $route.path.indexOf('/product') > -1 }"
                    >VENTE FLASH</nuxt-link
                >

                <div class="megamenu megamenu-fixed-width megamenu-3cols">
                    <div class="row">
                        <div class="col-lg-12 p-0">
                            <div
                                class="menu-banner menu-banner-2 position-relative"
                            >
                                <figure>
                                    <img
                                        src="~/static/images/menu-banner-1.jpg"
                                        alt="Menu banner"
                                        class="product-promo"
                                        width="380"
                                        height="790"
                                    />
                                </figure>
                                <i>OFF</i>
                                <div class="banner-content">
                                    <h4>
                                        <span class>UP TO</span>
                                        <br />
                                        <b class>50%</b>
                                    </h4>
                                </div>
                                <nuxt-link
                                    to="/shop"
                                    class="btn btn-sm btn-dark"
                                    >SHOP NOW</nuxt-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </li> -->
        </ul>
    </nav>
</template>
<script>
import Vue from 'vue';
import { VueSlideToggle } from 'vue-slide-toggle';
import { mainMenu } from '~/utils/data/menu';
import Api, { baseUrl } from '~/api';
import PvSmallProduct from '~/components/features/product/PvSmallProduct';
import PvCarousel from '~/components/features/PvCarousel';
import PvProductFour from '~/components/features/product/PvProductFour';
import { homeSidebarSlider } from '~/utils/data/carousel';

export default {
    components: {
        PvCarousel,
        PvSmallProduct,
        PvProductFour,
        VueSlideToggle,
    },
    data: function () {
        return {
            mainMenu,
            isDepart: false,
            products: [],
            homeSidebarSlider: homeSidebarSlider,
            toggleState: [true, false, false, false, false],
        };
    },
    computed: {
        isPageItemActived: function () {
            let exItems = ['blog', 'about-us', 'contact-us'];

            if (
                this.$route.path.includes('/pages') &&
                exItems.findIndex((item) => this.$route.path.includes(item)) ===
                    -1
            ) {
                return true;
            }

            return false;
        },
    },
    watch: {
        $route: function () {
            if (
                document
                    .querySelector('body')
                    .classList.contains('mmenu-depart-active')
            )
                document
                    .querySelector('body')
                    .classList.remove('mmenu-depart-active');
            this.isDepart = false;
        },
    },
    mounted: function () {
        Api.get(`${baseUrl}/demo36`)
            .then((response) => {
                this.products = response.data.products;
                this.posts = response.data.posts;
                this.featuredProducts = getProductsByAttri(
                    response.data.products
                );
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
    },
    methods: {
        changeToggle: function (index) {
            let tmp = this.toggleState[index];
            this.toggleState.fill(false);
            this.toggleState[index] = !tmp;
            this.toggleState = [...this.toggleState];
        },
        mmenuAddHandler: function (e) {
            this.isDepart = !this.isDepart;
            if (
                document
                    .querySelector('body')
                    .classList.contains('mmenu-depart-active')
            )
                document
                    .querySelector('body')
                    .classList.remove('mmenu-depart-active');
            else
                document
                    .querySelector('body')
                    .classList.add('mmenu-depart-active');
        },
        mmenuRemoveHandler: function (e) {
            this.isDepart = false;
            document
                .querySelector('body')
                .classList.remove('mmenu-depart-active');
        },
        openConsultationModal: function () {
            this.$modal.show(
                () => import('~/components/features/modal/PvConsultationModal'),
                {},
                { width: '600', height: 'auto', adaptive: true }
            );
        },
    },
};
</script>
