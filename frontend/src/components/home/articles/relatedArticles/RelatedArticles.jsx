import React from "react";
import { Link } from "react-router-dom";

const RelatedArticles = () => {
  return (
    <>
      <h2 className="text-2xl mt-4 text-gray-500 font-bold ">
        Related Article
      </h2>
      <div className="grid lg:grid-cols-2 gap-y-14 lg:gap-10 mt-5 ">
        <div>
          <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
            <img
              className="object-cover h-60"
              src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="image"
            />
          </div>

          <div className="flex space-x-3 mt-5">
            <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
              Engineering
            </span>
            <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
              Design
            </span>
          </div>

          <Link to="/article/articles-slug" className="text-2xl font-bold mt-5">
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-500 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>

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
        <div>
          <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
            <img
              className="object-cover h-60"
              src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="image"
            />
          </div>

          <div className="flex space-x-3 mt-5">
            <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
              Engineering
            </span>
            <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
              Design
            </span>
          </div>

          <Link
            to="/articles/articles-slug"
            className="text-2xl font-bold mt-5"
          >
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-500 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>

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
        <div>
          <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
            <img
              className="object-cover h-60"
              src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="image"
            />
          </div>

          <div className="flex space-x-3 mt-5">
            <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
              Engineering
            </span>
            <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
              Design
            </span>
          </div>

          <Link to="/article/articles-slug" className="text-2xl font-bold mt-5">
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-500 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>

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
      </div>
    </>
  );
};

export default RelatedArticles;
