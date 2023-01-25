import { Badge } from "@windmill/react-ui";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
  const { title, tag, image, slug, articleText, author, createdAt } = article;
  return (
    <div>
      <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 border-b border-gray-200 my-5 shadow-sm">
        <a href="https://stackdiary.com/" className="group">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className=" rounded-lg group-hover:opacity-75 w-full h-48"
              src={image}
              alt={title}
            />
          </div>
        </a>

        <div className="sm:col-span-2 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {tag?.map((tag) => (
                <Badge>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <Link to={`/articles/${slug}`}>
              <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                {title}
              </h4>
            </Link>

            <p className="mt-1 text-sm font-normal text-skin-base leading-5">
              {articleText}
            </p>

            <div className="mt-3 flex items-center font-sans">
              <div className="shrink-0">
                <a href="https://stackdiary.com/">
                  <span className="sr-only">{author.name}</span>

                  <img
                    className="h-10 w-10 rounded-full border"
                    src={author.avatar}
                    alt={author.name}
                  />
                </a>
              </div>

              <div className="ml-3">
                <p className="text-sm font-medium text-skin-inverted">
                  <p className="hover:underline">{author.name}</p>
                </p>

                <div className=" text-sm text-skin-muted ">
                  {moment(createdAt).format("MMM Do YYYY")} &bull;
                  <small className="text-gray-600 pl-1">3 min read time</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
