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
  text,
  category,
  tag,
  image,
  description,
}) => {
  let errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!category) {
    errors.category = "Category is required";
  }
  if (!tag) {
    errors.tag = "Tag is required";
  }
  if (!image) {
    errors.image = "Image is required";
  }
  if (!text) {
    errors.text = "text is required";
  }
  return errors;
};
