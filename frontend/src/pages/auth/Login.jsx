import React from "react";
import { FcGoogle } from "react-icons/fc";
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
  email: "",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
const Login = () => {
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
      // console.log("[Error]" + JSON.stringify(errors));
    } else {
      console.log("[success]" + JSON.stringify(values));
    }
  };

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto">
        <AuthFormHeading label="Login Your Account" />

        <div className="relative">
          <Form onSubmit={(e) => handleSubmit(e, cb)}>
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

            <Button
              $primary
              type="submit"
              disabled={
                state?.email?.value?.length < 8 || state?.password?.value < 4
              }
            >
              Login
            </Button>
            <ProcessBtn label="Submitting..." />
          </Form>
        </div>
      </div>
      <div className="m-auto">
        <div className="p-6 sm:p-16">
          <div className=" grid space-y-4">
            <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <FcGoogle size={24} className="absolute left-0 w-5" />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>

            <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                  className="absolute left-0 w-5"
                  alt="Facebook logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  Continue with Facebook
                </span>
              </div>
            </button>
          </div>

          <UserCaption />
        </div>
      </div>

      <SwitchAuthRouteLabel
        questionLabel="Don\'t have account"
        linkLabel="Create a Account"
        link="/register"
      />
    </AuthLayout>
  );
};

export default Login;
