const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/AppError");

// authenticate
exports.protect = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(req.cookies.token);
  if (!token) return next(new AppError("You are not logged in!", 401));
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return next(
        new AppError("Your session has expired! Please log in again!", 403)
      );
    }
    // console.log(payload);
    req.id = payload.id;
    next();
  });
};

// register
exports.register = CatchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    username,
    email,
    password: newPassword,
  });
  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

// login
exports.login = CatchAsync(async (req, res, next) => {
  const { email } = req.body;

  const userDoc = await User.findOne({ email });
  if (!userDoc) {
    return next(
      new AppError("Invalid email or password! Please try again!", 404)
    );
  }
  if (userDoc?.password) {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      userDoc.password
    );
    // console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
      return next(
        new AppError("Invalid email or password! Please try again!", 404)
      );
    }
    const age = 1000 * 60 * 60 * 24 * 7;
    const { password, ...others } = userDoc._doc;
    const token = jwt.sign(
      {
        id: userDoc._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );
    // console.log(token);
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: age,
      })
      .status(200)
      .json({
        status: "success",
        data: others,
      });
  }
});

//   logout
exports.logout = CatchAsync(async (req, res, next) => {
  res
    .clearCookie("token")
    .status(200)
    .json("You have been logged out successfully!");
});
