const { Category: CategoryModel } = require("../../models");
const TagModel = require("../../models/tagModel");
const { article_validator } = require("../../validator/validator");
const articleModel = require("../../models/articleModel");

const get_tag_category = async (req, res) => {
  try {
    const allTag = await TagModel.find({});
    const allCategory = await CategoryModel.find({});
    res.status(200).json({ allCategory, allTag });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

const add_article = async (req, res) => {
  const { adminId, adminName, adminAvatar } = req;

  const { title, category, tag, text, image } = req.body;
  const validate = article_validator(req.body);
  // check is existArticle
  existArticle = await articleModel.findOne({ title });
  if (!existArticle) {
    if (validate.validated) {
      // const categoryName = category.split("-").join(" ");
      // const tagName = tag.split("-").join(" ");
      const category_slug = category.join("-");
      const tag_slug = tag.join("-");
      const slug = title.split(" ").join("-");
      try {
        await articleModel.create({
          author: {
            name: adminName,
            id: adminId,
            avatar: adminAvatar,
          },
          title,
          slug,
          category,
          category_slug,
          tag,
          tag_slug,
          articleText: text,
          image,
        });
        res.status(201).json({
          successMessage: "Article add successful",
        });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({
          error: "Internal server error",
        });
      }
    } else {
      res.status(400).json({ error: validate.error });
    }
  } else {
    res.status(400).json({ error: "article is Already exits" });
  }
};

// const get_article = async (req, res) => {
//   const { role, adminId } = req;
//   const { currentPage, searchValue } = req.query;

//   const parPage = 10;

//   const skipPage = parseInt(currentPage - 1) * parPage;

//   let articles = [];

//   try {
//     let articleCount = 0;

//     if (searchValue) {
//       if (role === "admin") {
//         articleCount = await articleModel.find({}).countDocuments();
//         articles = await articleModel
//           .find({})
//           .skip(skipPage)
//           .limit(parPage)
//           .sort({ createAt: -1 });
//         articles = articles.filter(
//           (ar) => ar.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
//         );
//       } else {
//         articleCount = await articleModel.find({ adminId }).countDocuments();
//         articles = await articleModel
//           .find({ adminId })
//           .skip(skipPage)
//           .limit(parPage)
//           .sort({ createAt: -1 });
//         articles = articles.filter(
//           (ar) => ar.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
//         );
//       }
//     } else {
//       if (role === "admin") {
//         articleCount = await articleModel.find({}).countDocuments();
//         articles = await articleModel
//           .find({})
//           .skip(skipPage)
//           .limit(parPage)
//           .sort({ createAt: -1 });
//       } else {
//         articleCount = await articleModel.find({ adminId }).countDocuments();
//         articles = await articleModel
//           .find({ adminId })
//           .skip(skipPage)
//           .limit(parPage)
//           .sort({ createAt: -1 });
//       }
//     }

//     res.status(200).json({
//       articles,
//       parPage,
//       articleCount,
//     });
//   } catch (error) {
//     res.status(500).json({
//       errorMessage: {
//         error: "Internal server error",
//       },
//     });
//   }
// };

const get_article = async (req, res) => {
  const { page } = req.query;

  const parPage = 10;
  const skipPage = parseInt(page - 1) * parPage;

  try {
    const articleCount = await articleModel.find({}).countDocuments();
    const getArticle = await articleModel
      .find({})
      .skip(skipPage)
      .limit(parPage)
      .sort({ createdAt: -1 });
    res.status(200).json({
      articles: getArticle,
      parPage,
      articleCount,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
const get_published_article = async (req, res) => {
  const { page } = req.query;

  const parPage = 10;
  const skipPage = parseInt(page - 1) * parPage;

  try {
    const articleCount = await articleModel
      .find({ status: "published" })
      .countDocuments();
    const getArticle = await articleModel
      .find({ status: "published" })
      .skip(skipPage)
      .limit(parPage)
      .sort({ createdAt: -1 });
    res.status(200).json({
      articles: getArticle,
      parPage,
      articleCount,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
const edit_article = async (req, res) => {
  const { articleId } = req.params;
  const { adminId, role } = req;
  console.log(adminId);
  try {
    const getArticle = await articleModel.findById(articleId);
    if (
      (getArticle && getArticle?.author?.id === adminId) ||
      getArticle.role === role
    ) {
      res.status(200).json({ editArticle: getArticle });
    } else {
      res.status(404).json({
        error: "You can not edit this article",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const update_article = async (req, res) => {
  const { title, category, tag, text, articleId } = req.body;
  const { adminId, role } = req;
  const validate = article_validator(req.body);
  if (validate.validated) {
    try {
      const getArticle = await articleModel.findById(articleId);
      console.log(articleId);

      if (
        (getArticle && getArticle?.author?.id === adminId) ||
        getArticle.role === role
      ) {
        const category_slug = category.join("-");
        const tag_slug = tag.join("-");
        const slug = title.split(" ").join("-");
        await articleModel.findByIdAndUpdate(articleId, {
          title: title.trim(),
          slug: slug.trim(),
          category,
          category_slug: category_slug,
          tag,
          tag_slug: tag_slug,
          articleText: text,
        });
        res.status(201).json({
          successMessage: "Article edit successful",
        });
      } else {
        res.status(404).json({
          error: "You can not edit this article",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    res.status(400).json({ error: validate.error });
  }
};

const delete_article = async (req, res) => {
  const { articleId } = req.params;
  const { adminId, role } = req;
  try {
    const getArticle = await articleModel.findById(articleId);

    if (
      (getArticle && getArticle?.author?.id === adminId) ||
      getArticle.role === role
    ) {
      await articleModel.findByIdAndDelete(articleId);
      res.status(201).json({
        successMessage: "Article delete successful",
      });
    } else {
      res.status(404).json({
        error: "You can not edit this article",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
const status_change = async (req, res) => {
  const { articleId } = req.params;
  const { status } = req.body;
  try {
    await articleModel.findByIdAndUpdate(articleId, { status });
    res.status(200).json({
      successMessage: "Article update successful",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

const getSingleArticle = async (req, res) => {
  const { articleSlug } = req.params;
  const { adminId, role } = req;

  try {
    const getArticle = await articleModel.findOne({ slug: articleSlug });
    if (
      (getArticle && getArticle.getArticle?.author?.id === adminId) ||
      getArticle.role === role
    ) {
      res.status(200).json(getArticle);
    } else {
      res.status(404).json({
        error: "You can not edit this article",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
module.exports = {
  get_tag_category,
  getSingleArticle,
  add_article,
  get_article,
  edit_article,
  update_article,
  delete_article,
  status_change,
  get_published_article,
};
