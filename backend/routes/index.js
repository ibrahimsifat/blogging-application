const authRouter = require("./auth/auth.routes");
const categoryRouter = require("./dashboard/category.routes");
const tagRouter = require("./dashboard/tags.routes");
const indexRoute = require("express").Router();
indexRoute.get("/", (req, res) => {
  res.status(200).send("Application is running");
});
indexRoute.get("/health", (req, res) => {
  res.status(200).send("Application health is good");
});

// router use..............

indexRoute.use("/auth", authRouter);
indexRoute.use("/category", categoryRouter);
indexRoute.use("/tag", tagRouter);

module.exports = indexRoute;
