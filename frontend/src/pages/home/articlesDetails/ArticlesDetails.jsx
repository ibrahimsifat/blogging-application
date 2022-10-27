import React from "react";
import Navbar from "../../../components/home/navigation/Navbar";
import RelatedArticles from "../../../components/home/relatedArticles/RelatedArticles";
import { HomeCenterContainer } from "../ui/HomeUi";
import ArticleLikeUnlike from "./ArticleLikeUnlike";
import ArticlesComments from "./articlesComments";
import CommentFrom from "./CommentFrom";
import ReadMoreArticle from "./ReadMoreArticle";
import RelatedTags from "./RelatedTags";
import SocialShare from "./SocialShare";

const ArticlesDetails = () => {
  return (
    <HomeCenterContainer>
      <Navbar />

      {/* <!--author--> */}
      <div className="  py-6 mx-auto ">
        <a href="#_" className="block">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
          />
        </a>

        <div className="mt-2">
          {/* <!--post heading--> */}
          <a
            href="#"
            className="sm:text-xl lg:text-2xl font-bold text-purple-500  hover:underline"
          >
            Django Authentication with oauth using facebook,twitter and google
          </a>

          {/* <!--author avator--> */}
          <div className="flex space-x-3 mt-5">
            <div className="shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover "
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                alt="image"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium">Ronald Matthews</span>
              <span className="text-gray-500">
                Oct 14, 2021 &bull; 6 min read
              </span>
            </div>
          </div>
        </div>

        {/* <!--end post header-->
                        	<!--post content--> */}
        <div className=" mx-auto text-2xl  mt-4 rounded">
          {/* <!--content body--> */}
          <div>
            <p className="mt-2 py-8 md:px-10 px-4">
              totam autem, iusto non, blanditiis aperiam eos nemo eveniet
              obcaecati provident aut nisi magnam nobis! Natus, reiciendis, sed
              autem sequi accusamus veniam assumenda facilis soluta ut libero
              maxime porro sunt? Corrupti doloribus nemo dicta quo, animi
              placeat dolor ipsum obcaecati deleniti nostrum. Nam, error sit.
              Minima labore consequatur sit asperiores deleniti officiis soluta
              laborum. Dolor illum eveniet laborum vel quidem tempora corporis.
              Aperiam dolor totam repudiandae nostrum a quibusdam omnis sunt
              illo quidem id, alias, numquam nam qui ratione nesciunt deleniti,
              aliquam cupiditate aliquid. Dolores, sapiente dolorem, hic velit
              in aut dolor cum magnam consectetur veniam dicta ea deleniti enim
              corrupti quisquam corporis voluptate veritatis cumque qui quae.
              Labore quo aperiam quos saepe laborum hic? Enim obcaecat
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-7">
        <ArticleLikeUnlike />
        <ReadMoreArticle />
        <RelatedTags />
        <SocialShare />
        <RelatedArticles />
        <CommentFrom />
        <ArticlesComments />
      </div>
    </HomeCenterContainer>
  );
};

export default ArticlesDetails;
