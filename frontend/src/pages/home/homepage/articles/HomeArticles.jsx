import React from "react";
import Articles from "../../../../components/home/articles/Articles";
import Navbar from "../../../../components/home/navigation/Navbar";
import { HomeCenterContainer } from "../../ui/HomeUi";

const HomeArticles = () => {
  return (
    <HomeCenterContainer>
      <Navbar />
      <Articles />
    </HomeCenterContainer>
  );
};

export default HomeArticles;
