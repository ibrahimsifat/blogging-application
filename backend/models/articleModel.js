const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    author: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
    },

    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "published"],
      default: "pending",
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    tag: {
      type: Array,
      required: true,
    },
    category_slug: {
      type: String,
      required: true,
    },
    tag_slug: {
      type: String,
      required: true,
    },
    articleText: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    like_dislike: [
      {
        like_disliker_id: {
          type: String,
        },
        like_or_dislike: {
          type: String,
          default: "",
        },
      },
    ],
    viewer: {
      type: Number,
      default: 0,
    },
    viewerIp: [
      {
        ip: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("article", articleSchema);
