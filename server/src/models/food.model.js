const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    video: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 500,
    },
    foodPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodpartner",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("food", foodSchema);

module.exports = Food;
