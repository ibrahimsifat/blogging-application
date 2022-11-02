import { Button } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitError from "../../../components/shared/form/SubmitError";
import InputGroup from "../../../components/shared/input/Input";
import ProcessBtn from "../../../components/shared/ui/Button/ProcessBtn";
import Error from "../../../components/shared/ui/Error";
import { useAdminLoginMutation } from "../../../features/auth/authApi";
import UseForm from "../../../hooks/useForm";
import AuthFormHeading from "../ui/AuthFormHeading";
import AuthLayout from "../ui/AuthLayout";
import Form from "../ui/Form";
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
const AdminLogin = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [fromData, setFromDate] = useState({});
  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState([]);
  const navigate = useNavigate();
  // login
  const [adminLogin, { data, isLoading, error: responseError }] =
    useAdminLoginMutation({});

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (
      data?.accessToken &&
      (data?.user?.role === "admin" || data?.user?.role === "sub_admin")
    ) {
      navigate("/dashboard");
    }
    if (data?.accessToken && data?.user?.role === "user") {
      navigate("/team");
    }
  }, [data, responseError, navigate]);
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
      const errorArray = Object.values(errors);
      setSubmitError(errorArray);
    } else {
      console.log("[success]" + JSON.stringify(values));
      setFromDate(values);
      setError("");
      console.log("responseError");
      adminLogin({ email: values.email, password: values.password });
    }
  };
  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mb-10 md:w-96">
        <AuthFormHeading label="Admin Login" />
        <div className="divide-y divide-gray-200">
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
            {submitError && (
              <SubmitError submitError={submitError}></SubmitError>
            )}
            {responseError && (
              <Error>{responseError?.data?.errorMessage?.error}</Error>
            )}
            {isLoading ? (
              <ProcessBtn label="Submitting..." />
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </Form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default AdminLogin;
