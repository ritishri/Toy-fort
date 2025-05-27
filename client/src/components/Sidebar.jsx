import React, { useContext, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  const [showStockOptions, setShowStockOptions] = useState(false);
  const [showDiscounts, setShowDiscounts] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [getBrandName, setGetBrandName] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [getCharacters, setGetCharacters] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showCat, setShowCat] = useState(null);

  const navigate = useNavigate();

  const {
    fetchDiscountProduct,
    fetchProductByAge,
    fetchProductByGender,
    fetchProductByPrice,
    fetchSubCategoryProduct,
  } = useContext(AppContext);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setShowStockOptions(!showStockOptions);
  };

  // Function to handle the toggle of the Discounts checkbox
  const handleDiscountToggle = (e) => {
    setShowDiscounts(e.target.checked);
  };

  const handleAgeToggle = (e) => {
    setShowAge(e.target.checked);
  };

  const handleGenderToggle = (e) => {
    setShowGender(e.target.checked);
  };

  const handleSidebar = (category) => {
    setActiveCategory(category);

    navigate(`/category/${category}`);
  };

  const handleSiderbarDiscount = (discount) => {
    fetchDiscountProduct(discount);
    navigate(`/products/discount?discount=${discount}`);
  };

  const handleSidebarByAge = (age) => {
    fetchProductByAge(age);
    navigate(`/products/age?age=${age}`);
  };

  const handleSidebarByGender = (gender) => {
    fetchProductByGender(gender);
    navigate(`/products/gender?gender=${gender}`);
  };

  const handleSidebarByPrice = (min, max) => {
    console.log("min", min);
    console.log("max", max);

    fetchProductByPrice(min, max);
    navigate(`/products/filter-by-price?p_min=${min}&p_max=${max}`);
  };

  const handleBrand = (item) => {
    navigate(`/brandProducts/products?brand=${item}`);
  };

  const handleCharacters = (item) => {
    navigate(`/characterProducts/products?character=${item}`);
  };

  const handleOutOfStockProduct = (item) => {
    navigate(`/stock-product/out-stock?stock=${item}`);
  };

  const handleInStockProduct = (item) => {
    navigate(`/stock-product/in-stock?stock=${item}`);
  };

  useEffect(() => {
    const getCharactersName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/characters"
        );

        const characters = response.data.map((item) => item.attribute5_value);
        console.log("characters", characters);
        setGetCharacters(characters);
      } catch (error) {
        console.log(error);
      }
    };
    const getBrandName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getbrand/name"
        );

        const brandName = response.data.map((item) => item.attribute2_value);
        // console.log("BrandName",brandName)
        setGetBrandName(brandName);
      } catch (error) {
        console.log(error);
      }
    };
    getBrandName();
    getCharactersName();
  }, []);

  const handleSidebarCategory = (cat, category) => {
    // console.log("Selected:", parent, subcategory);
    fetchSubCategoryProduct(cat, category);
    navigate(`${category}`);
  };

  const resetSidebar = () => {
    setActiveCategory(null);
  };

  return (
    <div>
      <p className="text-gray-500 mt-4 pl-6 text-sm">Home / Products</p>

      <h1 className="text-xl pl-6 font-medium mt-6">Products</h1>

      <p className="text-sm pl-6 mt-8 font-medium">Category</p>

      <div className="">
        {activeCategory === null && (
          <>
            <a
              href="/"
              className="text-base pl-10 mt-5 hover:text-red-500 hover:underline"
            >
              Home
            </a>

            <p
              onClick={() => handleSidebar("books")}
              className="text-sm pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              Books
            </p>
            <p
              onClick={() => handleSidebar("infants")}
              className="text-sm pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              Infants
            </p>
            <p
              onClick={() => handleSidebar("toys")}
              className="text-sm pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              Toys
            </p>
            <p
              onClick={() => handleSidebar("sports")}
              className="text-base pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              Sports
            </p>
            <p
              onClick={() => handleSidebar("school-items")}
              className="text-base pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              School Items
            </p>
            <p
              onClick={() => handleSidebar("electronics")}
              className="text-base pl-10 mt-1 cursor-pointer hover:text-red-500 hover:underline"
            >
              Electronics
            </p>

            <p onClick={()=>navigate('/contact')}
              href="/contact"
              className="text-base pl-10  mb-4 hover:text-red-500 hover:underline"
            >
              Contact Us
            </p>
          </>
        )}

        {activeCategory === "books" && (
          <div>
            <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
              <p onClick={resetSidebar} className="text-black cursor-pointer">
                ←
              </p>
              <span>Books</span>
            </div>

            <p
              onClick={() => handleSidebarCategory("books", "colouring-books")}
              className="pl-12 cursor-pointer text-gray-500"
            >
              Colouring Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "activity-books")}
              className="pl-12 cursor-pointer  text-gray-500"
            >
              Activity Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "activity-books")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Activity Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "sticker-books")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Sticker Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "musical-books")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Musical Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "story-books")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Story Books
            </p>
            <p
              onClick={() => handleSidebarCategory("books", "novels-books")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Novels Books
            </p>
          </div>
        )}

        {activeCategory === "infants" && (
          <div>
            <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
              <p onClick={resetSidebar} className="text-black cursor-pointer">
                ←
              </p>
              <span>Infants</span>
            </div>
            <p
              onClick={() => handleSidebarCategory("infants", "baby-gear")}
              className="pl-12 cursor-pointer  text-gray-500"
            >
              Baby Gear
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("infants", "feeding-nursing")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Feeding & Nursing
            </p>
            <p
              onClick={() => handleSidebarCategory("infants", "kids-furniture")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Kids Furniture
            </p>
            <p
              onClick={() => handleSidebarCategory("infants", "baby-bath")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Baby Bath
            </p>
            <p
              onClick={() => handleSidebarCategory("infants", "baby-bedding")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Baby Bedding
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("infants", "baby-diaper-care")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Baby Diaper Care
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("infants", "infant-utilities")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Infant Utilities
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("infants", "infants-toddlers")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Infant / Toddler
            </p>
          </div>
        )}

        {activeCategory === "toys" && (
          <div>
            <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
              <p onClick={resetSidebar} className="text-black cursor-pointer">
                ←
              </p>
              <span>Toys</span>
            </div>
            <p
              onClick={() => handleSidebarCategory("toys", "art-crafts")}
              className="pl-12 text-gray-500 cursor-pointer"
            >
              Art & Craft
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "toys-organizer")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Toys Organizer
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("toys", "blocks-building-sets")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Blocks & Building Sets
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("toys", "holi-special-gifts")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Holi Special Gifts
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "doll-doll-houses")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Doll & Doll Houses
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "figures-play-sets")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Figures & Play Sets
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "games")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Games
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "guns")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Guns
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "pools-water-funs")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Pools & Water Funs
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("toys", "musical-instruments")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Musical Instruments
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "outdoor-play")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Outdoor Play
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "pretend-play")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Pretend Play
            </p>
            <p
              onClick={() =>
                handleSidebarCategory("toys", "remote-control-toys")
              }
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Remote Control Toys
            </p>
            <p
              onClick={() => handleSidebarCategory("toys", "soft-toys")}
              className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
            >
              Soft Toys
            </p>
          </div>
        )}
      </div>

      {activeCategory === "sports" && (
        <div>
          <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
            <p onClick={resetSidebar} className="text-black cursor-pointer">
              ←
            </p>
            <span>Sports</span>
          </div>

          <p
            onClick={() => handleSidebarCategory("sports", "lunch-box")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Badminton
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "carrom-board")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Carrom Board
          </p>
          <p
            onClick={() =>
              handleSidebarCategory("sports", "fitness-equipment-accessories")
            }
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Fitness Equipment & Accessories
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "roller-skates")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Roller Skates
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "basket-ball")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Basket Ball
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "bow-and-arrow")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Bow and Arrow
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "boxing-kit")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Boxing Kit
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "lawn-tennis")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Lawn Tennis
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "football")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Football
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "table-tennis")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Table Tennis
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "dart-board")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Dart Board
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "volley-ball")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Volley Ball
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "skateboard")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Skateboard
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "cricket")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Cricket
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "air-hockey")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Air Hockey
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "squash")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Squash
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "archery-set")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Archery Set
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "pickleball")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Pickleball
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "pool-game")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Pool Game
          </p>
          <p
            onClick={() => handleSidebarCategory("sports", "golf")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Golf
          </p>
        </div>
      )}

      {activeCategory === "school-items" && (
        <div>
          <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
            <p onClick={resetSidebar} className="text-black cursor-pointer">
              ←
            </p>
            <span>School Items</span>
          </div>

          <p
            onClick={() => handleSidebarCategory("school-items", "lunch-box")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Lunch Box
          </p>
          <p
            onClick={() => handleSidebarCategory("school-items", "study-table")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Study Table
          </p>
          <p
            onClick={() =>
              handleSidebarCategory("school-items", "water-bottles")
            }
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Water Bottles
          </p>
          <p
            onClick={() => handleSidebarCategory("school-items", "gift-sets")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Gift Sets
          </p>
          <p
            onClick={() =>
              handleSidebarCategory("school-items", "pencil-cases-and-pouches")
            }
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Pencil Cases and Pouches
          </p>
          <p
            onClick={() => handleSidebarCategory("school-items", "bags")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Bags
          </p>
        </div>
      )}

      {activeCategory === "electronics" && (
        <div>
          <div className="text-md mt-2 font-semibold pl-7 flex items-center gap-1">
            <p onClick={resetSidebar} className="text-black cursor-pointer">
              ←
            </p>
            <span>Electronics</span>
          </div>

          <p
            onClick={() => handleSidebarCategory("electronics", "camera")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Camera
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "led-bags")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            LED Bags
          </p>
          <p
            onClick={() =>
              handleSidebarCategory("electronics", "saregama-carvan")
            }
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Saregama Carvan
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "telescope")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Telescope
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "kids-watch")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Kids Watch
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "video-games")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Video Games
          </p>
          <p
            onClick={() =>
              handleSidebarCategory("electronics", "smart-watch-tracker")
            }
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Smart Watch & Tracker
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "binoculars")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Binoculars
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "e-scooter")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            E-Scooter
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "headphones")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Headphones
          </p>
          <p
            onClick={() => handleSidebarCategory("electronics", "hoverboards")}
            className="text-small pl-10 mt-1 cursor-pointer ml-2 text-gray-500 hover:text-red-500 hover:underline"
          >
            Hoverboards
          </p>
        </div>
      )}

      <hr className="w-1/6 ml-6" />

      {/* Stock Checkbox and Price Section */}
      <div className="mt-5 pl-6 mb-4">
        {/* Checkbox for Stock */}
        <input
          className="font-medium rounded-sm"
          type="checkbox"
          id="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className="font-medium ml-2">
          Stock
        </label>

        {/* Conditionally render stock options when "Stock" checkbox is checked */}
        {showStockOptions && (
          <div className="mt-2">
            <div>
              <input
                type="checkbox"
                id="outOfStock"
                onClick={() => handleOutOfStockProduct("out")}
              />
              <label htmlFor="outOfStock" className="ml-2 hover:text-red-500 ">
                Out of Stock
              </label>
            </div>
            <div className="mt-1">
              <input
                type="checkbox"
                id="inStock"
                onClick={() => handleInStockProduct("in")}
              />
              <label htmlFor="inStock" className="ml-2 hover:text-red-600">
                In Stock
              </label>
            </div>
          </div>
        )}

        {/* Conditional HR that appears above Price section */}
        {showStockOptions && <hr className="w-1/6 ml-0 mt-4" />}

        {/* Price Section */}
        <p className="font-medium mt-4 mb-3">Price</p>
        <div className="flex items-center gap-2">
          <div className="w-20">
            <label htmlFor="min" className="block text-s">
              Min
            </label>
            <input
              type="number"
              id="min"
              placeholder="Min"
              className="w-full border border-gray-300 p-1 rounded mt-1 text-s"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="w-20">
            <label htmlFor="max" className="block text-s">
              Max
            </label>
            <input
              type="number"
              id="max"
              placeholder="Max"
              className="w-full border border-gray-300 p-1 rounded mt-1 text-s"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <button
            className="p-2 border bg-gray-100"
            onClick={() => handleSidebarByPrice(min, max)}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      <div className="pl-6 mt-5 font-medium mb-4">
        <h1 className="font-medium mb-4">Brands</h1>

        {/* Scrollable Brands Section */}
        <div
          className="pl-6 max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400"
          style={{ width: "200px" }}
        >
          {getBrandName.map((item, index) => (
            <p
              onClick={() => handleBrand(`${item}`)}
              className="text-sm text-gray-800 hover:text-red-500 hover:underline  cursor-pointer mb-2"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      {/* <p className="pl-6 font-medium mt-5">Characters</p>
      <p className="pl-10 font-medium mt-5 mb-7">Princess</p> */}

      <div className="pl-6 mt-5 font-medium mb-4">
        <h1 className="font-medium mb-4">Characters</h1>

        {/* Scrollable Brands Section */}
        <div
          className="pl-6 max-h-40 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400"
          style={{ width: "200px" }}
        >
          {getCharacters.map((item, index) => (
            <p
              onClick={() => handleCharacters(`${item}`)}
              className="text-sm text-gray-800 hover:text-red-500 hover:underline  cursor-pointer mb-2"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      <div className="mt-5">
        {/* Discounts checkbox */}
        <div className="pl-6">
          <input
            type="checkbox"
            id="discounts-checkbox"
            checked={showDiscounts}
            onChange={handleDiscountToggle}
            className="mr-2"
          />
          <label htmlFor="discounts-checkbox" className="font-medium">
            Discounts
          </label>
        </div>

        {/* Discount options will appear only if the checkbox is checked */}
        {showDiscounts && (
          <div className="pl-10 mt-3">
            <div>
              <input
                type="checkbox"
                id="discount1"
                onClick={() => handleSiderbarDiscount("50-100")}
              />
              <label htmlFor="discount1" className="ml-2 hover:text-red-600 ">
                50-100%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount2"
                onClick={() => handleSiderbarDiscount("40-50")}
              />
              <label htmlFor="discount2" className="ml-2 hover:text-red-600">
                40-50%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount3"
                onClick={() => handleSiderbarDiscount("30-40")}
              />
              <label htmlFor="discount3" className="ml-2 hover:text-red-600">
                30-40%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount4"
                onClick={() => handleSiderbarDiscount("20-30")}
              />
              <label htmlFor="discount4" className="ml-2 hover:text-red-600">
                20-30%
              </label>
            </div>
            <div
              className="mt-2"
              onClick={() => handleSiderbarDiscount("0-20")}
            >
              <input type="checkbox" id="discount5" />
              <label htmlFor="discount5" className="ml-2 hover:text-red-600">
                0-20%
              </label>
            </div>
          </div>
        )}
      </div>

      <hr className="w-1/6 mt-5 ml-6" />

      <div className="mt-5">
        {/* Gender checkbox */}
        <div className="pl-6">
          <input
            type="checkbox"
            id="gender-checkbox"
            checked={showGender}
            onChange={handleGenderToggle}
            className="mr-2"
          />
          <label htmlFor="gender-checkbox" className="font-medium">
            Gender
          </label>
        </div>

        {/* Discount options will appear only if the checkbox is checked */}
        {showGender && (
          <div className="pl-10 mt-3">
            <div>
              <input
                type="checkbox"
                id="gender1"
                onClick={() => handleSidebarByGender("Boys")}
              />
              <label htmlFor="gender1" className="ml-2 hover:text-red-600">
                Boys
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="gender2"
                onClick={() => handleSidebarByGender("Girls")}
              />
              <label htmlFor="gender2" className="ml-2 hover:text-red-600">
                Girls
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="gender3"
                onClick={() => handleSidebarByGender("Unisex")}
              />
              <label htmlFor="gender3" className="ml-2 hover:text-red-600">
                Unisex
              </label>
            </div>
          </div>
        )}
      </div>

      <hr className="w-1/6 mt-5 ml-6" />

      <div className="mt-5">
        {/* Age checkbox */}
        <div className="pl-6">
          <input
            type="checkbox"
            id="age-checkbox"
            checked={showAge}
            onChange={handleAgeToggle}
            className="mr-2"
          />
          <label htmlFor="age-checkbox" className="font-medium">
            Age
          </label>
        </div>

        {/* Discount options will appear only if the checkbox is checked */}
        {showAge && (
          <div className="pl-10 mt-3">
            <div>
              <input
                type="checkbox"
                id="age1"
                onClick={() => handleSidebarByAge("0-18M")}
              />
              <label htmlFor="age1" className="ml-2 hover:text-red-600">
                0-18 M
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age2"
                onClick={() => handleSidebarByAge("18-36M")}
              />
              <label htmlFor="age2" className="ml-2 hover:text-red-600">
                18-36 M
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="age3" />
              <label htmlFor="age3" className="ml-2 hover:text-red-600">
                3-5 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age4"
                onClick={() => handleSidebarByAge("5-8Y")}
              />
              <label htmlFor="age4" className="ml-2 hover:text-red-600">
                5-8 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age5"
                onClick={() => handleSidebarByAge("8-12Y")}
              />
              <label htmlFor="age5" className="ml-2 hover:text-red-600">
                8-12 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age6"
                onClick={() => handleSidebarByAge("12Y")}
              />
              <label htmlFor="age6" className="ml-2 hover:text-red-600">
                12+ Y
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
