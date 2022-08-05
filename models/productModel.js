const products = require('../data/products')

function getAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

module.exports = {
    getAll
}