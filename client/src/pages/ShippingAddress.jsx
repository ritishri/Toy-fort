import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const [menu, setMenu] = useState("Shipping Address");
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="text-gray-600 text-sm mt-6 ml-6"
        style={{ fontFamily: "Open Sans" }}
      >
        <a
          className="hover:text-red-500 mr-1 cursor-pointer text-gray-400"
          href="/"
        >
          Home /
        </a>
        <a
          className="hover:text-red-500 mr-1 cursor-pointer text-gray-600"
          href="/"
        >
          {menu}
        </a>
      </div>

      <div className="min-h-screen flex">
        <div className="w-1/4 bg-white p-6 shadow-md">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ fontFamily: "Open Sans" }}
          >
            Settings
          </h2>

          <div className="space-y-2">
            <Link
              to="/settings/edit-profile"
              onClick={() => setMenu("Update Profile")}
              className={`block p-3 rounded-md ${
                menu === "Update Profile" ? "bg-gray-100 " : ""
              } hover:bg-gray-100 transition-all`}
            >
              Update Profile
            </Link>

            <Link
              to="/settings/shipping-address"
              onClick={() => setMenu("Shipping Address")}
              className={`block p-3 rounded-md ${
                menu === "Shipping Address"
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              } transition-all`}
            >
              Shipping Address
            </Link>

            <Link
              to="/settings/change-password"
              onClick={() => setMenu("Change Password")}
              className={`block p-3 rounded-md ${
                menu === "Change Password" ? "bg-gray-100" : "hover:bg-gray-100"
              } transition-all`}
            >
              Change Password
            </Link>
          </div>
        </div>

        <div className="w-3/4 p-10">
          <p className="text-gray-500">
            You have not added a shipping address yet.
          </p>

          <button className="flex items-center mt-3 text-black font-semibold hover:underline">
            <FaPlusCircle className="mr-2" />
            Add New Address
          </button>

          <div className="mt-6">
            <button
              onClick={() => navigate("/cart")}
              className="bg-black text-white px-4 py-2 hover:bg-gray-800"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
