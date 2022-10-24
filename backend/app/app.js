// external imports
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const indexRoute = require("../routes/routes");

// internal imports

// create app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: "http://127.0.0.1:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// to check application health
app.use("/api/v1/", indexRoute);

// handle auth related errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res
      .status(err.status || 400)
      .json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

module.exports = app;
