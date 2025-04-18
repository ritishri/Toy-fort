import "@fontsource/open-sans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faThreads,
  faPinterest,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineReceiptLong } from "react-icons/md";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid'

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { user, setUser, profile, setProfile } = useContext(AppContext)

  const storedUser = JSON.parse(localStorage.getItem("user"))
  const slug = storedUser?.slug

  console.log("slug",slug);
  
  const id = storedUser?.uniqueId

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        values
      );

      // console.log("Login response:", response.data)

      console.log("Values",response)

      if (response.status === 201) {
        // // console.log("Login successful:", response.data);
        // console.log("Before updating state, user:", user)

        localStorage.setItem("token",response.data.token)

        if (response.data.user) {

          let storedUser = JSON.parse(localStorage.getItem("user"))

          console.log("Setting user state:", response.data.user);
          // localStorage.setItem("user", values.first_name);

          if(!storedUser?.uniqueId){
            const uniqueId = uuidv4().split("-")[0]
            console.log(uniqueId)
            storedUser = {...response.data.user,uniqueId: `${uniqueId}`}

            localStorage.setItem("user",JSON.stringify(storedUser))
            
          }
          // setUser(response.data.user);
          setUser(storedUser)
          setProfile(false)
        }

        setShowLoginForm(!showLoginForm);
      }
    } catch (err) {
      console.log(
        "Login error:",
        err.response ? err.response.data : err.message
      );
    }
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setProfile(false);
  };

  return (
    <div className="" style={{ fontFamily: "Open Sans" }}>
      <div className="bg-red-500 h-10 flex flex-row space-x-4 p-2 text-white font-semibold text-lg">
        <a className="" href="https://www.facebook.com/toyfort/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="" href="https://x.com/toy_fort?mx=2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="" href="https://www.instagram.com/toyfort/?hl=en">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className=""
          href="https://www.youtube.com/channel/UCsgoufKQ-zDSZwpkEAcV-Ng"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="" href="https://www.linkedin.com/company/toyfort/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="" href="https://in.pinterest.com/toyfort/_saved/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a className="" href="https://api.whatsapp.com/send?phone=918744055175">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a className="" href="https://www.facebook.com/toyfort/">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a className="" href="https://www.threads.net/@toyfort/">
          <FontAwesomeIcon icon={faThreads} />
        </a>
        <marquee>
          CALL US AT 8744055175 FOR BULK ORDERS OR ANY OTHER ASSISTANCE
        </marquee>
      </div>
      <div className="flex flex-row gap-72 w-30">
        <img
          className="w-40 p-4 "
          src="https://toyfort.s3.ap-south-1.amazonaws.com/img/logo.webp"
        />

        <div className="relative w-1/3 m-5">
          <input
            className="w-full border bg-gray-50 border-gray-400 rounded-md p-2 pr-10"
            type="text"
            placeholder="Search for Toys"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 font-semibold text-xl">
          <ShoppingCartIcon className="w-9 h-9 text-gray-500 cursor-pointer" onClick={() => navigate('/cart')}  />
          {/* Wishlist icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-500"
            onClick={() => navigate(`/wishlist/${slug}-${id}`)} 
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          {user && user !== "Sign In" ? (
            <div className="relative flex items-center gap-1">
              <span
                onClick={() => setProfile(!profile)}
                className="cursor-pointer text-[#606060] text-md font-normal flex items-center gap-1"
              >
                <AccountCircleIcon className="text-[#606060] w-8 h-8" />
                {user.first_name}
                <ExpandMoreIcon className="text-[#606060]" />
              </span>

              {profile && (
                <div className="absolute right-0 top-full bg-white border rounded-lg shadow-lg z-50">
                  <div className="flex flex-col py-2">
                    <Link to={`/wishlist/${slug}-${id}` } className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1">
                      <PersonOutlineIcon fontSize="small" />
                      Profile
                    </Link>
                    <Link
                      to="/order"
                      className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                    >
                      <MdOutlineReceiptLong size={24} />
                      Orders
                    </Link>
                    <Link
                      to="/refund-requests"
                      className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                    >
                      <FiShoppingBag size={20} />
                      Refund
                    </Link>
                    <Link
                      to="/settings/edit-profile"
                      className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                    >
                      <SettingsIcon fontSize="small" className="text-base" />
                      Settings
                      <span className="absolute left-4 bottom-0 w-[50%] h-[2px] tracking-widest bg-[#bfbdbd]"></span>
                    </Link>
                    <Link
                      className="px-4 py-2 flex text-center justify-center text-sm font-thin text-[#606060] hover:bg-gray-100 cursor-pointer gap-1"
                      onClick={handleLogout}
                    >

                      <LogoutIcon fontSize="small" />
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 text-center"
                onClick={toggleLoginForm}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <button
                onClick={toggleLoginForm}
                className="text-[#606060] text-sm font-normal cursor-pointer"
              >
                {user}
              </button>
            </div>
          )}
        </div>
      </div>

      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg w-96 relative">
            {/* Manual Close Icon (X) */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-2xl"
              onClick={() => setShowLoginForm(false)} // Close login form
            >
              &times; {/* HTML entity for X (times symbol) */}
            </button>

            <h2 className="text-3xl font-medium mb-10 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                ></label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-3"
                  placeholder="Email Address"
                  name="email"
                  required
                  onChange={handleChanges}
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                ></label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 p-3"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleChanges}
                />
              </div>

              <div className="text-right mb-2">
                <a href="/forgot-password" className="text-right">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white py-2 rounded-md"
                style={{ backgroundColor: "black" }}
              >
                Login
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-500 inline-block mr-1">
                  Don't have an account?
                </p>
                <a href="/register" className="text-black font-medium">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-center gap-14 border-b-4 pb-5 border-gray-100 p-8">
        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full " href="/">
            Home
          </a>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <a className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer">
            Infants
          </a>

          {/* Dropdown Content */}
          <div className="absolute right-1 left-0 w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-5">
            <div className="flex">
              {/* Left Side  */}
              <div className="w-2/3 grid grid-cols-3 gap-2">
                <ul className="space-y-2">
                  <p className="font-semibold text-black">Baby Gear</p>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Carrier
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Walkers
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Bouncers & Rockers
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Cribs & Cradles
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      High Chair
                    </a>
                  </li>
                  <li className="font-semibold cursor-pointer">Show All</li>
                </ul>

                <ul className="space-y-2">
                  <p className="font-semibold text-black">Kids Furniture</p>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Kids Bed
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Kids Table & Chair
                    </a>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <p className="font-semibold text-black">Infant / Toddler</p>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Learning Toys
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Ball Pool
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Gift Set
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Musical Toys
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Play Gym & Playmats
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Push & Pull Along Toys
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Show All
                    </a>
                  </li>
                </ul>

                <ul className="space-y-2">
                  <p className="font-semibold text-black">Feeding & Nursing</p>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Bottle Sterilizer
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Breast Pump
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Feed Bottle & Essentials
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Soother
                    </a>
                  </li>
                  <li className="cursor-pointer">Show All</li>
                </ul>

                <ul className="space-y-2">
                  <p className="font-semibold text-black">Infant Utilites</p>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Monitor
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Bath Bed / Tub
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Baby Diaper
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Bath & Skin Care
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Food Container
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-900 cursor-pointer">
                      Food Processor
                    </a>
                  </li>
                  <li className="cursor-pointer">Show All</li>
                </ul>
              </div>

              {/* Right Side */}
              <div className="w-1/3 grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
                    alt="Pram & Stroller"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Pram & Stroller
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
                    alt="Bath & Skin Care"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Bath & Skin Care
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
                    alt="Musical Toys"
                    className="w-44 h-28"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Musical Toys
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64eda5751c0a73-90527865-14506973.webp"
                    alt="Play Gym & Playmats"
                    className="w-40 h-28 object-cover"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Play Gym & Playmats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Menu Button */}
          <a
            className="bg-red-600 text-white px-6 py-2 rounded-full cursor-pointer"
            href="/books"
          >
            Books
          </a>

          {/* Dropdown Content */}
          <div className="absolute left-[-10] w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-5">
            <div className="flex">
              {/* Left Side  */}
              <div className="w-2/3 grid grid-cols-2 gap-4">
                <a href="/books/colouring-books">
                  <p className="font-semibold text-black">Colouring Books</p>
                </a>
                <p className="font-semibold text-black">Sticker Books</p>
                <p className="font-semibold text-black">Activity Books</p>
                <p className="font-semibold text-black">Musical Books</p>
              </div>

              {/* Right Side */}
              <div className="w-1/3 grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
                    alt="Pram & Stroller"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Pram & Stroller
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
                    alt="Bath & Skin Care"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Bath & Skin Care
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
                    alt="Musical Toys"
                    className="w-44 h-28"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Musical Toys
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64eda5751c0a73-90527865-14506973.webp"
                    alt="Play Gym & Playmats"
                    className="w-40 h-28 object-cover"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Play Gym & Playmats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full" href="#">
            Toys
          </a>

          <div className="absolute -left-1/3 right-1 w-[900px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-4">
            <div className="grid grid-cols-5 gap-6">
              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Art & Craft
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Color & Makers
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Easel
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Mandala Art
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Play Dough
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Quilling
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Slime
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Doll & Doll Houses
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Doll House
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Dolls
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Pretend Play
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Kitchen Sets
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Tent House
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Beauty Set
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Medical Sets
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Sand Toys
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Tool Sets
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Musical Instruments
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Karaoke Mic
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Drum Sets
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Piano
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-bold text-black px-4 py-2">Games</p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Educational Game
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Puzzle
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Board Games
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Card Games
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Remote Control Toys
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Planes & Drones
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Bike, Car & Trucks
                  </a>
                </li>

                <p className="font-bold text-black px-4 py-2">Soft Toys</p>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Toys Organiser
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Toys Organiser Book
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Toys Organiser Shelf
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Figure & Play Sets
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Car Play Sets
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Action Figures
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Die Cast Models
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Train Play Set
                  </a>
                </li>
              </ul>

              <ul className="space-y-1">
                <p className="font-bold text-black px-4 py-2">Outdoor Play</p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Play House
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Slides, Swings & Rockers
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Battery , Car & Bikes
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Sand & Water Table
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Ride on Tricycles
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Trampoline
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4"></div>
          </div>
        </div>

        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full" href="#">
            Sports
          </a>

          <div className="absolute -left-96 w-[1100px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-2">
            <div className="flex">
              <div className="grid grid-cols-3">
                <p className="font-semibold text-black py-2 ">Badminton</p>

                <p className="font-semibold text-black  py-2">Bow & arrow</p>
                <p className="font-semibold text-black  py-2">Dart Board</p>
                <p className="font-semibold text-black  py-2">Carrom Board</p>
                <p className="font-semibold text-black  py-2">Boxing Kit</p>
                <p className="font-semibold text-black  py-2">Volley Ball</p>
                <p className="font-semibold text-black mr-3  py-2">
                  Fitness Equipment & Accessories
                </p>
                <p className="font-semibold text-black  py-2">Lawn Tennis</p>
                <p className="font-semibold text-black  py-2">Stakeboard</p>
                <p className="font-semibold text-black  py-2">Roller Stakes</p>
                <p className="font-semibold text-black  py-2">FootBall</p>
                <p className="font-semibold text-black  py-2">Cricket</p>
                <p className="font-semibold text-black  py-2">Basket Ball</p>
                <p className="font-semibold text-black  py-2">Table Tennis</p>
                <p className="font-semibold text-black  py-2">Air Hockey</p>
              </div>

              {/* right side */}

              <div className="w-1/3 grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
                    alt="Pram & Stroller"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Pram & Stroller
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
                    alt="Bath & Skin Care"
                    className="w-40 h-28"
                  />
                  <p className="absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Bath & Skin Care
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
                    alt="Musical Toys"
                    className="w-44 h-28"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Musical Toys
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64eda5751c0a73-90527865-14506973.webp"
                    alt="Play Gym & Playmats"
                    className="w-40 h-28 object-cover"
                  />
                  <p className=" absolute inset-0 flex justify-start bg-opacity-70 text-white font-semibold text-sm text-center">
                    Play Gym & Playmats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full" href="#">
            School Items
          </a>

          {/* Dropdown Container */}
          <div className="absolute right-0 w-[900px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-4">
            <div className="flex">
              {/* Left Side - Text Section (Takes 2/3 width) */}
              <div className="w-2/3 grid grid-cols-3 gap-2">
                <p className="font-semibold text-black py-2">Lunch Box</p>
                <p className="font-semibold text-black py-2">Water Bottles</p>
                <p className="font-semibold text-black py-2">
                  Pencil Cases & Pouches
                </p>
                <p className="font-semibold text-black py-2">Study Tables</p>
                <p className="font-semibold text-black py-2">Gift Sets</p>

                <ul className="space-y-1">
                  <p className="font-semibold text-black py-2">Bags</p>
                  <li>
                    <a className="inline-block py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                      School Bags
                    </a>
                  </li>
                  <li>
                    <a className="inline-block py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                      Fancy Bags
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Side - Image Section (Takes 1/3 width) */}
              <div className="w-1/3 grid grid-cols-2 gap-2">
                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64e7521580ee51-27478711-55016525.webp"
                    alt="Pram & Stroller"
                    className="w-40 h-28 object-cover"
                  />
                  <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 text-sm font-semibold text-start">
                    Pram & Stroller
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f86d5e1735a0-77038825-21768230.webp"
                    alt="Bath & Skin Care"
                    className="w-40 h-28 object-cover"
                  />
                  <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 text-sm text-start">
                    Bath & Skin Care
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64f8612b0507a0-81849579-16369615.webp"
                    alt="Musical Toys"
                    className="w-52 h-40 rounded-lg object-cover"
                  />
                  <p className="absolute bottom-0 w-full bg-opacity-60 text-white px-2 py-1 font-semibold text-sm text-start">
                    Musical Toys
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://toyfort.s3.ap-south-1.amazonaws.com/category/category_64eda5751c0a73-90527865-14506973.webp"
                    alt="Play Gym & Playmats"
                    className="w-52 h-40 object-cover"
                  />
                  <p className="absolute bottom-0 w-full bg-opacity-60 text-white font-semibold px-2 py-1 text-sm text-start">
                    Play Gym & Playmats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <a className="bg-red-600  text-white px-8 py-2 rounded-full" href="#">
            Electronics
          </a>

          <div className="absolute right-0 w-[1000px] bg-white shadow-md rounded-md hidden group-hover:block z-10 p-4">
            <div className="grid grid-cols-4 gap-6">
              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">Camera</p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Camera Accessories
                  </a>
                </li>
              </ul>
              <p className="font-semibold text-black px-4 py-2">
                Saregama Carvan
              </p>

              <ul className="space-y-1">
                <p className="font-semibold text-black px-4 py-2">
                  Video Games
                </p>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Nintendo
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    PS4
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    PS5
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Xbox
                  </a>
                </li>
                <li>
                  <a className="inline-block px-4 py-1 text-sm text-gray-500 hover:border-b-2 border-gray-500 cursor-pointer">
                    Racing Wheels
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-4">
              <p className="font-semibold text-black px-4 py-2">LED Bags</p>

              <p className="font-semibold text-black px-4 py-2">Telescope</p>

              <p className="font-semibold text-black px-4 py-2">Robot</p>
              <p className="font-semibold text-black px-4 py-2">
                Smart Watch & Trackers
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full " href="#">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// http://localhost/toyfort-master/
