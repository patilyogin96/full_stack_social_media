const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const db = require("./config/mongoose");
// const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

// dotenv.config();

// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("Connected to MongoDB");
//   }
// );

// setting up all middlewares here

//  app.use(express.json()) is bodyparser,when you use post req it parses
app.use(express.json());

app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend Server ready");
});
