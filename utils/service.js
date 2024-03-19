/**
 * function to get product for certain attribute
 */
export function getProductsByAttri(products, attri = 'is_hot') {
    return products.filter((item) => item[attri] === true);
}

export function filterProductsByCollection(products, collectionSlug) {
    console.log('Travail en cours...', products);
    if (!products || !Array.isArray(products) || !collectionSlug) {
        return [];
    }
    console.log('Travail en cours 2...');

    // Filtre les produits par collection
    return products.filter((product) => {
        console.log('Travail en cours 3...');

        return product.product_collections.some(
            (collection) => collection.slug === collectionSlug
        );
    });
}

/**
 * function to get top selling products
 */
export function getTopSellingProducts(products) {
    return products.sort((product1, product2) => {
        return product2.sales < product1.sales ? -1 : 1;
    });
}

/**
 * function to get top rated products
 */
export function getTopRatedProducts(products) {
    return products.sort((product1, product2) => {
        return product2.ratings < product1.ratings ? -1 : 1;
    });
}

export function priceFormatService(price) {
    const curency = 'XOF';
    const price_ = parseInt(price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${price_} ${curency}`;
}

export function intervalPriceFormatService(intervalPrice) {
    const curency = 'XOF';
    const min = parseInt(intervalPrice.min)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const max = parseInt(intervalPrice.max)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // return `${price_} ${curency}`;
    return `${min} - ${max} ${curency}`;
}
