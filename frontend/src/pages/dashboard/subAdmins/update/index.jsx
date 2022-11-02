import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateAdminForm from "../AddUpdateAdminForm";

const UpdateSubAdmin = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-edit", formDate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Sub Admin Details</PageTitle>
        <Link to="/dashboard/sub_admin/add">
          <Button>Add sub Admin</Button>
        </Link>
      </div>
      <AddUpdateAdminForm edit setFormDate={setFormDate} />
    </div>
  );
};

export default UpdateSubAdmin;
