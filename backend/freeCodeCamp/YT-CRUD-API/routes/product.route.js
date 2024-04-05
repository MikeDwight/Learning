const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProductsById);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
