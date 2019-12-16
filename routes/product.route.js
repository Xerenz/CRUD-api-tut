const express = require("express");
const router = express.Router();

const product_controller = require("../controller/product.controller");

router.get("/test", product_controller.test);
router.post("/create", product_controller.create_product);
router.get("/:id", product_controller.get_product);
router.put("/:id/update", product_controller.product_update);
router.delete("/:id/delete", product_controller.product_delete);

module.exports = router;