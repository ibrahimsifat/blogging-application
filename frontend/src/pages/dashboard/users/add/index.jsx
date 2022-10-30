import { Button } from "@windmill/react-ui";
import { default as React, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import AddUpdateTagForm from "../AddUpdateTagForm";

const AddUser = () => {
  const [formDate, setFormDate] = useState({});
  console.log("user-add", formDate);
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <PageTitle className="">Add User</PageTitle>
        <Link to="/dashboard/users">
          <Button>All Users</Button>
        </Link>
      </div>
      {/* form */}
      <AddUpdateTagForm setFormDate={setFormDate} />
    </div>
  );
};

export default AddUser;
