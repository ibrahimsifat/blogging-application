const TagModel = require("../../models/tagModel");
const add_tag = async (req, res) => {
  const { name, description } = req.body;
  const error = {};

  if (!name) {
    error.name = "Please provide tag name";
  }
  if (!description) {
    error.description = "Please provide tag description";
  }
  console.log(req.body);
  if (Object.keys(error).length === 0) {
    const tagSlug = name.trim().split(" ").join("-");

    try {
      const checkTag = await TagModel.findOne({ tagSlug });
      if (checkTag) {
        res.status(404).json({
          error: "This tag Already added ",
        });
      } else {
        const tagObj = {
          name,
          tagSlug,
          description,
        };
        await TagModel.create({ ...tagObj });
        res.status(201).json({
          successMessage: "tags add successful",
          tag: tagObj,
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
const get_tags = async (req, res) => {
  const { page, searchValue } = req.query;

  const parPage = 10;
  const skipPage = parseInt(page - 1) * parPage;
  if (searchValue === "undefined" || !searchValue) {
    try {
      const tagCount = await TagModel.find({}).countDocuments();
      const getCategory = await TagModel.find({})
        .skip(skipPage)
        .limit(parPage)
        .sort({ createdAt: -1 });
      res.status(200).json({
        tags: getCategory,
        parPage,
        tagCount,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  } else {
    try {
      const tagCount = await TagModel.find({}).countDocuments();
      let getTags = await TagModel.find({});
      getTags = getTags.filter(
        (c) => c.name.toUpperCase().indexOf(searchValue.toUpperCase()) > -1
      );
      res.status(200).json({
        allTags: getTags,
        parPage,
        tagCount,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }
};

const delete_tag = async (req, res) => {
  const { tagId } = req.params;

  try {
    await TagModel.findByIdAndDelete(tagId);
    res.status(200).json({
      successMessage: "Tag delete success",
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

const get_tag = async (req, res) => {
  const { tagId } = req.params;

  try {
    const editTag = await TagModel.findById(tagId);

    res.status(200).json({
      editTag,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage: {
        error: "Internal server error",
      },
    });
  }
};

const update_tag = async (req, res) => {
  const { tagId } = req.params;
  const { name, description } = req.body;
  const error = {};
  if (!name) {
    error.name = "Please provide tag name";
  }
  if (!description) {
    error.description = "Please provide tag description";
  }
  if (Object.keys(error).length == 0) {
    const tagSlug = name.trim().split(" ").join("-");
    try {
      const tagObj = {
        name: name.trim(),
        tagSlug,
        description,
      };
      await TagModel.findByIdAndUpdate(tagId, { ...tagObj });
      res.status(200).json({
        successMessage: "tag update successful",
        user: tagObj,
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
  const { tagId } = req.params;
  const { status } = req.body;
  try {
    await TagModel.findByIdAndUpdate(tagId, { status });
    res.status(200).json({
      successMessage: "tag update successful",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  get_tags,
  add_tag,
  get_tag,
  delete_tag,
  status_change,
  update_tag,
};
