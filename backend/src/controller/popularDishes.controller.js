const PopularDishModel = require("../models/popularDishe.model")

const getAllPopularDishes = async (req, res) => {
    try {
        const popularDishes = await PopularDishModel.find();
        res.status(200).json(popularDishes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error while fetching all popular dishes." });
    }
 }

 const postPopularDishes = async (req, res) => {
    const {
        dishName,
        dishDescription,
        dishImage,
        dishPrice
    } = req.body;

    try {
        const newPopularDish = new PopularDishModel({
            dishName,
            dishDescription,
            dishImage,
            dishPrice
        });
        await newPopularDish.save();
        res.status(201).json(newPopularDish);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error while creating a new popular dish." });
    }
 };


const PopularDishesController = {
    getAllPopularDishes,
    postPopularDishes
};
module.exports = PopularDishesController