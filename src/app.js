require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
const apiPath = "/api/v1"

connectDB();

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use(cors());
app.use(apiPath + "/auth", require("./routes/api/auth"));
app.use(apiPath + "/:userId/workouts", require("./routes/api/workouts"))
app.use(apiPath + "/exercises", require("./routes/api/exercises"))
app.use(apiPath + "/users", require("./routes/api/users"))
app.use(apiPath + "/:userId/goals", require("./routes/api/goal"))

app.use('/uploads', express.static('uploads'));
mongoose.connection.once("open", () => {
  console.log("DB connected");
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});