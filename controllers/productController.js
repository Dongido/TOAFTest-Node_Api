const url = require('url');
const querystring = require('querystring');
const Product = require('../models/productModel')


// @desc    Gets products with limit
// @route   http://localhost:5000/api/prod?page=1&limit=5
async function getFilteredProducts(req, res) {
    try {
        const products = await Product.getAll()

        const query = url.parse(req.url, true).query;
        const page = query.page
        const limit = query.limit

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const nProducts = products.slice(startIndex, endIndex)

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(nProducts))
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getFilteredProducts
}