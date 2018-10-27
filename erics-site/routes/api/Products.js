const router = require("express").Router();
const ProductsController = require("../../controllers/ProductsController");

// Matches with "/api/products"
router
  .route("/")
  .get(ProductsController.findAll)
  //Matches "/api/products/products_id"
router
    .route("/:id")
    .get(ProductsController.findOne)
    // Matches "/api/products/category/type"
router
  .route("/category/:type")
  .get(ProductsController.findByCategory)
  module.exports= router