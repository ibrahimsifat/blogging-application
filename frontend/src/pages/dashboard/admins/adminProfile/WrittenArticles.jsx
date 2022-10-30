import React from "react";
import { Link } from "react-router-dom";

const WrittenArticles = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 lg:gap-6 mt-5 ">
      <div className="flex flex-col justify-center shadow-md hover:shadow-slate-700 rounded-md">
        <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
          <img
            className="w-full h-60"
            src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="image"
          />
        </div>

        <div className="flex space-x-3 mt-5 pl-5">
          <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
            Engineering
          </span>
          <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
            Design
          </span>
        </div>

        <div className="p-5">
          <Link
            to="/article/articles-slug"
            className="text-2xl font-bold mt-5 text-white"
          >
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-300 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center shadow-md hover:shadow-slate-700 rounded-md">
        <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
          <img
            className="w-full h-60"
            src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="image"
          />
        </div>

        <div className="flex space-x-3 mt-5 pl-5">
          <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
            Engineering
          </span>
          <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
            Design
          </span>
        </div>

        <div className="p-5">
          <Link
            to="/article/articles-slug"
            className="text-2xl font-bold mt-5 text-white"
          >
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-300 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center shadow-md hover:shadow-slate-700 rounded-md">
        <div className="w-full aspect-w-13 aspect-h-9 rounded-sm overflow-hidden">
          <img
            className="w-full h-60"
            src="https://images.unsplash.com/photo-1630702379394-e202e2fbe01e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="image"
          />
        </div>

        <div className="flex space-x-3 mt-5 pl-5">
          <span className="bg-emerald-100 px-3 py-1 text-sm rounded-full text-emerald-600">
            Engineering
          </span>
          <span className="bg-amber-100 px-3 py-1 text-sm rounded-full text-amber-600">
            Design
          </span>
        </div>

        <div className="p-5">
          <Link
            to="/article/articles-slug"
            className="text-2xl font-bold mt-5 text-white"
          >
            20 Myths About TailwindCSS
          </Link>
          <p className="text-gray-300 mt-3">
            Equity agile development burn rate buyer strategy founders user
            experience customer. Termsheet series A financing direct mailing
            infrastructure research & development twitter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrittenArticles;
