import { Button } from "@windmill/react-ui";
import { default as React } from "react";
import InputGroup from "../../../components/shared/input/Input";
import UseForm from "../../../hooks/useForm";
import Form from "../../auth/ui/Form";
const init = {
  name: "",
  description: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }

  return errors;
};
const AddUpdateCategoryForm = ({ edit = false, cb, isLoading }) => {
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = UseForm({ init, validate });

  return (
    <>
      {/* form */}
      <Form onSubmit={(e) => handleSubmit(e, cb)}>
        <InputGroup
          value={state.name.value}
          type={"text"}
          label={"Name"}
          name={"name"}
          placeholder={"name"}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={state.name.error}
        />
        <InputGroup
          value={state.description.value}
          type={"textarea"}
          label={"description"}
          name={"description"}
          placeholder={"javascript-event-loop-article"}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={state.description.error}
        />

        {edit ? (
          <Button type="submit">Update</Button>
        ) : (
          <Button type="submit">Add category</Button>
        )}
      </Form>
    </>
  );
};

export default AddUpdateCategoryForm;
