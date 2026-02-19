const mongoose = require("mongoose");

const foodPartnerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    contactName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false,
    },  
    address: {
        type: String,
        required: true,
        
    }
},{
    timestamps: true,
})


const FoodPartner = mongoose.model("foodpartner", foodPartnerSchema);

module.exports = FoodPartner;