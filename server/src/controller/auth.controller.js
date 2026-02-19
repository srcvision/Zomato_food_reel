const User = require("../models/user.model");
const FoodPartner = require("../models/foodpartner.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const isUserAlreadyExists = await User.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email}).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      }, process.env.JWT_SECRET
    )
    res.cookie("token", token);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
};

const registerFoodPartner = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const isFoodPartnerAlreadyExists = await FoodPartner.findOne({ email });
    if (isFoodPartnerAlreadyExists) {
      return res.status(400).json({ message: "Food partner already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newFoodPartner = await FoodPartner.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: newFoodPartner._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.status(201).json({
      message: "Food partner registered successfully",
      foodPartner: {
        _id: newFoodPartner._id,
        fullname: newFoodPartner.fullname,
        email: newFoodPartner.email,
      },
    });
  } catch (error) {
    console.error("Error registering food partner:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const loginFoodPartner = async (req,res) =>{
  try {
    const { email, password } = req.body;

    const foodPartner = await FoodPartner.findOne({ email}).select("+password");
    if (!foodPartner) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: foodPartner._id,
      },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    res.status(200).json({
      message: "Food partner logged in successfully",
      foodPartner: {
        _id: foodPartner._id,
        fullname: foodPartner.fullname,
        email: foodPartner.email,
      },
    });
  } catch (error) {
    console.error("Error logging in food partner:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const logoutFoodPartner = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Food partner logged out successfully" });
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}