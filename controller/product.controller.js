const Product = require("../models/product.model");

exports.test = function(req, res) {
    res.send("Testing!");
};

exports.create_product = function(req, res) {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function(err) {
        if (err) 
            return err;
        res.send("Product created successfully");
    });
};