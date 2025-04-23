import React, { useContext, useState } from "react";
import { ChevronRight } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // State to control visibility of stock options and hr
  const [showStockOptions, setShowStockOptions] = useState(false);
  const [showDiscounts, setShowDiscounts] = useState(true); // Manage the visibility of the discounts section
  const [showGender, setShowGender] = useState(true);
  const [showAge, setShowAge] = useState(true);

  const navigate = useNavigate();

  const { sidebarFilter } = useContext(AppContext);

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
              <input type="checkbox" id="outOfStock" />
              <label htmlFor="outOfStock" className="ml-2">
                Out of Stock
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="inStock" />
              <label htmlFor="inStock" className="ml-2">
                In Stock
              </label>
            </div>
            <div className="mt-1">
              <input type="checkbox" id="allItems" />
              <label htmlFor="allItems" className="ml-2">
                All Items
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
            />
          </div>
          {/* Arrow icon beside max input */}
          <button className="p-2 border bg-gray-100">
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
          <p className="font-medium mb-2">Aayushi</p>
          <p className="font-medium mb-2">Abracadabra</p>
          <p className="font-medium mb-2">Adidas</p>
          <p className="font-medium mb-2">Aditi Toys</p>
          <p className="font-medium mb-2">Aiko</p>
          <p className="font-medium mb-2">Alexa</p>
          <p className="font-medium mb-2">Alter</p>
          <p className="font-medium mb-2">Anam</p>
          <p className="font-medium mb-2">Annie</p>
          <p className="font-medium mb-2">Apsara</p>
          <p className="font-medium mb-2">Arctic Fox</p>
          <p className="font-medium mb-2">Avenir</p>
          <p className="font-medium mb-2">Avent</p>
          <p className="font-medium mb-2">B.Box</p>
          <p className="font-medium mb-2">Baby Brezza</p>
          <p className="font-medium mb-2">Baby Forest</p>
          <p className="font-medium mb-2">Baby Xpress</p>
          <p className="font-medium mb-2">Backyard</p>
          <p className="font-medium mb-2">Balak Creation</p>
          <p className="font-medium mb-2">Barbie</p>
          <p className="font-medium mb-2">Baybee</p>
          <p className="font-medium mb-2">Bbluv</p>
          <p className="font-medium mb-2">Bburago</p>
          <p className="font-medium mb-2">Beaba</p>
          <p className="font-medium mb-2">Bee</p>
          <p className="font-medium mb-2">Bentley</p>
          <p className="font-medium mb-2">Bestway</p>
          <p className="font-medium mb-2">Binca</p>
          <p className="font-medium mb-2">Blix</p>
          <p className="font-medium mb-2">Bloomingo</p>
          <p className="font-medium mb-2">Blue Orange</p>
          <p className="font-medium mb-2">Boat</p>
          <p className="font-medium mb-2">Book Cob
          </p>
          <p className="font-medium mb-2">Bookoli</p>
          <p className="font-medium mb-2">BrainSmith</p>
          <p className="font-medium mb-2">Buzz Bee
          </p>
          <p className="font-medium mb-2">CamelBak</p>
          <p className="font-medium mb-2">Casio</p>
          <p className="font-medium mb-2">Cetaphil</p>
          <p className="font-medium mb-2">Chalk & Chuckles
          </p>
          <p className="font-medium mb-2">Chanak</p>
          <p className="font-medium mb-2">Chessbazaar</p>
          <p className="font-medium mb-2">Chicco</p>
          <p className="font-medium mb-2">Clever Kids</p>
          <p className="font-medium mb-2">Color Clash</p>
          <p className="font-medium mb-2">Cosco</p>
          <p className="font-medium mb-2">Crayola</p>
          <p className="font-medium mb-2">Creative's</p>
          <p className="font-medium mb-2">Cry Babies</p>
          <p className="font-medium mb-2">Curious Cub</p>
          <p className="font-medium mb-2">Dash</p>
          <p className="font-medium mb-2">Disney</p>
          <p className="font-medium mb-2">Doms</p>
          <p className="font-medium mb-2">Doodle Hog</p>
          <p className="font-medium mb-2">Dorling Kindersley</p>
          <p className="font-medium mb-2">Dr Brown</p>
          <p className="font-medium mb-2">Dr Brown's</p>
          <p className="font-medium mb-2">Dr Mady</p>
          <p className="font-medium mb-2">Dragon-I</p>
          <p className="font-medium mb-2">Dreamland</p>
          <p className="font-medium mb-2">Dreamland Publications</p>
          <p className="font-medium mb-2">Dring</p>
          <p className="font-medium mb-2">Dubblin</p>
          <p className="font-medium mb-2">Dunlop</p>
          <p className="font-medium mb-2">ELC</p>
          <p className="font-medium mb-2">EZPZ</p>
          <p className="font-medium mb-2">Educketive</p>
          <p className="font-medium mb-2">Ekta
          </p>
          <p className="font-medium mb-2">Electrobotic
          </p>
          <p className="font-medium mb-2">Elmer's
          </p>
          <p className="font-medium mb-2">Ergobaby
          </p>
          <p className="font-medium mb-2">FT Champs
          </p>
          <p className="font-medium mb-2">Faber Castell
          </p>
          <p className="font-medium mb-2">Fire Force
          </p>
          <p className="font-medium mb-2">Fisher-Price

          </p>
          <p className="font-medium mb-2">Flair
          </p>
          <p className="font-medium mb-2">Flipper
          </p>
          <p className="font-medium mb-2">Frank
          </p>
          <p className="font-medium mb-2">FujiFilm
          </p>
          <p className="font-medium mb-2">Fun Factory
          </p>
          <p className="font-medium mb-2">Fundoolabs
          </p>
          <p className="font-medium mb-2">Funskool
          </p>
          <p className="font-medium mb-2">Funvention
          </p>
          <p className="font-medium mb-2">Genie
          </p>
          <p className="font-medium mb-2">Genius Box
          </p>
          <p className="font-medium mb-2">GoDiscover
          </p>
          <p className="font-medium mb-2">Gooyo
          </p>
          <p className="font-medium mb-2">Graco
          </p>
          <p className="font-medium mb-2">Graphix
          </p>
          <p className="font-medium mb-2">Gurliez
          </p>
          <p className="font-medium mb-2">HMC Toys
          </p>
          <p className="font-medium mb-2">HOOKABA
          </p>
          <p className="font-medium mb-2">Haba
          </p>
          <p className="font-medium mb-2">Hape
          </p>
          <p className="font-medium mb-2">Happy Hop
          </p>
          <p className="font-medium mb-2">Happy Kidz
          </p>
          <p className="font-medium mb-2">Harry Potter
          </p>
          <p className="font-medium mb-2">Hasbro
          </p>
          <p className="font-medium mb-2">Hasbro Gaming
          </p>
          <p className="font-medium mb-2">Hello Friend
          </p>
          <p className="font-medium mb-2">Hilife
          </p>
          <p className="font-medium mb-2">Hindal
          </p>
          <p className="font-medium mb-2">Hinkler
          </p>
          <p className="font-medium mb-2">Hopop
          </p>
          <p className="font-medium mb-2">Hot Focus
          </p>
          <p className="font-medium mb-2">Hot Wheels
          </p>
          <p className="font-medium mb-2">Hoverpro
          </p>
          <p className="font-medium mb-2">Hubble
          </p>
          <p className="font-medium mb-2">I'm Toy
          </p>
          <p className="font-medium mb-2">IMC Toys
          </p>
          <p className="font-medium mb-2">IToys
          </p>
          <p className="font-medium mb-2">Igloo Books
          </p>
          <p className="font-medium mb-2">Imagimake
          </p>
          <p className="font-medium mb-2">Innov8
          </p>
          <p className="font-medium mb-2">Innovador
          </p>
          <p className="font-medium mb-2">Inspiia
          </p>
          <p className="font-medium mb-2">Intex
          </p>
          <p className="font-medium mb-2">Inspiia
          </p>
          <p className="font-medium mb-2">JBL
          </p>
          <p className="font-medium mb-2">JCB
          </p>
          <p className="font-medium mb-2">Jar Melo
          </p>
          <p className="font-medium mb-2">Joie
          </p>
          <p className="font-medium mb-2">Joyo
          </p>
          <p className="font-medium mb-2">Jumbo
          </p>
          <p className="font-medium mb-2">Kaby
          </p>
          <p className="font-medium mb-2">Kalakaram
          </p>
          <p className="font-medium mb-2">Kats
          </p>
          <p className="font-medium mb-2">KidKraft
          </p>
          <p className="font-medium mb-2">King Sport
          </p>
          <p className="font-medium mb-2">Kipa
          </p>
          <p className="font-medium mb-2">Kriddaank
          </p>
          <p className="font-medium mb-2">Kristal
          </p>
          <p className="font-medium mb-2">Kutuhal
          </p>
          <p className="font-medium mb-2">Laurence King
          </p>
          <p className="font-medium mb-2">Lego
          </p>
          <p className="font-medium mb-2">Little Berry
          </p>
          <p className="font-medium mb-2">Little Tikes
          </p>
          <p className="font-medium mb-2">LoveDabble
          </p>
          <p className="font-medium mb-2">Lumo
          </p>
          <p className="font-medium mb-2">Luvlap
          </p>
          <p className="font-medium mb-2">Maate
          </p>
          <p className="font-medium mb-2">Macmillan
          </p>
          <p className="font-medium mb-2">Magna-Tiles
          </p>
          <p className="font-medium mb-2">Maharaja
          </p>
          <p className="font-medium mb-2">Maisto
          </p>
          <p className="font-medium mb-2">Majorette
          </p>
          <p className="font-medium mb-2">Make Believe Ideas
          </p>
          <p className="font-medium mb-2">Make It Real
          </p>
          <p className="font-medium mb-2">Manku
          </p>
          <p className="font-medium mb-2">Mastela
          </p>
          <p className="font-medium mb-2">Mattel
          </p>
          <p className="font-medium mb-2">Mattle
          </p>
          <p className="font-medium mb-2">Mee Mee
          </p>
          <p className="font-medium mb-2">Mekashi
          </p>
          <p className="font-medium mb-2">MeliiMelissa & Doug
          </p>
          <p className="font-medium mb-2">Mercedes
          </p>
          <p className="font-medium mb-2">MetClap
          </p>
          <p className="font-medium mb-2">MetaShot
          </p>
          <p className="font-medium mb-2">Miko
          </p>
          <p className="font-medium mb-2">Miles Kelly
          </p>
          <p className="font-medium mb-2">MindWare
          </p>
          <p className="font-medium mb-2">Mindful Me
          </p>
          <p className="font-medium mb-2">Mirada
          </p>
          <p className="font-medium mb-2">Mirana
          </p>
          <p className="font-medium mb-2">Monopoly
          </p>
          <p className="font-medium mb-2">Monster High
          </p>
          <p className="font-medium mb-2">Mother Sparsh
          </p>
          <p className="font-medium mb-2">MotherCare
          </p>
          <p className="font-medium mb-2">Motorola
          </p><p className="font-medium mb-2">Mustela
          </p>


          
        </div>
      </div>

      <hr className="w-1/6 ml-6" />

      <p className="pl-6 font-medium mt-5">Characters</p>
      <p className="pl-10 font-medium mt-5 mb-7">Princess</p>

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
              <input type="checkbox" id="discount1" />
              <label htmlFor="discount1" className="ml-2">
                50-100%
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="discount2" />
              <label htmlFor="discount2" className="ml-2">
                40-50%
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="discount3" />
              <label htmlFor="discount3" className="ml-2">
                30-40%
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="discount4" />
              <label htmlFor="discount4" className="ml-2">
                20-30%
              </label>
            </div>
            <div className="mt-2">
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
              <input type="checkbox" id="gender1" />
              <label htmlFor="gender1" className="ml-2">
                Boys
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="gender2" />
              <label htmlFor="gender2" className="ml-2">
                Girls
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="gender3" />
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
              <input type="checkbox" id="age1" />
              <label htmlFor="age1" className="ml-2">
                0-18 M
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="age2" />
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
              <input type="checkbox" id="age4" />
              <label htmlFor="age4" className="ml-2">
                5-8 Y
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="age5" />
              <label htmlFor="age5" className="ml-2">
                -12 Y
              </label>
            </div>
            <div className="mt-2">
              <input type="checkbox" id="age6" />
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
