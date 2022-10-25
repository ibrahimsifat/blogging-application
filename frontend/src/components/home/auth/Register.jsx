import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../../../hooks/useForm";
import UserCaption from "../../../pages/home/auth/UserCaption";
import ProcessBtn from "../../ui/Button/ProcessBtn";
import Button from "../navigation/ui/Button";
import InputGroup from "../navigation/ui/Input";
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
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto mb-10">
            <div>
              <h1 className="text-2xl font-semibold">
                Login Form with Floating Labels
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="py-8 text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={(e) => handleSubmit(e, cb)}
              >
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
                <InputGroup
                  value={state.password.value}
                  label={"Password"}
                  type={"password"}
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
              </form>
            </div>
            <p>
              Already Register?{" "}
              <Link to="/login">
                {" "}
                <span className="font-bold cursor-pointer hover:text-blue-500">
                  Login Your Account
                </span>
              </Link>
            </p>
          </div>
          <UserCaption />
        </div>
      </div>
    </div>
  );
};

export default Register;
