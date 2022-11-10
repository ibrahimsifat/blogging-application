import { Button } from "@windmill/react-ui";
import { default as React } from "react";
import InputGroup from "../../components/shared/input/Input";
import Form from "../../pages/auth/ui/Form";

const UseAddForm = ({
  cb,
  handleBlur,
  handleChange,
  handleFocus,
  handleSubmit,
  state,
  btnString,
}) => {
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

        <Button type="submit"> {btnString}</Button>
      </Form>
    </>
  );
};

export default UseAddForm;
