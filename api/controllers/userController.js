const User = require("../models/User");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");
const CatchAsync = require("../utils/CatchAsync");

// get a user
exports.getUser = CatchAsync(async (req, res, next) => {
  const userDoc = await User.findById(req?.params?.id);
  if (!userDoc) {
    return next(new AppError("User not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: userDoc,
  });
});

// update a user
exports.updateUser = CatchAsync(async (req, res, next) => {
  const userDoc = await User.findById(req.params.id);
  if (!userDoc) {
    return next(new AppError("User not found", 404));
  }
  if (req.params.id === req.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedUser,
    });
  } else {
    return next(new AppError("you can only update your account", 401));
  }
});

// delete a user
exports.deleteUser = CatchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.id);
  res.status(200).json({
    status: "success",
    data: "Account successfully deleted",
  });
});
