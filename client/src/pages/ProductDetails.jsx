import React, { useState, useEffect, useContext } from "react";
import "@fontsource/open-sans";
import Carousel from "../components/CarouselImages";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageModal from "../components/Message";
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
import { AppContext } from "../context/AppContext";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addCart, setAddCart] = useState(false);
  const [buyNow, setBuyNow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  const [copied, setCopied] = useState(false);
  const couponCode = "TFSILVER5";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const { slug } = useParams();

  const addProduct = () => {
    setState(state + 1);
  };

  const removeProduct = () => {
    if (state > 1) {
      setState(state - 1);
    }
  };

  const handleAskQuestion = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchBrandProducts = async () => {
      try {
        if (!slug) {
          return "No slug";
        }
        const { data } = await axios.get(`http://localhost:5000/api/${slug}`);

        const product = {
          ...data[0],
          originalPrice: data[0].price / 100,
          discountedPrice: Math.ceil(
            (data[0].price / 100) * (1 - data[0].discount_rate / 100) - 1
          ),
          imageUrl: data[0].image_default,
        };

        setProducts(product);
        console.log("Fetched Data: ", product.image_default);
      } catch (error) {
        console.error("Error fetching brand products:", error.message);
      }
    };
    fetchBrandProducts();
  }, [slug]);

  return (
    <div className="" style={{ fontFamily: "Open Sans" }}>
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

        {/* Right section  */}
        <div className="w-[48%]">
          {products && (
            <div>
              <h1 className="text-2xl font-semibold tracking-wider ">
                {products.title}
              </h1>
              <p className="mt-2">
                Brand Url:
                <span className="text-red-600">
                  {" "}
                  {products.attribute2_value}
                </span>
              </p>
              <div className="flex ml-16 text-sm gap-0.5">
                <FontAwesomeIcon className="text-gray-400 " icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <FontAwesomeIcon className="text-gray-400" icon={faStar} />
                <p className="text-gray-400">({products.rating})</p>

                <div className="flex text-gray-500 ml-96 gap-3">
                  <p>
                    {" "}
                    <FontAwesomeIcon className="mr-1" icon={faEye} />
                    {products.pageviews}
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
                  ₹{products.originalPrice}{" "}
                </span>

                <span className="text-2xl font-semibold ml-2">
                  {products.discountedPrice}{" "}
                </span>
                <span className="bg-red-500 text-white p-1">
                  -{products.discount_rate}%
                </span>

                <span className="border border-gray-400 p-2 ml-96 text-xs cursor-pointer">
                  {" "}
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope}
                  onClick={handleAskQuestion} />
                  Ask Question
                </span>
                <MessageModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  subject="Mattel Barbie Beach Doll Pink HPV19"
                />
              </p>
              <div className="flex gap-x-8 mt-4">
                <p>Status</p>
                <p className="text-green-500">In Stock</p>
              </div>

              <div className="flex gap-x-10 mt-4">
                <p>SKU</p>
                <p className="text-gray-400">{products.sku}</p>
              </div>
              <div className="mt-5 flex items-center">
                <button
                  onClick={removeProduct}
                  className="pt-3 pb-3 px-4 h-full rounded-sm border border-gray-500"
                >
                  -
                </button>
                <button className="pt-3 pb-3 px-4 h-full rounded-sm border-t border-b border-gray-500">
                  {state}
                </button>
                <button
                  onClick={addProduct}
                  className="pt-3 pb-3 px-4 h-full rounded-sm border border-gray-500"
                >
                  +
                </button>

                <div className="flex">
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 m-4 rounded-sm flex items-center"
                    onClick={(e) => {
                      addToCart(products);
                      setAddCart(true);
                      setTimeout(() => {
                        setAddCart(false);
                      }, 2000);
                    }}
                  >
                    {addCart ? (
                      <CheckIcon className="w-7 h-7 font-bold text-white" />
                    ) : (
                      <ShoppingCartIcon className="w-7 h-7 text-white" />
                    )}
                    Add to Cart
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white pt-3 pb-3 pl-6 pr-6 m-4 rounded-sm flex items-center"
                    onClick={(e) => {
                      addToCart(products);
                      setBuyNow(true);
                      setTimeout(() => {
                        setBuyNow(false);
                        navigate("/cart");
                      }, 2000);
                    }}
                  >
                    {buyNow ? (
                      <CheckIcon className="w-7 h-7 font-bold text-white" />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        icon={faBolt}
                      />
                    )}
                    Buy Now
                  </button>
                  <button className="text-gray-600 pt-3 pb-3 pl-6 pr-6 rounded-sm flex items-center">
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

      <div className="w-full mt-10 container ml-3 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-wrap border-b-slate-500 space-x-2 text-black sm:w-full">
          {["description", "shipping", "reviews", "comments", "faqs"].map(
            (tab) => (
              <button
                key={tab}
                className={`py-3 px-8 text-sm border-t border-l border-r border-gray-300 font-normal hover:text-red-500 ${
                  activeTab === tab ? "" : "bg-slate-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" && "Description"}
                {tab === "shipping" && "Shipping & Location"}
                {tab === "reviews" && "Reviews (0)"}
                {tab === "comments" && "Comments (0)"}
                {tab === "faqs" && "FAQs"}
              </button>
            )
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "description" && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">
                Skillmatics Animal Kingdom - Fun & Educational Animal Game for
                Kids
              </h2>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong>Skillmatics Animal Kingdom</strong> is an interactive
                  and educational board game that takes children on a fun-filled
                  adventure through the animal world.
                </li>
                <li>
                  Designed for kids aged 3 to 6, this game introduces young
                  learners to various animals, their habitats, and unique
                  characteristics.
                </li>
                <li>
                  Through engaging gameplay, children develop essential skills
                  like observation, logical thinking, memory, and knowledge
                  about nature.
                </li>
                <li>
                  Made with child-safe, non-toxic materials, ensuring a safe and
                  enriching experience for young minds.
                </li>
                <li>
                  The game balances learning and fun, making it ideal for early
                  childhood education.
                </li>
                <li>
                  Whether played independently or with adult supervision, it
                  provides hours of educational entertainment.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="p-4 w-full bg-white shadow-lg rounded-md">
              {/* Shipping Cost & Select Location */}
              <div className="grid grid-cols-2 gap-4 border-b pb-4">
                <div className="font-semibold text-lg">Shipping Cost</div>
                <div>
                  <span className="font-semibold text-lg">
                    Select Your Location
                  </span>
                  {/* <div className="flex gap-4 mt-2">
                  <select
                    options={countryOptions}
                    placeholder="Country"
                    onChange={handleCountryChange}
                    className="w-1/2"
                  />
                  <select
                    options={[]} // Add state options dynamically based on country
                    placeholder="State"
                    isDisabled={!selectedCountry}
                    className="w-1/2"
                  /> */}
                  {/* </div> */}
                </div>
              </div>

              {/* Shop Location */}
              <div className="mt-4">
                <h2 className=" w-full font-semibold text-lg">Shop Location</h2>
                <iframe
                  className="mt-2 w-full h-72 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.96305791531582!3d-37.81410797975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df82dfc4f%3A0x5045675218ce6e0!2sMelbourne!5e0!3m2!1sen!2sin!4v1645023491203"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="mt-4">
              <h2 className="text-sm font-semibold">Reviews (0)</h2>
              <p className="mt-10 text-gray-500">No reviews found!</p>
            </div>
          )}

          {activeTab === "comments" && (
            <div className="flex flex-col lg:flex-row gap-6 mt-4 w-full">
              <div className="w-full lg:w-1/2">
                <h2 className="text-sm font-semibold text-gray-700">
                  Comments (0)
                </h2>
                <p className="text-gray-500">
                  No comments found for this product. Be the first to comment!
                </p>
              </div>

              {/* Add Comment Section */}
              <div className="w-full lg:w-1/2 p-4 border-l mt-2">
                <h2 className="text-sm font-bold text-black mb-10 ml-5">
                  Add a comment
                </h2>
                <form className="flex flex-col space-y-4 w-full ml-5">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <input
                      className="w-full sm:w-1/2 border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-black"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="w-full sm:w-1/2 border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-black"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Comment Box */}
                  <textarea
                    className="w-full h-28 border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-black"
                    placeholder="Write your comment here..."
                  />

                  {/* Submit Button */}
                  <button className="w-24 p-2 bg-black text-white font-medium hover:bg-gray-800 transition">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === "faqs" && (
            <div className="mt-4">
              <ul className="mt-2 space-y-4 list-disc pl-5">
                <li>
                  <span className="font-bold text-sm">
                    What is Skillmatics Animal Kingdom?
                  </span>
                  <ul className="list-none pl-5">
                    <li className="ml-2 mt-6 text-sm">
                      Skillmatics Animal Kingdom is an educational board game
                      designed to teach children about different animals, their
                      habitats, and characteristics through engaging gameplay.
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="font-bold text-sm">
                    What age group is Skillmatics Animal Kingdom suitable for?
                  </span>
                  <ul className="list-none pl-5">
                    <li className="ml-2 mt-6 text-sm">
                      Skillmatics Animal Kingdom is suitable for children aged 3
                      to 6 years, making it a perfect tool for early learning
                      and development.
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="font-bold text-sm">
                    What skills can kids develop with Skillmatics Animal
                    Kingdom?
                  </span>
                  <ul className="list-none pl-5">
                    <li className="ml-2 mt-6 text-sm">
                      This game helps children develop observational skills,
                      logical thinking, memory, and knowledge about animals and
                      their habitats.
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="font-bold text-sm">
                    Is Skillmatics Animal Kingdom safe for children?
                  </span>
                  <ul className="list-none pl-5">
                    <li className="ml-2 mt-6 text-sm">
                      Yes, Skillmatics Animal Kingdom is made from child-safe,
                      non-toxic materials and follows strict safety standards to
                      ensure a safe and enjoyable learning experience.
                    </li>
                  </ul>
                </li>

                <li>
                  <span className="font-bold text-sm">
                    Does Skillmatics Animal Kingdom require adult supervision?
                  </span>
                  <ul className="list-none pl-5">
                    <li className="ml-2 mt-6 text-sm">
                      While the game is designed for independent play, adult
                      supervision can enhance the learning experience and help
                      guide younger children through the game.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
