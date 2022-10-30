import { Button } from "@windmill/react-ui";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateAdminForm from "../AddUpdateAdminForm";

const UpdateAdmin = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-edit", formDate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle className="">Update Admin Details</PageTitle>
        <Link to="/dashboard/admin/add">
          <Button>Add Admin</Button>
        </Link>
      </div>
      <AddUpdateAdminForm edit setFormDate={setFormDate} />
    </div>
  );
};

export default UpdateAdmin;
