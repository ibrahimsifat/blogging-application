import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlesDetails from "./homepage/articles/ArticlesDetails";
import HomeArticles from "./homepage/articles/HomeArticles";

import HomeFilters from "./homepage/home-filters/HomeFilters";
import LeftNavigation from "./homepage/left-navigation/LeftNavigation";
import { HomeContainer, HomeGrid } from "./ui/HomeUi";
const Home = () => {
  return (
    <HomeContainer>
      <HomeGrid>
        {/* left site navigation */}
        <LeftNavigation />

        {/* article section */}
        <Routes>
          <Route path="/" element={<HomeArticles />} />
          <Route path="/articles/:slug" element={<ArticlesDetails />} />
          {/* <Route path="/articles/*" element={<NotFoundArticle />} /> */}
        </Routes>

        {/* section 3 */}
        <HomeFilters />
      </HomeGrid>
    </HomeContainer>
  );
};

export default Home;
