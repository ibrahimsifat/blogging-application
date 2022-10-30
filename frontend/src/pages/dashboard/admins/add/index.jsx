import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateAdminForm from "../AddUpdateAdminForm";

const AddAdmin = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-add", formDate);
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <PageTitle className="">Add Admin</PageTitle>
        <Link to="/dashboard/admins">
          <Button>All Admin</Button>
        </Link>
      </div>
      {/* form */}
      <AddUpdateAdminForm setFormDate={setFormDate} />
    </div>
  );
};

export default AddAdmin;
