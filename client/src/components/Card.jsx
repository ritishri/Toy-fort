import React from "react";

const Card = ({ imageUrl, title, originalPrice, discountedPrice, onClick }) => {
  return (
    <div className={`p-4 shadow-lg cursor-pointer`} onClick={onClick}>
      <div className="relative">
        <div className="absolute top-2 left-2 w-8 h-8 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          10%
        </div>
        
        {/* Book cover image */}
        <img
          src={imageUrl} // Using the imageUrl prop passed from the Books component
          alt={title || "Book Image"} // Using title prop or a fallback alt text
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Book details */}
      <div className="mt-4">
        <h2 className="text-base text-gray-800 truncate hover:text-red-600">
          {title || "Unknown Book Title"} {/* Fallback in case title is undefined */}
        </h2>

        <div className="flex items-center mt-2">
          <span className="text-base text-gray-400 line-through mr-2">
            ₹{originalPrice || "0"} {/* Fallback for originalPrice */}
          </span>
          <span className="text-base text-black-600 font-medium">
            ₹{discountedPrice || "0"} {/* Fallback for discountedPrice */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
