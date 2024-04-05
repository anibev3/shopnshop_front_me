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

export function totalpriceFormatService(price, qty) {
    console.log('TOTAL', price, qty);
    const curency = 'XOF';
    const price_ = parseInt(price);
    let totalAmount = price_ * parseInt(qty);
    totalAmount = totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${totalAmount} ${curency}`;
}

// CartService.js

export function extractCartData(cartData) {
    const extractedData = [];

    cartData.forEach((item) => {
        let itemData = {};

        if (item.product) {
            itemData.type = 'Product';
            itemData.name = item.product.name;
            itemData.price = item.product.price;
            itemData.thumbnail = item.product.thumbnail;
            itemData.slug = item.product.slug;
            itemData.combination = null;
            // Ajoutez d'autres propriétés du produit ici
        } else if (item.variant) {
            itemData.type = 'Variant';
            itemData.name = item.variant.title;
            itemData.price = item.variant.price;
            itemData.slug = item.variant.slug;
            if (item.variant.pictures && item.variant.pictures.length > 0) {
                itemData.thumbnail = item.variant.pictures[0];
            }
            itemData.combination = JSON.parse(item.variant.combinaisons);
            // Ajoutez d'autres propriétés de la variante ici
        }

        // Ajoutez d'autres informations que vous souhaitez extraire ici
        itemData.quantity = item.quantity;
        itemData.product = item;

        extractedData.push(itemData);
    });

    return extractedData;
}
