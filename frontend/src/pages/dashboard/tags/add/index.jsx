import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateTagForm from "../AddUpdateTagForm";

const AddTags = () => {
  const [formDate, setFormDate] = useState({});
  console.log("tag-add", formDate);
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <PageTitle className="">Add Tag</PageTitle>
        <Link to="/dashboard/tags">
          <Button>All Tag</Button>
        </Link>
      </div>
      {/* form */}
      <AddUpdateTagForm setFormDate={setFormDate} />
    </div>
  );
};

export default AddTags;
