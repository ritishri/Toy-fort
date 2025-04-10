import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/outline";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Card = ({
  imageUrl,
  title,
  originalPrice,
  discountedPrice,
  slug,
  onClick,
}) => {
  const { setWishlist, wishlist, addToWishlist, removeFromWishlist } =
    useContext(AppContext);

  // Check if the item is already in the wishlist
  const [isWishListed, setIsWishListed] = useState(false);
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    if (Array.isArray(wishlist) && wishlist.length > 0) {
      setIsWishListed(wishlist.some((item) => item.title === title));
    }
  }, [wishlist, title]);

  console.log("Wishlist in UI:", wishlist);
  console.log("Checking title:", title);
  console.log(
    "Result:",
    wishlist.some((item) => item.title === title)
  );

  // let isWishListed = wishlist.some((item) => item.slug === slug)
  // console.log("isWishListed",isWishListed);

  // const handleWishList = async (e) => {
  //   e.stopPropagation()

  //   try {
  //     if (isWishListed) {
  //       await removeFromWishlist(slug)
  //       setIsWishListed(false)
  //     } else {
  //       await addToWishlist({ imageUrl, title, originalPrice, discountedPrice, slug })
  //       setIsWishListed(true)
  //     }
  //   } catch (error) {
  //     console.log("Error updating wishlist",error);

  //   }

  // };

  const handleIcon = () => {
    if (isWishListed) {
      setIsWishListed(false);
    }
    setIsWishListed(true);
  };

  const handleWishList = async (e) => {
    e.stopPropagation();
    try {
      if (isWishListed) {
        await removeFromWishlist(slug);
      } else {
        await addToWishlist({
          imageUrl,
          title,
          originalPrice,
          discountedPrice,
          slug,
        });
      }
    } catch (error) {
      console.log("Error updating wishlist", error);
    }
  };

  const addToCart = async ({
    imageUrl,
    title,
    originalPrice,
    discountedPrice,
    slug,
  }) => {
    // console.log(imageUrl,title,originalPrice,discountedPrice,slug)

    try {
      const token = localStorage.getItem("token");
      // console.log("Token",token)

      const response = await axios.post(
        "http://localhost:5000/api/addToCart",
        { imageUrl, title, originalPrice, discountedPrice, slug },

        { headers: { Authorization: `Bearer ${token}` } }
      );
      // console.log("Add Cart Response", response)

      if (response.data) {
        console.log("Product Added successfully");
        setAddCart(true);
      }

      setTimeout(() => {
        setAddCart(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div
      className="p-3 w-[280px] shadow-lg border border-gray-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute top-2 left-2 w-8 h-8 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          10%
        </div>

        <img
          src={imageUrl}
          alt={title || "Book Image"}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="flex-col absolute gap-2 bottom-1 right-2 hidden group-hover:flex">
          <button
            className="p-2 bg-[#f3f5f5] rounded-full shadow-md hover:bg-gray-100"
            onClick={handleWishList}
          >
            <svg
              onClick={handleIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill={isWishListed ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={isWishListed ? "red" : "currentColor"}
              className="w-7 h-7 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          {/* <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <ShoppingCartIcon onClick={(e)=>{e.stopPropagation(); addToCart({imageUrl,title,originalPrice,discountedPrice,slug})}} className="w-7 h-7 text-black" />
          </button> */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({imageUrl,title,originalPrice,discountedPrice,slug});
            }}
            className={`p-2 rounded-full shadow-md transition-all duration-300 ${
              addCart ? 'bg-green-500' : 'bg-white'
            }`}
          >
            {addCart ? (
              <CheckIcon className="w-7 h-7 text-white" />
            ) : (
              <ShoppingCartIcon className="w-7 h-7 text-black" />
            )}
          </button>

        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-base text-gray-800 truncate hover:text-red-600">
          {title || "Unknown Book Title"}
        </h2>

        <div className="flex items-center mt-2">
          <span className="text-base text-gray-400 font-bold line-through mr-2">
            ₹{originalPrice || "0"}
          </span>
          <span className="text-base font-bold text-black-600">
            ₹{discountedPrice || "0"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
