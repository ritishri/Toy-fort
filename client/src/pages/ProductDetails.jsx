import React from "react";
import "@fontsource/open-sans";
import Crousel from '../components/Crousel'

const ProductDetails = () => {
  return (
    <div className="m-6" style={{ fontFamily: "Open Sans" }}>
        <div className="text-gray-600 text-sm mt-6 ml-6  ">
          <a
            className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
            href="/"
          >
            Home /
          </a>
          <a
            className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
            href="/"
          >
            Toys /
          </a>
          <a
            className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
            href="/"
          >
            Games /
          </a>
          <a
            className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
            href="/"
          >
            Educational Games /
          </a>
          <a
            className="hover:text-red-500 mr-1 cursor-pointer text-gray-600"
            href="/"
          >
            Skillmatics Animal Kingdom
          </a>
        </div>

        <Crousel/>

    </div>
  );
};

export default ProductDetails;
