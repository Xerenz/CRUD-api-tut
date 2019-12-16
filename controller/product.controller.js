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

exports.get_product = function(req, res) {
    Product.findById(req.params.id, function(err, prod) {
        if (err)
            return next(err);
        res.send(prod);
    });
};

exports.product_update = function(req, res) {
    Product.findByIdAndUpdate(req.params.id, function(err, prod) {
        if (err)
            return next(err);
        res.send("Product Updated");
    });
};

exports.product_delete = function(req, res) {
    Product.findByIdAndDelete(req.params.id, function(err) {
        if (err)
            return next(err);
        res.send("Product deleted");
    });
};