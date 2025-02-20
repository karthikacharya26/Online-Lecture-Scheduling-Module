const express = require("express");
const { login, addUser } = require("../controllers/authController");

const router = express.Router();

// Login Route
router.post("/login", login);

// Add User Route
router.post("/add-user", addUser);

module.exports = router;
