import React, { useState } from "react";
import {
  FaHome,
  FaShoppingCart,
  FaFileInvoice,
  FaBoxOpen,
  FaDollarSign,
  FaFlag,
  FaCog,
  FaThLarge,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  const toggleOrdersDropdown = () => {
    setIsOrdersOpen(!isOrdersOpen);
  };

  return (
    <div
      style={{ backgroundColor: "#343B4A" }}
      className="text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col"
    >
      <div className="p-4">
        <h1 className="text-xl text-center">
          <span className="font-bold">Toyfort</span> Panel
        </h1>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 mt-6">
          {/* Profile Icon */}
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          {/* Name and Online Status */}
          <div>
            <p className="text-sm mb-1">Piyush Gupta</p>
            <div className="flex items-center space-x-1">
              {/* Green Dot for Online Indicator */}
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="overflow-y-auto flex-grow pr-2">
        <ul className="p-4 space-y-6">
          {/* Navigation Heading */}
          <li className="text-gray-400 text-xs mb-6">NAVIGATION</li>
          <li className="flex items-center space-x-2">
            <FaHome />
            <p className="text-sm">Home</p>
          </li>


          <li className="flex items-center space-x-2">
            <a
              href="/admin/navigation"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Navigation</p>
            </a>
          </li>


          <li className="flex items-center space-x-2">
            <a
              href="/admin/slider"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Slider</p>
            </a>
          </li>




          <li className="flex items-center space-x-2">
            <FaCog />
            <p className="text-sm">Homepage Manager</p>
          </li>

          {/* Orders Heading */}
          <li className="text-gray-400 text-xs mb-2">ORDERS</li>
          <li className="flex items-center space-x-2">
            <FaShoppingCart />
            <p className="text-sm">Orders</p>
          </li>



          <li className="flex items-center space-x-2">
            <a
              href="/admin/digital-sales"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Digital Sales</p>
            </a>
          </li>



          <li className="flex items-center space-x-2">
            <FaDollarSign />
            <p className="text-sm">Earnings</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaCog />
            <p className="text-sm">Payouts</p>
          </li>

           <li className="flex items-center space-x-2">
            <a
              href="/admin/refund-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Refund Requests</p>
            </a>
          </li>

          {/* Products Heading */}
          <li className="text-gray-400 text-xs mt-4 mb-2">PRODUCTS</li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Products</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Featured Products</p>
          </li>


          <li className="flex items-center space-x-2">
            <a
              href="/admin/quote-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Quote Requests</p>
            </a>
          </li>



          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Categories</p>
          </li>



          <li className="flex items-center space-x-2">
            <a
              href="/admin/custom-fields"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Custom Fields</p>
            </a>
          </li>


          

          {/* Content Heading */}
          <li className="text-gray-400 text-xs mt-4 mb-2">CONTENT</li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Pages</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Blog</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Location</p>
          </li>

          {/* Membership Heading */}
          <li className="text-gray-400 text-xs mt-4 mb-2">MEMBERSHIP</li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Users</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Membership Plans</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Shop Opening Requests</p>
          </li>

          {/* Settings Heading */}
          <li className="text-gray-400 text-xs mt-4 mb-2">SETTINGS</li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">Preferences</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">General Settings</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">General Settings</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaBoxOpen />
            <p className="text-sm">General Settings</p>
          </li>


           <li className="flex items-center space-x-2">
            <a
              href="/admin/abuse-reports"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Abuse Reports</p>
            </a>
          </li>


        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
