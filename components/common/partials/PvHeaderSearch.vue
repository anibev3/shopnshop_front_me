<template>
    <div
        class="header-icon header-search header-search-inline header-search-category w-lg-max text-right mb-0 d-none d-sm-block"
    >
        <a
            href="javascript:;"
            class="search-toggle"
            role="button"
            @click.stop="searchToggle"
        >
            <i class="icon-search-3"></i>
        </a>

        <form
            action="#"
            method="get"
            @click.stop="showSearchForm"
            @submit.prevent="submitSearchForm"
        >
            <div class="header-search-wrapper">
                <label for="search_term" class="sr-only">Search</label>
                <input
                    type="text"
                    class="form-control"
                    name="search_term"
                    :id="'search_term' + getId"
                    placeholder="Rechercher quelque chose..."
                    required
                    v-model="search_term"
                    @input="searchProducts"
                    style="border-radius: 10px 0px 0px 10px"
                />
                <div class="select-custom">
                    <select
                        :id="'searchSubCategory' + getId"
                        name="searchSubCategory"
                        v-model="searchSubCategory"
                        @change="searchProducts"
                    >
                        <option value>Tout</option>
                        <optgroup
                            v-for="category in categoryList"
                            :label="category.name"
                            :key="category.uuid"
                        >
                            <option
                                v-for="subCategory in category.sub_categories"
                                :value="subCategory.slug"
                                :key="subCategory.uuid"
                                @click="selectCategory(category.slug)"
                            >
                                {{ subCategory.name }}
                            </option>
                        </optgroup>
                    </select>
                </div>
                <button
                    class="btn icon-magnifier p-0"
                    title="search"
                    type="submit"
                    style="border-radius: 0px 10px 10px 0px"
                ></button>

                <div class="live-search-list">
                    <div
                        class="search-suggests"
                        v-if="suggestions.length > 0"
                        @click.stop="resetValue"
                    >
                        <nuxt-link
                            :to="'/product/default/' + product.slug"
                            class="search-suggest"
                            v-for="product in suggestions"
                            :key="product.id"
                        >
                            <div class="search-media">
                                <img
                                    :src="`${baseUrl}${product.small_pictures[0].url}`"
                                    alt="Product"
                                    width="40"
                                    height="40"
                                    class="product-image"
                                />

                                <div
                                    class="search-name"
                                    v-html="emphasizeMatchWord(product.name)"
                                ></div>
                            </div>

                            <div class="search-price">
                                <div
                                    class="product-price mb-0"
                                    v-if="product.minPrice == product.maxPrice"
                                >
                                    ${{ product.minPrice.toFixed(2) }}
                                </div>

                                <template v-else>
                                    <div
                                        class="product-price mb-0"
                                        v-if="product.variants.length == 0"
                                    >
                                        <span class="new-price"
                                            >${{
                                                product.minPrice.toFixed(2)
                                            }}</span
                                        >
                                        <span class="old-price"
                                            >${{
                                                product.maxPrice.toFixed(2)
                                            }}</span
                                        >
                                    </div>
                                    <div class="product-price mb-0" v-else>
                                        ${{ product.minPrice.toFixed(2) }} - ${{
                                            product.maxPrice.toFixed(2)
                                        }}
                                    </div>
                                </template>
                            </div>
                            <!-- <a
								href="javascript:;"
								class="btn-remove icon-cancel"
								@click.prevent="handler($event)"
							></a> -->
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Api, { baseUrl, baseUrl2, currentDemo, apiEndpoints } from '~/api';

export default {
    data: function () {
        return {
            search_term: '',
            suggestions: [],
            timeouts: [],
            baseUrl: baseUrl,
            baseUrl2: baseUrl2,
            apiEndpoints: apiEndpoints,
            currentDemo: currentDemo,
            searchCategory: '',
            searchSubCategory: '',
            categoryList: [],
        };
    },
    mounted: function () {
        this.getCategoryFunction();
        document
            .querySelector('body')
            .addEventListener('click', this.closeSearchForm);
    },
    computed: {
        getId: function () {
            return Math.random() * 100;
        },
    },
    methods: {
        getCategoryFunction() {
            Api.get(`${baseUrl2}${apiEndpoints.getCategories}`)
                .then((response) => {
                    console.log(response);
                    this.categoryList = response?.data.data;
                    console.log(
                        'EXPECTION DE LA BASE URL',
                        response?.data?.data
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        selectCategory: function (slug) {
            this.searchCategory = slug;
        },
        searchProducts: function () {
            if (this.search_term.length > 2) {
                var search_term = this.search_term;
                this.timeouts.map((timeout) => {
                    window.clearTimeout(timeout);
                });
                this.timeouts.push(
                    setTimeout(() => {
                        Api.get(`${baseUrl}/search`, {
                            params: {
                                search_term: search_term,
                                demo: this.currentDemo,
                                category: this.searchCategory,
                                sub_category: this.searchSubCategory,
                            },
                        })
                            .then((response) => {
                                this.suggestions = response.data.reduce(
                                    (acc, cur) => {
                                        let max = 0;
                                        let min = 99999;
                                        min = cur.sale_price
                                            ? cur.sale_price
                                            : 99999;
                                        max = cur.price ? cur.price : 0;
                                        if (cur.variants && !cur.price) {
                                            min = cur.variants[0].price;

                                            cur.variants.forEach((item) => {
                                                let itemPrice = item.sale_price
                                                    ? item.sale_price
                                                    : item.price;
                                                if (min > itemPrice)
                                                    min = itemPrice;
                                                if (max < itemPrice)
                                                    max = itemPrice;
                                            });
                                        }
                                        if (min === 99999) min = max;
                                        else if (max === 0) max = min;
                                        return [
                                            ...acc,
                                            {
                                                ...cur,
                                                minPrice: min,
                                                maxPrice: max,
                                            },
                                        ];
                                    },
                                    []
                                );
                                if (
                                    document.querySelector('.search-suggests')
                                ) {
                                    document
                                        .querySelector('.search-suggests')
                                        .setAttribute('style', '');
                                }
                            })
                            .catch((error) => {});
                    }, 500)
                );
            } else {
                this.timeouts.map((timeout) => {
                    window.clearTimeout(timeout);
                });
                this.suggestions = [];
            }
        },
        emphasizeMatchWord: function (name) {
            var regExp = new RegExp(this.search_term, 'i');
            return name.replace(
                regExp,
                (match) => '<strong>' + match + '</strong>'
            );
        },
        resetValue: function () {
            this.search_term = '';
            this.suggestions = [];
            this.closeSearchForm();
        },
        searchToggle: function (e) {
            e.currentTarget.closest('.header-search').classList.toggle('show');
            e.currentTarget.parentNode.querySelector('.form-control').focus();

            if (document.querySelector('.search-suggests')) {
                document
                    .querySelector('.search-suggests')
                    .setAttribute('style', '');
            }

            e.stopPropagation();
        },
        showSearchForm: function (e) {
            e.currentTarget.closest('.header-search').classList.add('show');
            if (document.querySelector('.search-suggests')) {
                document
                    .querySelector('.search-suggests')
                    .setAttribute('style', '');
            }
        },
        closeSearchForm: function (e) {
            let items = document.querySelectorAll('.header .header-search');
            items.forEach((item, index) => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                }
            });
        },
        submitSearchForm: function (e) {
            // console.log('LA VALEUR DE e: ', {
            //     search_term: this.search_term,
            //     category: this.searchSubCategory,
            // });
            // return;
            this.closeSearchForm();
            this.$router.push({
                path: '/shop',
                query: {
                    search_term: this.search_term,
                    category: this.searchCategory,
                    sub_category: this.searchSubCategory,
                },
            });
            this.search_term = '';
            this.suggestions = [];
        },
        handler(e) {
            e.target.parentNode.setAttribute('style', 'display: none');
        },
    },
};
</script>
