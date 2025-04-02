import React, { useContext } from "react";
import "@fontsource/open-sans";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const { wishlist } = useContext(AppContext);

  console.log("wishlist", wishlist);

  const navigate = useNavigate();

  const handleDetails = (productSlug) => {
    navigate(`/${productSlug}`);
  };

  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <div className="text-gray-600 text-sm mt-6 ml-10">
        <a className="hover:text-red-500 mr-1 cursor-pointer text-gray-400" href="/">
          Home /
        </a>
        <span className="mr-1 text-gray-600">Wishlist</span>
      </div>
      <div className="p-4">
        {wishlist.length > 0 ? (
          <div className="w-full ml-5 mt-5">
            <div className="w-full grid grid-cols-4 gap-4">
              {wishlist.map((item, index) => (
                <Card
                  className="border border-black cursor-pointer"
                  key={index}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  originalPrice={item.originalPrice}
                  discountedPrice={item.discountedPrice}
                  onClick={() => handleDetails(item.slug)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>No items in wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
