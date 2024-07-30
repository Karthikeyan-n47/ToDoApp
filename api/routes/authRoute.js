const router = require("express").Router();
const authController = require("../controllers/authController");

// login
router.post("/login", authController.login);

// register
router.post("/register", authController.register);

// logout
router.post("/logout", authController.logout);

module.exports = router;
