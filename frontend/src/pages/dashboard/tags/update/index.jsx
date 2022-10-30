import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateTagForm from "../AddUpdateTagForm";

const UpdateTags = () => {
  const [formDate, setFormDate] = useState({});
  console.log("tag-edit", formDate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Tag</PageTitle>
        <Link to="/dashboard/tag/add">
          <Button>Add Tag</Button>
        </Link>
      </div>
      <AddUpdateTagForm edit setFormDate={setFormDate} />
    </div>
  );
};

export default UpdateTags;
