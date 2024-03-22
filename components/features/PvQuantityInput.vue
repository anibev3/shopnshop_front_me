<template>
    <div class="product-single-qty">
        <div
            class="input-group bootstrap-touchspin bootstrap-touchspin-injected"
        >
            <span class="input-group-btn input-group-prepend">
                <button
                    class="btn btn-outline bootstrap-touchspin-down"
                    type="button"
                    @click="minusQty"
                >
                    <i class="fas fa-minus"></i>
                </button>
            </span>
            <input
                class="horizontal-quantity form-control"
                type="text"
                :value="currentQty"
                :max="stock"
                @change="changeQty($event)"
            />
            <span class="input-group-btn input-group-append">
                <button
                    class="btn btn-outline bootstrap-touchspin-up"
                    type="button"
                    @click="plusQty"
                >
                    <i class="fas fa-plus"></i>
                </button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapGettres, mapActions } from 'vuex';

export default {
    props: {
        qty: Number,
        product: Object,
    },
    data: function () {
        return {
            currentQty: this.qty,
            stock: 0,
        };
    },
    watch: {
        qty: function () {
            this.currentQty = this.qty;
        },
    },
    mounted() {
        if (this.product.product) {
            this.stock = this.product.product.stock;
        } else {
            this.stock = this.product.variant.stock;
        }
    },
    methods: {
        ...mapActions('cart', ['addOneOnCart', 'lessFromCart']),
        changeQty: function (e) {
            if (e.srcElement.valueAsNumber > parseInt(this.stock)) {
                this.currentQty = this.stock;
            }
            if (e.srcElement.valueAsNumber < 1) {
                this.currentQty = 1;
            }

            this.$emit('changeQty', this.currentQty, this.product);
        },
        plusQty: function () {
            console.log('PLUS', this.stock);
            if (this.currentQty < this.stock) {
                this.currentQty++;

                return this.addOneOnCart(this.product);
            }
            this.$emit('changeQty', this.currentQty, this.product);
        },
        minusQty: function () {
            console.log('MINUS');

            if (this.currentQty > 1) {
                this.currentQty--;
                this.lessFromCart(this.product);
            }
            this.$emit('changeQty', this.currentQty, this.product);
        },
    },
};
</script>
