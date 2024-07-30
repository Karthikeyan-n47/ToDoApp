const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task should have a title"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["To do", "In progress", "Under review", "Finished"],
      required: [true, "Task should have a status"],
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
    },
    deadline: {
      type: Date,
    },
    userId: {
      type: String,
      required: [true, "Task should have a creator"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
