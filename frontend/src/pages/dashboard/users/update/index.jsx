import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateTagForm from "../AddUpdateTagForm";

const UpdateUser = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-edit", formDate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle className="">Update User Details</PageTitle>
        <Link to="/dashboard/user/add">
          <Button>Add User</Button>
        </Link>
      </div>
      <AddUpdateTagForm edit setFormDate={setFormDate} />
    </div>
  );
};

export default UpdateUser;
