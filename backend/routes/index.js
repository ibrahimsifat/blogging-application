const authRouter = require("./auth/auth.routes");
const categoryRouter = require("./dashboard/category.routes");
const indexRoute = require("express").Router();
indexRoute.get("/", (req, res) => {
  res.status(200).send("Application is working");
});
indexRoute.get("/health", (req, res) => {
  res.status(200).send("Application health is good");
});

// router use..............

indexRoute.use("/auth", authRouter);
indexRoute.use("/category", categoryRouter);

module.exports = indexRoute;
