const mongoose = require("mongoose");
const popularDishSchema =new mongoose.Schema({
    dishName: { 
        type: String, 
        required: true 
    },
    dishImage: { 
        type: String, 
        required: true 
    },
    dishDescription: { 
        type: String, 
        required: true 
    },
    dishPrice: { 
        type: Number,
         required: true 
        }
});

const PopularDish = mongoose.model("PopularDish", popularDishSchema);

module.exports = PopularDish;