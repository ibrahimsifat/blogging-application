import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import InputGroup from "../../../components/shared/input/Input";
import ProcessBtn from "../../../components/shared/ui/Button/ProcessBtn";
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
const AddUpdateAdminForm = ({ edit = false, setFormDate }) => {
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = UseForm({ init, validate });
  const [submitError, setSubmitError] = useState([]);
  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      const obj = errors;
      const errorArray = Object.values(obj);
      setSubmitError(errorArray);
    } else {
      console.log("[success]" + JSON.stringify(values));
      setFormDate(values);
    }
  };
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
        {submitError && (
          <ul>
            {submitError.map((error, i) => (
              <li className="text-red-500" key={i}>
                {error}
              </li>
            ))}
          </ul>
        )}
        {edit ? (
          <Button type="submit">Update</Button>
        ) : (
          <Button type="submit">Add Tag</Button>
        )}
        <ProcessBtn label="Submitting..." />
      </Form>
    </>
  );
};

export default AddUpdateAdminForm;
