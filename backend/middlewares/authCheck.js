const jwt = require("jsonwebtoken");
// module.exports.checkAdmin = async (req, res, next) => {
//   //   const { blog_token } = req.cookies;
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) {
//     res.status(409).json({ error: "Please login first" });
//   } else {
//     const deCodeToken = await jwt.verify(token, process.env.SECRET);
//     req.adminId = deCodeToken.id;
//     req.adminName = deCodeToken.name;
//     req.role = deCodeToken.role;
//     next();
//   }
// };
module.exports.adminAuth = (req, res, next) => {
  //   const token = req.cookies.t;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized1" });
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};
module.exports.checkUser = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    req.userId = "";
    req.role = "";
    req.userName = "";
    next();
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    req.userId = deCodeToken.id;
    req.userName = deCodeToken.name;
    req.role = deCodeToken.role;
    next();
  }
};
module.exports.auth_user = async (req, res, next) => {
  const { blog_token } = req.cookies;
  if (!blog_token) {
    res.status(404).json({ errorMessage: { error: "Please login first" } });
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    if (deCodeToken.role === "user" && deCodeToken.accessStatus === "unblock") {
      req.userId = deCodeToken.id;
      req.role = deCodeToken.role;
      req.userName = deCodeToken.name;
      next();
    } else {
      res.status(404).json({
        error: "you can not access",
      });
    }
  }
};

module.exports.auth_sub_admin = async (req, res, next) => {
  const { blog_token } = req.headers;
  console.log(req.header);
  if (!blog_token) {
    res.status(404).json({ errorMessage: { error: "Please login first" } });
  } else {
    const deCodeToken = await jwt.verify(blog_token, process.env.SECRET);
    if (
      deCodeToken.role === "sub admin" &&
      deCodeToken.accessStatus === "unblock"
    ) {
      req.adminId = deCodeToken.id;
      req.adminName = deCodeToken.name;
      req.role = deCodeToken.role;
      next();
    } else if (deCodeToken.role === "admin") {
      req.adminId = deCodeToken.id;
      req.adminName = deCodeToken.name;
      req.role = deCodeToken.role;
      next();
    } else {
      res.status(404).json({
        error: "you can not access",
      });
    }
  }
};
