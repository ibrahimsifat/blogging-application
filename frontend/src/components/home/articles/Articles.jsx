import React from "react";

const Articles = () => {
  return (
    <div>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Articles;
const Article = () => {
  return (
    <div>
      <div className="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 border-b border-gray-200 my-5 shadow-sm">
        <a href="https://stackdiary.com/" className="group">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className=" rounded-lg group-hover:opacity-75 w-full h-48"
              src="https://www.gen.com.sg/wp-content/uploads/srs-investment-article-image.jpg"
              alt="Featured Photo"
            />
          </div>
        </a>

        <div className="sm:col-span-2 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center leading-none px-3 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>

              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input  bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>

              <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input  bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>
            </div>
          </div>

          <div className="mt-2">
            <a href="fg" className="group">
              <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                A Tailwind CSS Card for Displaying....
              </h4>
            </a>

            <p className="mt-1 text-sm font-normal text-skin-base leading-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate....
            </p>

            <div className="mt-3 flex items-center font-sans">
              <div className="shrink-0">
                <a href="https://stackdiary.com/">
                  <span className="sr-only">John Doe</span>

                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                    alt="Ekim Kael"
                  />
                </a>
              </div>

              <div className="ml-3">
                <p className="text-sm font-medium text-skin-inverted">
                  <a href="https://stackdiary.com" className="hover:underline">
                    John Doe
                  </a>
                </p>

                <div className="flex space-x-1 text-sm text-skin-muted">
                  <time dateTime="2022-02-01">1 Feb, 2022</time>

                  <span>3 min read time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
