const validator = require("validator");
const adminModel = require("../../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const userModel = require("../../models/userModel");
const nodeMiler = require("nodemailer");
const fs = require("fs");

const admin_login = async (req, res) => {
  const { email, password } = req.body;

  const error = {};

  // handle validation error
  if (email && !validator.isEmail(email)) {
    error.email = "please provide your valid email";
  }
  if (!email) {
    error.email = "please provide your email";
  }
  if (!password) {
    error.password = "please provide your password";
  }

  // check if error
  if (Object.keys(error).length > 0) {
    return res.status(400).json({ error: error });
  } else {
    try {
      const getAdmin = await adminModel.findOne({ email }).select("+password");
      if (getAdmin) {
        const matchPassword = await bcrypt.compare(password, getAdmin.password);
        if (matchPassword) {
          const { _id, name, role, image } = getAdmin || {};
          console.log(getAdmin);
          const userObj = {
            id: _id,
            name,
            role,
            image,
          };
          const token = jwt.sign(userObj, process.env.SECRET, {
            expiresIn: "7d",
          });

          res
            .status(200)
            .cookie("binary_token", token, {
              expires: new Date(
                Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            })
            .json({
              message: "login successful",
              user: userObj,
              accessToken: token,
            });
        } else {
          return res
            .status(400)
            .json({ errorMessage: { error: "Password does not match" } });
        }
      } else {
        return res
          .status(400)
          .json({ errorMessage: { error: "Email does not exits" } });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ errorMessage: { error: "Internal server error" } });
    }
  }
};

const user_register = async (req, res) => {
  const formData = formidable();

  formData.parse(req, async (err, fields, files) => {
    if (err) {
      return res
        .status(500)
        .json({ errorMessage: { error: "form data parse filed" } });
    } else {
      const { name, email, password } = fields;
      const errorData = {};
      if (!name) {
        errorData.name = "Please provide your name";
      }
      if (!email) {
        errorData.email = "Please provide your email";
      }
      if (email && !validator.isEmail(email)) {
        errorData.email = "Please provide your valid email";
      }
      if (!password) {
        errorData.password = "Please provide your password";
      }
      if (Object.keys(files).length === 0) {
        errorData.image = "Please provide your image";
      }
      if (Object.keys(errorData).length === 0) {
        try {
          const getUser = await userModel.findOne({ email });
          if (getUser) {
            return res
              .status(500)
              .json({ errorMessage: { error: "Your email already use" } });
          } else {
            const otp = Math.floor(Math.random() * 100000 + 345678);

            const transporter = nodeMiler.createTransport({
              service: "Gmail",
              auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD,
              },
            });
            console.log(process.env.USER_EMAIL);
            const mailOption = {
              from: process.env.USER_EMAIL,
              to: email,
              subject: " Sending email mern blog",
              html: `  <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Your Brand</a>
              </div>
              <p style="font-size:1.1em">Hi,</p>
              <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
              <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>Serabuy Blog</p>
                <p>Jeddah</p>
                <p>Saudi Arabia</p>
              </div>
            </div>`,
            };

            transporter.sendMail(mailOption, async (error) => {
              if (error) {
                return res.status(500).json({
                  errorMessage: { error: "Somethings else please try again" },
                });
              } else {
                const verifyEmailToken = jwt.sign(
                  {
                    email,
                    name,
                    password: await bcrypt.hash(password, 10),
                    imageInfo: files,
                    otpCode: otp,
                  },
                  process.env.SECRET,
                  {
                    expiresIn: process.env.TOKEN_EXP,
                  }
                );

                const option = {
                  expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                };
                res
                  .status(201)
                  .cookie("emailVerifyToken", verifyEmailToken, option)
                  .json({ successMessage: "Check your email and submit otp" });
              }
            });
          }
        } catch (error) {
          return res
            .status(500)
            .json({ errorMessage: { error: "Internal server error" } });
        }
      } else {
        return res.status(400).json({ errorMessage: errorData });
      }
    }
  });
};

const verify_email = async (req, res) => {
  const { otp } = req.body;
  const { emailVerifyToken } = req.cookies;
  if (!otp) {
    res.status(404).json({ errorMessage: "please provide yout otp" });
  } else {
    const { name, email, password, otpCode, imageInfo } = await jwt.verify(
      emailVerifyToken,
      process.env.SECRET
    );

    const imageName = Date.now() + imageInfo.image.originalFilename;

    const disPath =
      __dirname + `../../../frontend/public/userImage/${imageName}`;

    try {
      if (parseInt(otp) !== otpCode) {
        res
          .status(404)
          .json({ errorMessage: { error: "please provide your valid otp" } });
      } else {
        fs.copyFile(imageInfo.image.filepath, disPath, async (err) => {
          if (!err) {
            const createUser = await userModel.create({
              userName: name,
              email,
              loginMethod: "manually",
              password,
              image: `http://localhost:3000/userImage/${imageName}`,
            });

            const token = jwt.sign(
              {
                id: createUser._id,
                email: createUser.email,
                name: createUser.userName,
                image: createUser.image,
                role: createUser.role,
                loginMethod: createUser.loginMethod,
                accessStatus: createUser.accessStatus,
                createdAt: createUser.createdAt,
              },
              process.env.SECRET,
              {
                expiresIn: process.env.TOKEN_EXP,
              }
            );

            const option = {
              expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            };

            res.clearCookie("emailVerifyToken");
            res.status(201).cookie("blog_token", token, option).json({
              successMessage: "Your register successfull",
              token,
            });
          }
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ errorMessage: { error: "Internal server error" } });
    }
  }
};

const user_login = async (req, res) => {
  const { email, password } = req.body;

  const error = {};

  if (email && !validator.isEmail(email)) {
    error.email = "please provide your valid email";
  }
  if (!email) {
    error.email = "please provide your email";
  }
  if (!password) {
    error.password = "please provide your password";
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json({ errorMessage: error });
  } else {
    try {
      const getUser = await userModel.findOne({ email }).select("+password");
      if (getUser) {
        const matchPassword = await bcrypt.compare(password, getUser.password);
        if (matchPassword) {
          const token = jwt.sign(
            {
              id: getUser._id,
              email: getUser.email,
              name: getUser.userName,
              image: getUser.image,
              role: getUser.role,
              loginMethod: getUser.loginMethod,
              accessStatus: getUser.accessStatus,
              createdAt: getUser.createdAt,
            },
            process.env.SECRET,
            {
              expiresIn: process.env.TOKEN_EXP,
            }
          );

          const option = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          };
          res.status(201).cookie("blog_token", token, option).json({
            successMessage: "Your log successful",
            token,
          });
        } else {
          return res
            .status(400)
            .json({ errorMessage: { error: "Password does not match" } });
        }
      } else {
        return res
          .status(400)
          .json({ errorMessage: { error: "Email does not exits" } });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ errorMessage: { error: "Internal server error" } });
    }
  }
};

module.exports = {
  admin_login,
  user_register,
  user_login,
  verify_email,
};
