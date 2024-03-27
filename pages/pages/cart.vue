<template>
    <div class="container">
        <ul
            class="checkout-progress-bar d-flex justify-content-center flex-wrap block"
        >
            <li class="active">
                <a href="javascript:;">Panier</a>
            </li>
            <li>
                <nuxt-link to="/pages/checkout">Vérification</nuxt-link>
            </li>
            <li class="disabled">
                <a href="javascript:;">Paiement</a>
            </li>
        </ul>

        <div class="row" v-if="cartList.length > 0" key="noEmpty">
            <div class="col-lg-8">
                <div class="cart-table-container">
                    <table class="table table-cart">
                        <thead>
                            <tr>
                                <th class="thumbnail-col"></th>
                                <th class="product-col">Produit</th>
                                <th class="price-col">Prix</th>
                                <th class="qty-col">Quantité</th>
                                <th class="text-right">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                class="product-row"
                                v-for="(product, index) in cartItems"
                                :key="'cart-product-' + index"
                            >
                                <td>
                                    <figure class="product-image-container">
                                        <nuxt-link
                                            :to="
                                                '/product/default/' +
                                                (product.product
                                                    ? product.product.slug
                                                    : product.variant
                                                    ? product.variant.slug
                                                    : 0)
                                            "
                                            class="product-image"
                                        >
                                            <img
                                                :src="`${
                                                    product.product
                                                        ? product.product
                                                              .pictures[0]
                                                        : product.variant
                                                        ? product.variant
                                                              .pictures[0]
                                                        : 0
                                                }`"
                                                width="
                                                    150
                                                "
                                                height="
                                                    150
                                                "
                                                alt="product"
                                            />
                                        </nuxt-link>

                                        <a
                                            href="javascript:;"
                                            class="btn-remove icon-cancel"
                                            title="Remove Product"
                                            @click="
                                                removeFromCart({
                                                    product: product,
                                                })
                                            "
                                        ></a>
                                    </figure>
                                </td>

                                <td class="product-col">
                                    <h5 class="product-title">
                                        <nuxt-link
                                            :to="
                                                '/product/default/' +
                                                (product.product
                                                    ? product.product.slug
                                                    : product.variant
                                                    ? product.variant.slug
                                                    : '0')
                                            "
                                        >
                                            {{
                                                product.product
                                                    ? product.product.name
                                                    : product.variant
                                                    ? product.variant.title
                                                    : 0
                                            }}
                                        </nuxt-link>
                                    </h5>
                                    <h6>
                                        {{
                                            product.product
                                                ? ''
                                                : product.variant
                                                ? product.variant.combinaisons
                                                : 0
                                        }}
                                    </h6>
                                </td>

                                <td>
                                    {{
                                        numberWithSpaces(
                                            product.product
                                                ? product.product.price
                                                : product.variant
                                                ? product.variant.price
                                                : 0
                                        )
                                    }}
                                </td>

                                <td>
                                    <pv-quantity-input
                                        :qty="product.quantity"
                                        :product="product"
                                        @changeQty="changeQty"
                                    ></pv-quantity-input>
                                </td>

                                <td class="text-right">
                                    <span class="subtotal-price">{{
                                        numbertotalWithSpaces(
                                            product.product
                                                ? product.product.price
                                                : product.variant
                                                ? product.variant.price
                                                : 0,
                                            product.quantity
                                        )
                                    }}</span>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colspan="5" class="clearfix">
                                    <div class="float-left">
                                        <div class="cart-discount">
                                            <form action="#">
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control form-control-sm"
                                                        placeholder="Entrez votre code coupon"
                                                        required
                                                    />
                                                    <div
                                                        class="input-group-append"
                                                    >
                                                        <button
                                                            class="btn btn-sm"
                                                            type="submit"
                                                        >
                                                            Appliquer coupon
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- <div class="float-right">
                                        <button
                                            type="submit"
                                            class="btn btn-shop btn-update-cart"
                                            @click="
                                                updateCart({
                                                    cartItems: cartItems,
                                                })
                                            "
                                        >
                                            Mettre à jour le panier
                                        </button>
                                    </div> -->
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="cart-summary">
                    <h3>TOTAL DU PANIER</h3>

                    <table class="table table-totals">
                        <tbody>
                            <!-- <tr>
                                <td>Total</td>
                                <td>
                                    {{
                                        numberWithSpaces(
                                            cartAmount.total_amount
                                        )
                                    }}
                                </td>
                            </tr> -->

                            <tr>
                                <td colspan="2" class="text-left">
                                    <!-- <h4>Shipping</h4> -->

                                    <!-- <div
                                        class="form-group form-group-custom-control"
                                    >
                                        <div
                                            class="custom-control custom-radio"
                                        >
                                            <input
                                                type="radio"
                                                class="custom-control-input"
                                                name="radio"
                                                checked
                                            />
                                            <label class="custom-control-label"
                                                >Local pickup</label
                                            >
                                        </div>
                                    </div> -->

                                    <!-- <div
                                        class="form-group form-group-custom-control mb-0"
                                    >
                                        <div
                                            class="custom-control custom-radio mb-0"
                                        >
                                            <input
                                                type="radio"
                                                name="radio"
                                                class="custom-control-input"
                                            />
                                            <label class="custom-control-label"
                                                >Flat rate</label
                                            >
                                        </div>
                                    </div> -->

                                    <!-- <form action="#">
                                        <div class="form-group form-group-sm">
                                            <label>
                                                Shipping to
                                                <strong>NY.</strong>
                                            </label>
                                            <div class="select-custom">
                                                <select
                                                    class="form-control form-control-sm"
                                                >
                                                    <option value="USA">
                                                        United States (US)
                                                    </option>
                                                    <option value="Turkey">
                                                        Turkey
                                                    </option>
                                                    <option value="China">
                                                        China
                                                    </option>
                                                    <option value="Germany">
                                                        Germany
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group form-group-sm">
                                            <div class="select-custom">
                                                <select
                                                    class="form-control form-control-sm"
                                                >
                                                    <option value="NY">
                                                        New York
                                                    </option>
                                                    <option value="CA">
                                                        California
                                                    </option>
                                                    <option value="TX">
                                                        Texas
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                                
                                        <div class="form-group form-group-sm">
                                            <input
                                                type="text"
                                                class="form-control form-control-sm"
                                                placeholder="Town / City"
                                            />
                                        </div>

                                        <div class="form-group form-group-sm">
                                            <input
                                                type="text"
                                                class="form-control form-control-sm"
                                                placeholder="ZIP"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            class="btn btn-shop btn-update-total"
                                        >
                                            Update Totals
                                        </button>
                                    </form> -->
                                </td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total Hors Taxe</td>
                                <td style="font-size: 17px">
                                    {{ numberWithSpaces(cartAmount.ht_amount) }}
                                </td>
                            </tr>
                            <tr>
                                <td>Montant Taxe 18%</td>
                                <td style="font-size: 17px">
                                    {{
                                        numberWithSpaces(cartAmount.tax_amount)
                                    }}
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td style="font-size: 20px">
                                    {{
                                        numberWithSpaces(
                                            cartAmount.total_amount
                                        )
                                    }}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    <div class="checkout-methods">
                        <nuxt-link
                            to="/pages/checkout"
                            class="btn btn-block btn-dark"
                        >
                            PASSER AU VERIFICATION
                            <i class="fa fa-arrow-right"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

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
                            <i class="icon-bag-2 cart-empty"></i>
                        </td>
                    </tr>
                    <tr class="border-0 py-0">
                        <td
                            colspan="6"
                            class="px-3 py-2 text-center cart-empty"
                        >
                            Aucun article dans le panier
                        </td>
                    </tr>
                    <tr class="border-0 py-0">
                        <td colspan="6" class="px-3 text-center">
                            <nuxt-link to="/shop" class="btn btn-go-shop"
                                >RETOUR À LA BOUTIQUE</nuxt-link
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mb-6"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api/index';
import PvQuantityInput from '~/components/features/PvQuantityInput';
import {
    priceFormatService,
    intervalPriceFormatService,
    totalpriceFormatService,
} from '~/utils/service';

export default {
    components: {
        PvQuantityInput,
    },
    data: function () {
        return {
            baseUrl: baseUrl,
            cartItems: [],
        };
    },
    computed: {
        ...mapGetters('cart', ['cartList', 'totalPrice', 'cartAmount']),
    },
    watch: {
        cartList: function () {
            this.cartItems = this.cartList;
        },
    },
    created: function () {
        this.cartItems = [...this.cartList];
    },
    methods: {
        ...mapActions('cart', ['updateCart', 'removeFromCart']),
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
    },
};
</script>
