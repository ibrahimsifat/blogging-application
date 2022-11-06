const CategoryModel = require("../../models/CategoryModel");
const add_category = async (req, res) => {
  const { name, description } = req.body;
  const error = {};

  if (!name) {
    error.name = "Please provide category name";
  }
  if (!description) {
    error.description = "Please provide category description";
  }
  if (Object.keys(error).length === 0) {
    const categorySlug = name.trim().split(" ").join("-");

    try {
      const checkCategory = await CategoryModel.findOne({ categorySlug });
      if (checkCategory) {
        res.status(404).json({
          error: "This category Already added ",
        });
      } else {
        const categoryObj = {
          name,
          categorySlug,
          description,
        };
        await CategoryModel.create({ ...categoryObj });
        res.status(201).json({
          successMessage: "Category add successful",
          category: categoryObj,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    res.status(400).json({ error: "provide valid information" });
  }
};
const get_categories = async (req, res) => {
  const { page, searchValue } = req.query;

  const parPage = 10;
  const skipPage = parseInt(page - 1) * parPage;
  if (searchValue === "undefined" || !searchValue) {
    try {
      const categoryCount = await CategoryModel.find({}).countDocuments();
      const getCategory = await CategoryModel.find({})
        .skip(skipPage)
        .limit(parPage)
        .sort({ createdAt: -1 });
      res.status(200).json({
        categories: getCategory,
        parPage,
        categoryCount,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    try {
      const categoryCount = await CategoryModel.find({}).countDocuments();
      let getCategory = await CategoryModel.find({});
      getCategory = getCategory.filter(
        (c) => c.name.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
      );
      res.status(200).json({
        allCategory: getCategory,
        parPage,
        categoryCount,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }
};

const delete_category = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    await CategoryModel.findByIdAndDelete(categoryId);
    res.status(200).json({
      successMessage: "Category delete success",
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

const get_category = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const editCategory = await CategoryModel.findById(categoryId);

    res.status(200).json({
      editCategory,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

const update_category = async (req, res) => {
  const { categoryId } = req.params;
  const { name, description } = req.body;
  const error = {};
  console.log(name, description);
  if (!name) {
    error.name = "Please provide category name";
  }
  if (!description) {
    error.description = "Please provide category description";
  }
  if (Object.keys(error).length == 0) {
    const categorySlug = name.trim().split(" ").join("-");
    try {
      const userObj = {
        name: name.trim(),
        categorySlug,
        description,
      };
      await CategoryModel.findByIdAndUpdate(categoryId, { ...userObj });
      res.status(200).json({
        successMessage: "Category update successful",
        user: userObj,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    res.status(400).json({ error });
  }
};
const status_change = async (req, res) => {
  const { categoryId } = req.params;
  const { status } = req.body;
  try {
    await CategoryModel.findByIdAndUpdate(categoryId, { status });
    res.status(200).json({
      successMessage: "Category update successful",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  get_categories,
  add_category,
  get_category,
  delete_category,
  status_change,
  update_category,
};
