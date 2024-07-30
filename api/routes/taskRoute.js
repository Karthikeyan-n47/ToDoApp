const router = require("express").Router();
const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");

// get all tasks of user
router.get("/", authController.protect, taskController.getAllTasks);

// get one task
router.get("/:id", authController.protect, taskController.getOneTask);

// create task
router.post("/", authController.protect, taskController.createTask);

// edit task
router.put("/:id", authController.protect, taskController.editTask);

// delete task
router.delete("/:id", authController.protect, taskController.deleteTask);

module.exports = router;
