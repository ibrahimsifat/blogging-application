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
      <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0 border-b border-gray-200 my-5 shadow-sm">
        <a href="https://stackdiary.com/" class="group">
          <div class="aspect-w-3 aspect-h-2">
            <img
              class=" rounded-lg group-hover:opacity-75 w-full h-48"
              src="https://www.gen.com.sg/wp-content/uploads/srs-investment-article-image.jpg"
              alt="Featured Photo"
            />
          </div>
        </a>

        <div class="sm:col-span-2 p-4">
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center leading-none px-3 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>

              <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input  bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>

              <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input  bg-gray-100 hover:bg-gray-200 cursor-pointer">
                Tag
              </span>
            </div>
          </div>

          <div class="mt-2">
            <a href="fg" class="group">
              <h4 class="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                A Tailwind CSS Card for Displaying....
              </h4>
            </a>

            <p class="mt-1 text-sm font-normal text-skin-base leading-5">
              Metus potenti velit sollicitudin porttitor magnis elit lacinia
              tempor varius, ut cras orci vitae parturient id nisi vulputate....
            </p>

            <div class="mt-3 flex items-center font-sans">
              <div class="shrink-0">
                <a href="https://stackdiary.com/">
                  <span class="sr-only">John Doe</span>

                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                    alt="Ekim Kael"
                  />
                </a>
              </div>

              <div class="ml-3">
                <p class="text-sm font-medium text-skin-inverted">
                  <a href="https://stackdiary.com" class="hover:underline">
                    John Doe
                  </a>
                </p>

                <div class="flex space-x-1 text-sm text-skin-muted">
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
