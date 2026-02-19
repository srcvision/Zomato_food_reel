const foodPartnermodel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authFoodMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodpartner = await foodPartnermodel.findById(decoded.id);
        if (!foodpartner) {
            return res.status(401).json({ message: "User not found" });
        }

        req.foodPartner = foodpartner;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Unauthorized" });
    }
};

const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "User not found"});
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = {
    authFoodMiddleware,
    authUserMiddleware,
};
