import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateCategoryForm from "../AddUpdateCategoryForm";

const UpdateCategory = () => {
  const [formDate, setFormDate] = useState({});
  console.log("edit", formDate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Category</PageTitle>
        <Link to="/dashboard/category/add">
          <Button>Add Category</Button>
        </Link>
      </div>
      <AddUpdateCategoryForm edit setFormDate={setFormDate} />
    </div>
  );
};

export default UpdateCategory;
