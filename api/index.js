const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
const PORT = process.env.PORT || 8800;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.use("*", (req, res, next) => {
  next(
    new AppError(
      `Could not find the url: ${req.originalUrl} on this server!`,
      404
    )
  );
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log("Server connected successfully!");
});
