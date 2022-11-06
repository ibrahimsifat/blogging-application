const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "pending",
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Category", CategorySchema);
