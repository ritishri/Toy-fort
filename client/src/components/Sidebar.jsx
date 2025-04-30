import React, { useContext, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sidebar = () => {
  // State to control visibility of stock options and hr
  const [showStockOptions, setShowStockOptions] = useState(false);
  const [showDiscounts, setShowDiscounts] = useState(true); // Manage the visibility of the discounts section
  const [showGender, setShowGender] = useState(true);
  const [showAge, setShowAge] = useState(true);
  const [getBrandName, setGetBrandName] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [getCharacters, setGetCharacters] = useState([]);

  const navigate = useNavigate();

  const {
    sidebarFilter,
    fetchDiscountProduct,
    fetchProductByAge,
    fetchProductByGender,
    fetchProductByPrice,
    setProductByPrice,
    productByPrice,
  } = useContext(AppContext);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setShowStockOptions(!showStockOptions); // Toggle visibility of stock options
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
    sidebarFilter(category);
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
  }

  const handleInStockProduct = (item) => {
    navigate(`/stock-product/in-stock?stock=${item}`);
  }

  useEffect(() => {
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
  }, []);

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
    getCharactersName();
  }, []);

  return (
    <div>
      <p className="text-gray-500 mt-4 pl-6 text-sm">Home / Products</p>

      <h1 className="text-xl pl-6 font-medium mt-6">Products</h1>

      <p className="text-sm pl-6 mt-8 font-medium">Category</p>

      <p className="text-base pl-10 mt-5 cursor-pointer">Home</p>
      <p
        onClick={() => handleSidebar("books")}
        className="text-base pl-10 mt-1 cursor-pointer"
      >
        Books
      </p>
      <p
        onClick={() => handleSidebar("infants")}
        className="text-small pl-10 mt-1 cursor-pointer"
      >
        Infants
      </p>
      <p
        onClick={() => handleSidebar("toys")}
        className="text-base pl-10 mt-1 cursor-pointer"
      >
        Toys
      </p>
      <p
        onClick={() => handleSidebar("sports")}
        className="text-base pl-10 mt-1 cursor-pointer"
      >
        Sports
      </p>
      <p
        onClick={() => handleSidebar("school-items")}
        className="text-base pl-10 mt-1 cursor-pointer"
      >
        School Items
      </p>
      <p
        onClick={() => handleSidebar("electronics")}
        className="text-base pl-10 mt-1 cursor-pointer"
      >
        Electronics
      </p>
      <p
        onClick={() => handleSidebar("contact us")}
        className="text-base pl-10 mt-1 mb-4 cursor-pointer"
      >
        Contact Us
      </p>

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
              <input type="checkbox" id="outOfStock"  onClick={() => handleOutOfStockProduct("out")} />
              <label htmlFor="outOfStock" className="ml-2">
                Out of Stock
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="inStock" onClick={() => handleInStockProduct("in")}/>
              <label htmlFor="inStock" className="ml-2">
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
              <label htmlFor="discount1" className="ml-2">
                50-100%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount2"
                onClick={() => handleSiderbarDiscount("40-50")}
              />
              <label htmlFor="discount2" className="ml-2">
                40-50%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount3"
                onClick={() => handleSiderbarDiscount("30-40")}
              />
              <label htmlFor="discount3" className="ml-2">
                30-40%
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="discount4"
                onClick={() => handleSiderbarDiscount("20-30")}
              />
              <label htmlFor="discount4" className="ml-2">
                20-30%
              </label>
            </div>
            <div
              className="mt-2"
              onClick={() => handleSiderbarDiscount("0-20")}
            >
              <input type="checkbox" id="discount5" />
              <label htmlFor="discount5" className="ml-2">
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
              <label htmlFor="gender1" className="ml-2">
                Boys
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="gender2"
                onClick={() => handleSidebarByGender("Girls")}
              />
              <label htmlFor="gender2" className="ml-2">
                Girls
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="gender3"
                onClick={() => handleSidebarByGender("Unisex")}
              />
              <label htmlFor="gender3" className="ml-2">
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
              <label htmlFor="age1" className="ml-2">
                0-18 M
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age2"
                onClick={() => handleSidebarByAge("18-36M")}
              />
              <label htmlFor="age2" className="ml-2">
                18-36 M
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="age3" />
              <label htmlFor="age3" className="ml-2">
                3-5 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age4"
                onClick={() => handleSidebarByAge("5-8Y")}
              />
              <label htmlFor="age4" className="ml-2">
                5-8 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age5"
                onClick={() => handleSidebarByAge("8-12Y")}
              />
              <label htmlFor="age5" className="ml-2">
                8-12 Y
              </label>
            </div>
            <div className="mt-2">
              <input
                type="checkbox"
                id="age6"
                onClick={() => handleSidebarByAge("12Y")}
              />
              <label htmlFor="age6" className="ml-2">
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
