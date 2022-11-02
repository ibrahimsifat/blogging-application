import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import SubmitError from "../../../../components/shared/form/SubmitError";
import { useAddCategoryMutation } from "../../../../features/category/categoriesApi";
import AddUpdateCategoryForm from "../AddUpdateCategoryForm";

const AddCategory = () => {
  const [submitError, setSubmitError] = useState([]);
  const [formValue, setFormValue] = useState({});
  // add category
  const [addCategory, { error }] = useAddCategoryMutation();
  const dispatch = useDispatch();
  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      const obj = errors;
      const errorArray = Object.values(obj);
      setSubmitError(errorArray);
    } else {
      setFormValue(values);

      dispatch(addCategory(formValue));
    }
  };
  console.log(error);
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <PageTitle className="">Add Category</PageTitle>
        <Link to="/dashboard/category">
          <Button>All Category</Button>
        </Link>
      </div>
      {/* form */}
      <AddUpdateCategoryForm cb={cb} />
      {submitError && <SubmitError submitError={submitError}></SubmitError>}
      {/* {error && <Error>{error?.data?.error}</Error>}   */}
    </div>
  );
};

export default AddCategory;
