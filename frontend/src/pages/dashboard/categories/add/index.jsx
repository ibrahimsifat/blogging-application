import { Button } from "@windmill/react-ui";
import { default as React, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import SubmitError from "../../../../components/shared/form/SubmitError";
import Error from "../../../../components/shared/ui/Error";
import { useAddCategoryMutation } from "../../../../features/category/categoriesApi";
import UseAddForm from "../../../../hooks/addForm/useAddForm";
import UseForm from "../../../../hooks/useForm";
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
const AddCategory = () => {
  const [submitError, setSubmitError] = useState([]);

  // handle form
  const {
    formState,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = UseForm({ init, validate });

  // add category
  const [addCategory, { error, isSuccess }] = useAddCategoryMutation();
  // const dispatch = useDispatch();
  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      const errorArray = Object.values(errors);
      setSubmitError(errorArray);
    } else {
      setSubmitError([]);
      const { name, description } = values;
      addCategory({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        description,
      });
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      // successNotify("Category added successfully");
      navigate("/dashboard/category");
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      {/* header */}
      <Toaster />
      <div className="flex justify-between items-center">
        <PageTitle className="">Add Category</PageTitle>
        <Link to="/dashboard/category">
          <Button>All Category</Button>
        </Link>
      </div>
      {/* form */}
      <UseAddForm
        cb={cb}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleSubmit={handleSubmit}
        state={formState}
        btnString="Add category"
      />
      {submitError && <SubmitError submitError={submitError}></SubmitError>}
      {error && <Error>{error?.data?.error}</Error>}
    </div>
  );
};

export default AddCategory;
