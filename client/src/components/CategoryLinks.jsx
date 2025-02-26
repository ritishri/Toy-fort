import React from "react";
import "@fontsource/open-sans";

const CategoryLinks = () => {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <p className="text-gray-600 text-sm mt-2 pl-6 pr-6">
        <a className="hover:text-red-500 cursor-pointer text-gray-400" href="/">
          Home
        </a>
        / Blog
      </p>
      <br />
      <p className="ml-7 font-semibold text-2xl">Blog</p>

      <div>
        <div className="flex flex-row justify-center items-center gap-3 align-middle blog-categories">
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/blog"
          >
            All
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/infants"
          >
            Infants
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/toys"
          >
            Toys
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/sports"
          >
            Sports
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/school-items"
          >
            School Items
          </a>
          <a
            className="bg-gray-100 pt-2 pr-3 pl-3 pb-2 rounded-md text-sm text-gray-400 focus:bg-black focus:text-white "
            href="/electronics"
          >
            Electronics
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryLinks;
