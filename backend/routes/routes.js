const indexRoute = require("express").Router();
indexRoute.get("/health", (req, res) => {
  res.status(200).send("Application health is good");
});
module.exports = indexRoute;
