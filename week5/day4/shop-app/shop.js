const products = require('./products.js');

function findProduct(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        console.log('Product found:', product);
    } else {
        console.log('Product not found:', productName);
    }
}

// Examples
findProduct('Laptop');
findProduct('Coffee');
findProduct('Shoes');