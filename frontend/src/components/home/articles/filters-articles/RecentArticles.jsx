import React from "react";
import { FilterSectionContainer } from "../../../shared/homeFilterSection/FilterSectionContainer";
import FilterSectionHeading from "../../../shared/homeFilterSection/FilterSectionHeading";
import FollowArticles from "../../../shared/homeFilterSection/FollowArticles";

const RecentArticles = () => {
  return (
    <FilterSectionContainer>
      <FilterSectionHeading title="Recent Articles" />
      <div className="flow-root">
        <ul role="list">
          <FollowArticles
            image={
              "https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            }
            articleTitle={" Veteran journalist covering Big Tech and society.."}
            authorName={"Jon Doe"}
          />
          <FollowArticles
            image={
              "https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            }
            articleTitle={" Veteran journalist covering Big Tech and society.."}
            authorName={"Jon Doe"}
          />
          <FollowArticles
            image={
              "https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            }
            articleTitle={" Veteran journalist covering Big Tech and society.."}
            authorName={"Jon Doe"}
          />
          <FollowArticles
            image={
              "https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            }
            articleTitle={" Veteran journalist covering Big Tech and society.."}
            authorName={"Jon Doe"}
          />
        </ul>
      </div>
    </FilterSectionContainer>
  );
};

export default RecentArticles;
