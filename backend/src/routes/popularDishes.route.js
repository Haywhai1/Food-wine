const express = require("express");
const popularDishesController = require("../controller/popularDishes.controller");
const router = express.Router();

router
  .route("/")
  .get(popularDishesController.getAllPopularDishes)
  .post(popularDishesController.postPopularDishes)
  

module.exports = router;