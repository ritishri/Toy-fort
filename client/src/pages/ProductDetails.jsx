import React, { useState, useEffect } from "react";
import "@fontsource/open-sans";
import Carousel from "../components/CarouselImages";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faStar,
  faTags,
  faEnvelope,
  faEye,
  faHeart,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faPinterest,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(1);

  const [copied, setCopied] = useState(false);
  const couponCode = "TFSILVER5";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const { attribute2_value, slug } = useParams();

  const addProduct = () => {
    setState(state + 1);
  };

  const removeProduct = () => {
    if (state > 1) {
      setState(state - 1);
    }
  };

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        if (!slug) {
          return "No slug";
        }
        const { data } = await axios.get(`http://localhost:5000/api/${slug}`);
        setProducts(data);
        console.log("Fetched Data: ", data);
      } catch (error) {
        console.error("Error fetching brand products:", error.message);
      }
    };
    fetchBrandProducts();
  }, [slug]);

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

      <div className="flex">
        {/* Left section */}
        <div className="w-[52%]">
          <Carousel />
        </div>

        {/*Right section  */}
        <div className="">
          {products.length > 0 && (
            <div>
              <h1 className="text-2xl font-semibold tracking-wider ">
                {products[0].title}
              </h1>
              <p className="mt-2">
                Brand Url:
                <span className="text-red-600">
                  {" "}
                  {products[0].attribute2_value}
                </span>
              </p>
              <div className="flex ml-16 text-sm gap-0.5">
                <FontAwesomeIcon className="text-gray-400 " icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <p className="text-gray-400">({products[0].rating})</p>

                <div className="flex text-gray-500 ml-96 gap-3">
                  <p>
                    {" "}
                    <FontAwesomeIcon className="mr-1" icon={faEye} />
                    {products[0].pageviews}
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon className="mr-1" icon={faHeart} />0
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon className="mr-1" icon={faMessage} />0
                  </p>
                </div>
              </div>

              <p className="mt-6">
                <span className="text-[#9a9a9a] line-through text-2xl font-semibold">
                  ₹{products[0].price / 100}{" "}
                </span>

                <span className="text-2xl font-semibold ml-2">
                  {Math.ceil(
                    (products[0].price / 100) *
                      (1 - products[0].discount_rate / 100)
                  ) - 1}{" "}
                </span>
                <span className="bg-red-500 text-white p-1">
                  -{products[0].discount_rate}%
                </span>

                <span className="border border-gray-400 p-2 ml-96 text-xs">
                  {" "}
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                  Ask Question
                </span>
              </p>
              <div className="flex gap-x-8 mt-4">
                <p>Status</p>
                <p className="text-green-500">In Stock</p>
              </div>

              <div className="flex gap-x-10 mt-4">
                <p>SKU</p>
                <p className="text-gray-400">{products[0].sku}</p>
              </div>

              <div className="mt-5 flex ">
                <button
                  onClick={removeProduct}
                  className="pt-3 pb-3 pl-4 pr-4 rounded-sm flex border border-gray-500 items-center "
                >
                  -
                </button>
                <button className="pt-3 pb-3 pl-4 pr-4 rounded-sm flex border-t border-b border-gray-500 items-center ">
                  {state}
                </button>
                <button
                  onClick={addProduct}
                  className="pt-3 pb-3 pl-4 pr-4 rounded-sm flex border border-gray-500 items-center"
                >
                  +
                </button>

                <div className="flex">
                  <button className="bg-red-600  hover:bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 m-4 rounded-sm flex items-center">
                    <ShoppingCartIcon className="w-5 h-5 mr-2 text-white" />
                    Add to Cart
                  </button>
                  <button className="bg-red-600 hover:bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 m-4 rounded-sm flex items-center">
                    <FontAwesomeIcon
                      className="w-5 h-5 mr-2 text-white"
                      icon={faBolt}
                    />
                    Buy Now
                  </button>
                  <button className=" text-gray-600 pt-3 pb-3 pl-6 pr-6 rounded-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 text-gray-500 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Add to wishlist
                  </button>
                </div>
              </div>

              <div className="" style={{ fontFamily: "Open Sans" }}>
                <div className="flex gap-1 m-4">
                  <p className="font-md text-md tracking-wide p-2">Share:</p>
                  <div className="flex text-gray-500 gap-3 m-2">
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=http://localhost/toyfort-master/blog/toys/a-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india"
                      target="_blank"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="text-gray-500 w-5 h-5 hover:text-black"
                        icon={faFacebook}
                      />
                    </a>
                    <a
                      href="https://x.com/intent/post?url=http%3A%2F%2Flocalhost%2Ftoyfort-master%2Fblog%2Ftoys%2Fa-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india&text=A%20Complete%20Guide%20to%20Buying%20Safe%20and%20Fun%20Toys%20for%20Kids%20in%20India"
                      target="_blank"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="text-gray-500 w-5 h-5 hover:text-black"
                        icon={faTwitter}
                      />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?text=A%20Complete%20Guide%20to%20Buying%20Safe%20and%20Fun%20Toys%20for%20Kids%20in%20India%20-%20http://localhost/toyfort-master/blog/toys/a-complete-guide-to-buying-safe-and-fun-toys-for-kids-in-india"
                      target="_blank"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="text-gray-500 w-5 h-5 hover:text-black"
                        icon={faWhatsapp}
                      />
                    </a>
                    <a
                      href="https://www.pinterest.com/pin/create/button/?url=http://localhost/toyfort-master/blog/toys/make-the-most-amazing-words-with-a-word-maker&media=http://localhost/toyfort-master/uploads/blog/202306/img_thumb_649e881be32697-09958034-44140577.jpg"
                      target="_blank"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="text-gray-500 w-5 h-5 hover:text-black"
                        icon={faPinterest}
                      />
                    </a>
                    <a
                      href="https://www.pinterest.com/pin/create/button/?url=http://localhost/toyfort-master/blog/toys/make-the-most-amazing-words-with-a-word-maker&media=http://localhost/toyfort-master/uploads/blog/202306/img_thumb_649e881be32697-09958034-44140577.jpg"
                      target="_blank"
                      className=""
                    >
                      <FontAwesomeIcon
                        className="text-gray-500 w-5 h-5 hover:text-black"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg tracking-wider">
                <h1 className="text-2xl font-extrabold flex items-center">
                  <faTags className="text-yellow-500 mr-2" /> Offers
                </h1>
                <div className="mt-4 p-4 border rounded-lg text-center">
                  <p className="font-semibold text-sm">
                    Coupon Code:{" "}
                    <span className="font-bold text-sm">{couponCode}</span>
                  </p>
                  <p className="text-gray-600 mt-1 text-sm">
                    Celebrate Toy Fort's Silver Jubilee. No Limits, Just Big
                    Savings!
                  </p>

                  {copied ? (
                    <button
                      onClick={copyToClipboard}
                      className="mt-3 bg-green-600 text-white text-sm px-4 py-2 rounded-md  transition"
                    >
                      Copied
                    </button>
                  ) : (
                    <button
                      onClick={copyToClipboard}
                      className="mt-3 bg-red-600 hover:bg-red-500 text-white text-sm px-4 py-2 rounded-md transition"
                    >
                      Copy Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
