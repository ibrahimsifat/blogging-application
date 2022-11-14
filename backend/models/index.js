const mongoose = require("mongoose");
const category = require("../models/categoryModel");
const admin = require("../models/adminModel");
const article = require("../models/articleModel");
const comment = require("../models/commentModel");

// modals
module.exports.Category = mongoose.models.Category || category;
module.exports.Admin = mongoose.models.Admin || admin;
module.exports.Article = mongoose.models.Article || article;
module.exports.Comment = mongoose.models.Comment || comment;
