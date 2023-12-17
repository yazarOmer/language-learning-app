import asyncHandler from "express-async-handler";

// Login user
// route: POST /api/users/login
// access: Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Login user" });
});

// Register user
// route: POST /api/users/register
// access: Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register user" });
});

// Logout user
// route: POST /api/users/logout
// access: Public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User logged out" });
});

// Get User Profile
// route: GET /api/users/profile
// access: Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User profile" });
});

// Update User Profile
// route: PUT /api/users/profile
// access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update user profile" });
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};
