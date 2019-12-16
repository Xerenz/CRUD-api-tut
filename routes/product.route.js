const express = require("express");
const router = express.Router();

const product_controller = require("../controller/product.controller");

router.get("/test", product_controller.test);
router.post("/create", product_controller.create_product);

module.exports = router;