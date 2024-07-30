const Task = require("../models/Task");
// const User=require('../models/User');\
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");

// create a task
exports.createTask = CatchAsync(async (req, res, next) => {
  req.body.userId = req?.id;
  const task = await Task.create(req.body);
  res.status(201).json({
    status: "success",
    data: task,
  });
});

// get all tasks of a user
exports.getAllTasks = CatchAsync(async (req, res, next) => {
  const tasks = await Task.find({ userId: req?.id });
  res.status(200).json({
    status: "success",
    data: tasks,
  });
});

// get one task
exports.getOneTask = CatchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(new AppError("task not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: task,
  });
});

// edit a task
exports.editTask = CatchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(new AppError("task not found", 404));
  }
  if (task?.userId === req.id) {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: updatedTask,
    });
  } else {
    return next(new AppError("you can edit only your tasks", 401));
  }
});

// delete a task
exports.deleteTask = CatchAsync(async (req, res, next) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: "Task deleted successfully",
  });
});
