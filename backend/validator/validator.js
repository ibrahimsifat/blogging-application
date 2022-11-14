module.exports.article_validator = (data) => {
  const { title, category, tag, text, image, description } = data;
  let error = {};

  if (!title) {
    error.title = "Please provide article title";
  }
  if (!category) {
    error.category = "Please provide article category";
  }
  if (!tag) {
    error.tag = "Please provide article tag";
  }
  if (!text) {
    error.text = "Please provide article text";
  }
  if (!image) {
    error.image = "Please provide article image";
  }
  if (!description) {
    error.description = "Please provide article description";
  }

  if (Object.keys(error).length === 0) {
    return {
      validated: true,
    };
  } else {
    return {
      validated: false,
      error: error,
    };
  }
};
