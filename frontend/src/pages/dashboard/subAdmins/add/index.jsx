import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateAdminForm from "../AddUpdateAdminForm";

const AddSubAdmin = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-add", formDate);
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <PageTitle className="">Add SubAdmin</PageTitle>
        <Link to="/dashboard/sub_admins">
          <Button>All SubAdmin</Button>
        </Link>
      </div>
      {/* form */}
      <AddUpdateAdminForm setFormDate={setFormDate} />
    </div>
  );
};

export default AddSubAdmin;
