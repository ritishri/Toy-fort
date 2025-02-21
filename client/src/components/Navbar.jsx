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
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="">
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

        <div className="flex flex-row gap-2 space-x-2  pt-4 font-semibold text-lg ">
          <ShoppingCartIcon className="w-9 h-9 text-gray-500" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="text-lg text-gray-500 ">Sign in</p>
        </div>
      </div>

      <div className="flex justify-center gap-14 border-b-4 pb-5 border-gray-100 p-8">
        <div className="relative group">
          <a className="bg-red-600 text-white px-8 py-2 rounded-full " href="#">
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
                <p className="font-semibold text-black">Colouring Books</p>
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
