const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// get user
router.get("/:id", authController.protect, userController.getUser);

// edit user
router.put("/:id", authController.protect, userController.updateUser);

// delete user
router.delete("/", authController.protect, userController.deleteUser);

module.exports = router;
