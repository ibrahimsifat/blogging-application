import React, { useState } from "react";
import InputGroup from "../../components/home/navigation/ui/Input";
import Button from "../../components/shared/ui/Button/Button";
import ProcessBtn from "../../components/shared/ui/Button/ProcessBtn";
import UseForm from "../../hooks/useForm";
import AuthFormHeading from "./ui/AuthFormHeading";
import AuthLayout from "./ui/AuthLayout";
import Form from "./ui/Form";
import SwitchAuthRouteLabel from "./ui/SwitchAuthRouteLabel";
import UserCaption from "./UserCaption";
const init = {
  username: "",
  email: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
const Register = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = UseForm({ init, validate });

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      console.log("[Error]" + JSON.stringify(errors));
    } else {
      console.log("[success]" + JSON.stringify(values));
    }
  };
  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mb-10">
        <AuthFormHeading label="Create A new Account" />
        <div className="divide-y divide-gray-200">
          <Form onSubmit={(e) => handleSubmit(e, cb)}>
            <InputGroup
              value={state.username.value}
              type={"text"}
              label={"Username"}
              name={"username"}
              placeholder={"test@example.com"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.username.error}
            />
            <InputGroup
              value={state.email.value}
              type={"email"}
              label={"Email"}
              name={"email"}
              placeholder={"test@example.com"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.email.error}
            />
            <InputGroup
              value={state.password.value}
              type={"password"}
              label={"Password"}
              name={"password"}
              placeholder={"******"}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={state.password.error}
            />

            <Button $primary type="submit">
              Submit
            </Button>
            <ProcessBtn label="Submitting..." />
          </Form>
        </div>

        <SwitchAuthRouteLabel
          questionLabel="Already Register"
          linkLabel="Login Your Account"
          link="/login"
        />
      </div>
      <UserCaption />
    </AuthLayout>
  );
};

export default Register;
