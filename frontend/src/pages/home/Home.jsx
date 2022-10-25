import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import OldestArticles from "../../components/home/oldestArticles/OldestArticles";
import RecentArticles from "../../components/home/recent-articles/RecentArticles";
import Categories from "../../components/home/recomendedCategory/Categories";
import Tags from "../../components/home/tags/Tags";
import Writers from "../../components/home/want-follow/Writers";
import ArticlesDetails from "./articlesDetails/ArticlesDetails";
import {
  HomeContainer,
  HomeGrid,
  HomeLeftContainer,
  HomeLeftFixedContainer,
  HomeProfileContainer,
  HomeRightContainer,
} from "./ui/HomeUi";
const Home = () => {
  return (
    <HomeContainer>
      <HomeGrid>
        {/* section 1 */}
        <HomeLeftContainer>
          <HomeLeftFixedContainer>
            <AiFillHome size={24} />
            <IoIosNotifications size={24} />
            <BiEdit size={24} />
          </HomeLeftFixedContainer>
          <HomeProfileContainer>
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              className="h-10 w-10 mt-80 "
              alt=""
            />
          </HomeProfileContainer>
        </HomeLeftContainer>
        {/* section 2 */}
        {/* <HomeArticles /> */}
        <ArticlesDetails />

        {/* section 3 */}
        <HomeRightContainer>
          <Categories />
          <RecentArticles />
          <Writers />
          <Tags />
          <OldestArticles />
        </HomeRightContainer>
      </HomeGrid>
    </HomeContainer>
  );
};

export default Home;
