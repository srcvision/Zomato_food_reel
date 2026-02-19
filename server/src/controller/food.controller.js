const foodmodel = require('../models/food.model');
const storageService = require('../service/imagekit.service');
const { v4: uuid } = require('uuid');

const createFood = async (req, res) => {
    console.log(req.foodPartner);
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    const newFood = await foodmodel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id,
    })
    res.status(201).json({
        message: "Food created successfully",
        newFood,
    });     
}

const getFoodItems = async (req, res) => {
    const foodItems = await foodmodel.find({})
    res.status(200).json({
        message: "Foods retrieved successfully",
        foodItems,
    });
}

module.exports = {
    createFood,
    getFoodItems,
}