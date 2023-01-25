import moment from "moment";
import React from "react";

import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import ArticlesComments from "../../../../components/home/articles/articlesDetails/articlecomments";
import ArticleLikeUnlike from "../../../../components/home/articles/articlesDetails/ArticleLikeUnlike";
import ReadMoreArticle from "../../../../components/home/articles/articlesDetails/ReadMoreArticle";
import RelatedTags from "../../../../components/home/articles/articlesDetails/RelatedTags";
import SocialShare from "../../../../components/home/articles/articlesDetails/SocialShare";
import RelatedArticles from "../../../../components/home/articles/relatedArticles/RelatedArticles";
import Navbar from "../../../../components/home/navigation/Navbar";
import { useGetArticleQuery } from "../../../../features/articles/articlesApi";
import { HomeCenterContainer } from "../../ui/HomeUi";
const ArticlesDetails = () => {
  const { articleSlug } = useParams();
  console.log(articleSlug);
  const { data: article } = useGetArticleQuery(articleSlug);
  const { title, tag, image, slug, articleText, author, createdAt } =
    article || {};
  console.log(article);
  return (
    <HomeCenterContainer>
      <Navbar />

      {/* <!--author--> */}
      <div className="  py-6 mx-auto ">
        <a href="#_" className="block">
          <img className="object-cover w-full h-full" src={image} alt={title} />
        </a>

        <div className="mt-2">
          {/* <!--post heading--> */}
          <p className="sm:text-xl lg:text-2xl font-bold text-purple-500  hover:underline">
            {title}
          </p>

          {/* <!--author avatar--> */}
          <div className="flex space-x-3 mt-5">
            <div className="shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover "
                src={author?.avatar}
                alt="imag1e"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{author?.name}</span>
              <span className="text-gray-500">
                {moment(createdAt).format("MMM Do YYYY")} &bull; 6 min read
              </span>
            </div>
          </div>
        </div>

        {/* <!--end post header-->
                        	<!--post content--> */}
        <div className=" mx-auto text-2xl  mt-4 rounded">
          {/* <!--content body--> */}
          <div>
            {/* <p className="mt-2 py-8 md:px-10 px-4">{htmlParser(articleText)}</p> */}
            {articleText && <p>{parse(articleText)}</p>}
          </div>
        </div>
      </div>
      <div className="space-y-7">
        <ArticleLikeUnlike />
        <ReadMoreArticle />
        <RelatedTags />
        <SocialShare />
        <RelatedArticles />
        <ArticlesComments />
      </div>
    </HomeCenterContainer>
  );
};

export default ArticlesDetails;
