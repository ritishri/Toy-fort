import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaFileInvoice,
  FaBoxOpen,
  FaDollarSign,
  FaFlag,
  FaCog,
  FaThLarge,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isEarningOpen, setIsEarningOpen] = useState(false);
  const [isPayoutOpen, setIsPayoutOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isFeaturedProduct, setIsFeaturedProduct] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMembershipOpen,setIsMembershipOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isGeneralSettingsOpen, setIsGeneralSettingsOpen] = useState(false);
  const [isPaymentSettingsOpen, setIsPaymentSettingsOpen] = useState(false);
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#343B4A" }}
      className="text-white w-64 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col"
    >
      <div className="p-4">
        <h1 className="text-xl text-center">
          <span className="font-bold">Toyfort</span> Panel
        </h1>

        <div className="flex items-center space-x-3 mt-6">
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
          <div>
            <p className="text-sm mb-1">Piyush Gupta</p>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>

      <nav className="overflow-y-auto flex-grow pr-2">
        <ul className="p-4 space-y-6">
          <li className="text-gray-400 text-xs mb-6">NAVIGATION</li>

          <li className="flex items-center space-x-2">
          <Link
              to="/admin"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
            <FaHome />
            <p>Home</p>
            </Link>
          </li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/navigation"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Navigation</p>
            </Link>
          </li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/slider"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Slider</p>
            </Link>
          </li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/homepage-manager"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaCog />
              <p>Homepage Manager</p>
            </Link>
          </li>

          <ul className="text-sm text-gray-300">
            <li className="text-gray-400 text-xs mb-2">ORDERS</li>
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsOrdersOpen(!isOrdersOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Orders</p>
              </div>
              {isOrdersOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isOrdersOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/orders"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Orders</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/transactions"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Transactions</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/order-bank-transfers"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Bank Transfers Notifications</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/digital-sales"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Digital Sales</p>
            </Link>
          </li>

          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsEarningOpen(!isEarningOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Earnings</p>
              </div>
              {isEarningOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isEarningOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/earnings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Earnings</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/seller-balances"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Seller Balances</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsPayoutOpen(!isPayoutOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Payouts</p>
              </div>
              {isPayoutOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isPayoutOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/add-payout"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Add Payout</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/payout-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Payout Requests</p>
            </Link>
          </li>
               <li className="flex items-center space-x-2">
            <Link
              to="/admin/payout-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Payout Settings</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>


          <li className="flex items-center space-x-2">
            <Link
              to="/admin/refund-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Refund Requests</p>
            </Link>
          </li>

          <li className="text-gray-400 text-xs mt-4 mb-2">PRODUCTS</li>

          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Products</p>
              </div>
              {isProductOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isProductOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Products</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Special Offers</p>
            </Link>
          </li>
               <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Pending Products</p>
            </Link>
          </li><li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Hidden Products</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Sold Product</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Drafts</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Deleted Products</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Add Product</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Bulk Product Upload</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>



          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsFeaturedProduct(!isFeaturedProduct)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Featured Products</p>
              </div>
              {isFeaturedProduct ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isFeaturedProduct && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/featured-products"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Products</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/featured-products-pricing"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Pricing</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/featured-products-pricing"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Transactions</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/quote-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Quote Requests</p>
            </Link>
          </li>


          
          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaBoxOpen />
                <p>Categories</p>
              </div>
              {isCategoryOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isCategoryOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/categories"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Categories</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/bulk-category-upload"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Bulk Category Upload</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/custom-fields"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Custom Fields</p>
            </Link>
          </li>

          <li className="text-gray-400 text-xs mt-4 mb-2">CONTENT</li>
        
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/pages"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Pages</p>
            </Link>
          </li>
           

           <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsBlogOpen(!isBlogOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaBoxOpen />
                <p>Blog</p>
              </div>
              {isBlogOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isBlogOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/blog-posts"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Posts</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/blog-categories"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Categories</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaBoxOpen />
                <p>Location</p>
              </div>
              {isLocationOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isLocationOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/countries"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Countries</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/states"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>States</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/cities"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Cities</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="text-gray-400 text-xs mt-4 mb-2">MEMBERSHIP</li>


          <li className="flex items-center space-x-2">
            <Link
              to="/admin/users"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Users</p>
            </Link>
          </li>

          <ul className="text-sm text-gray-300">
            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsMembershipOpen(!isMembershipOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Membership Plans</p>
              </div>
              {isMembershipOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isMembershipOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/membership-plans"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Membership Plans</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/transactions-membership"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Transactions</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>


          <li className="flex items-center space-x-2">
            <Link
              to="/admin/shop-opening-requests"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Shop Opening Requests</p>
            </Link>
          </li>


          <li className="flex items-center space-x-2">
            <Link
              to="/admin/roles-permissions"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Roles & Permissions</p>
            </Link>
          </li>

          <li className="text-gray-400 text-xs mt-4 mb-2">MANAGEMENT TOOLS</li>

          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsHelpOpen(!isHelpOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Help Center</p>
              </div>
              {isHelpOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isHelpOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/knowledge-base"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Knowledge Base</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/support-tickets"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Support Tickets</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>


         <li className="flex items-center space-x-2">
            <Link
              to="/admin/storage"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Storage</p>
            </Link>
          </li>

         <li className="flex items-center space-x-2">
            <Link
              to="/admin/cache-system"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Cache System</p>
            </Link>
          </li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/seo-tools"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>SEO Tools</p>
            </Link>
          </li>


          <li className="flex items-center space-x-2">
            <Link
              to="/admin/ad-spaces"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Ad Spaces</p>
            </Link>
          </li>

      
          <li className="flex items-center space-x-2">
            <Link
              to="/admin/contact-messages"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Contact Messages</p>
            </Link>
          </li>


         <li className="flex items-center space-x-2">
            <Link
              to="/admin/reviews"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Reviews</p>
            </Link>
          </li>


          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsCommentsOpen(!isCommentsOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Comments</p>
              </div>
              {isCommentsOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isCommentsOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/pending-product-comments"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Product Comments</p>
            </Link>
          </li>
               <li className="flex items-center space-x-2">
            <Link
              to="/admin/pending-blog-comments"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Blog Commennts</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/abuse-reports"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Abuse Reports</p>
            </Link>
          </li>

         <li className="flex items-center space-x-2">
            <Link
              to="/admin/newsletter"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Newsletter</p>
            </Link>
          </li>

          <li className="text-gray-400 text-xs mt-4 mb-2">SETTINGS</li>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/preferences"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <FaThLarge />
              <p>Preferences</p>
            </Link>
          </li>


          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsGeneralSettingsOpen(!isGeneralSettingsOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>General Settings</p>
              </div>
              {isGeneralSettingsOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isGeneralSettingsOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>General Settings</p>
            </Link>
          </li>
                 <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Language Settings</p>
            </Link>
          </li>
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Email Settings</p>
            </Link>
          </li>
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Social Login</p>
            </Link>
          </li>
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Visual Settings</p>
            </Link>
          </li>
            <li className="flex items-center space-x-2">
            <Link
              to="/admin/general-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Font Settings</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          <li className="flex items-center space-x-2">
            <Link
              to="/admin/product-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
            <FaBoxOpen />
              <p>Product Settings</p>
            </Link>
          </li>


          
          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsPaymentSettingsOpen(!isPaymentSettingsOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>Payment Settings</p>
              </div>
              {isPaymentSettingsOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isPaymentSettingsOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">
               <li className="flex items-center space-x-2">
            <Link
              to="/admin/payment-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Payment Settings</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/currency-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Currency Settings</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>

          
          <ul className="text-sm text-gray-300">

            <li
              className="flex items-center justify-between cursor-pointer hover:text-white"
              onClick={() => setIsSystemSettingsOpen(!isSystemSettingsOpen)}
            >
              <div className="flex items-center space-x-2">
                <FaShoppingCart />
                <p>System Settings</p>
              </div>
              {isSystemSettingsOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </li>

            {isSystemSettingsOpen && (
              <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-400">

                <li className="flex items-center space-x-2">
            <Link
              to="/admin/system-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>System Settings</p>
            </Link>
          </li>
                <li className="flex items-center space-x-2">
            <Link
              to="/admin/route-settings"
              className="flex items-center space-x-2 text-sm text-white-700 hover:text-white-500"
            >
              <p>Route Settings</p>
            </Link>
          </li>
              </ul>
            )}
          </ul>
        </ul>


       <div className="bg-[#1E2A38] p-4 w-full max-w-xs rounded">

      <a
        href="/backup/database_backup.sql" 
        download
        className="bg-[#273B4E] text-gray-100 py-2 px-4 rounded flex items-center gap-2 hover:bg-[#32465a] transition"
      >
        <FaDownload />
        Download Database Backup
      </a>
    </div>

      </nav>
    </div>
  );
};

export default Sidebar;
