import React from "react";
import OldestArticles from "../../../../components/home/articles/filters-articles/OldestArticles";
import RecentArticles from "../../../../components/home/articles/filters-articles/RecentArticles";
import Categories from "../../../../components/home/recomended/Categories";
import Tags from "../../../../components/home/recomended/Tags";
import Writers from "../../../../components/home/want-follow/Writers";

import { HomeRightContainer } from "../../ui/HomeUi";

const HomeFilters = () => {
  return (
    <HomeRightContainer>
      <Categories />
      <RecentArticles />
      <Writers />
      <Tags />
      <OldestArticles />
    </HomeRightContainer>
  );
};

export default HomeFilters;
