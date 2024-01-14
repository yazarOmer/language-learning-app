import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Login user
// route: POST /api/users/login
// access: Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            gem: user.gem,
            lifePoint: user.lifePoint,
            point: user.point,
        });
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});

// Register user
// route: POST /api/users/register
// access: Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            gem: user.gem,
            lifePoint: user.lifePoint,
            point: user.point,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// Logout user
// route: POST /api/users/logout
// access: Public
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: "User logged out" });
});

// Get User Profile
// route: GET /api/users/profile
// access: Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        name: req.user.name,
        email: req.user.email,
        point: req.user.point,
        createdAt: req.user.createdAt,
    };

    res.status(200).json(user);
});

// Update User Profile
// route: PUT /api/users/profile
// access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update user profile" });
});

const decreaseLifePoint = asyncHandler(async (req, res) => {
    const id = req.user._id;
    const user = await User.findById(id);

    user.lifePoint -= 1;
    await user.save();

    res.status(200).json(user);
});

const getUserStats = asyncHandler(async (req, res) => {
    const id = req.user._id;
    const user = await User.findById(id);

    res.status(200).json({ lifePoint: user.lifePoint, gem: user.gem });
});

const updateUserPoint = asyncHandler(async (req, res) => {
    const id = req.user._id;
    const score = req.body.score;
    console.log(req.body);
    const user = await User.findById(id);
    console.log(score);
    user.point += score;
    user.gem += score;

    await user.save();

    res.status(200).json({ lifePoint: user.lifePoint, gem: user.gem });
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    decreaseLifePoint,
    getUserStats,
    updateUserPoint,
};
