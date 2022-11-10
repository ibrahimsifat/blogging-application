const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tagSlug: {
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

module.exports = model("tag", tagSchema);
