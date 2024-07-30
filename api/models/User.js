const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User should have a name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "User should have an email address"],
    },
    password: {
      type: String,
      required: [true, "Account must have a password"],
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator, {
  message: "Email already exists, enter a different email",
});

module.exports = mongoose.model("User", UserSchema);
