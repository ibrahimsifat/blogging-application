const http = require("http");
const app = require("./app/app");
const { port } = require("./config/config");
const connectDB = require("./services/connectDB");

// console.log(port);

connectDB();

const server = http.createServer(app);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// listen the app
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
