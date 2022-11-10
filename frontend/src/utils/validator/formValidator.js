// categories
export const categoryValidate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  return errors;
};
export const categoryInitialValue = {
  name: "",
  description: "",
};
// tags
export const tagValidate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  return errors;
};
export const tagInitialValue = {
  name: "",
  description: "",
};

// article
export const articleValidate = ({
  title,
  categories,
  tags,
  image,
  description,
}) => {
  let errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (categories?.length <= 0) {
    errors.categories = "Category is required";
  }
  if (tags?.length <= 0) {
    errors.tags = "Tag is required";
  }
  if (!image) {
    errors.image = "Image is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }
  return errors;
};
