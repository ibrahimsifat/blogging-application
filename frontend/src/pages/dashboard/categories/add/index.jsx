import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateCategoryForm from "../AddUpdateCategoryForm";

const AddCategory = () => {
  const [formDate, setFormDate] = useState({});
  console.log("add", formDate);
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
      <AddUpdateCategoryForm setFormDate={setFormDate} />
    </div>
  );
};

export default AddCategory;
