import React from "react";
import PageTitle from "../../../../components/dashboard/Typography/PageTitle";
import ProfileCard from "./ProfileCard";
import WrittenArticles from "./WrittenArticles";

const SubAdminProfile = () => {
  return (
    <div className="mt-10">
      <ProfileCard />
      <div className="">
        <PageTitle className="">Username Written Articles: 3</PageTitle>
        <WrittenArticles />
      </div>
    </div>
  );
};

export default SubAdminProfile;
