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
