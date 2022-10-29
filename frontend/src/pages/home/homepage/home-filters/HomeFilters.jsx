import React from "react";
import OldestArticles from "../../../../components/home/articles/filters-articles/OldestArticles";
import RecentArticles from "../../../../components/home/articles/filters-articles/RecentArticles";
import RecommendedCategories from "../../../../components/home/recommended/Categories";
import Tags from "../../../../components/home/recommended/Tags";
import WantFollowWriters from "../../../../components/home/want-follow/Writers";

import { HomeRightContainer } from "../../ui/HomeUi";

const HomeFilters = () => {
  return (
    <HomeRightContainer>
      <RecommendedCategories />
      <RecentArticles />
      <WantFollowWriters />
      <Tags />
      <OldestArticles />
    </HomeRightContainer>
  );
};

export default HomeFilters;
