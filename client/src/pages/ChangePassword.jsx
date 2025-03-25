import "@fontsource/open-sans";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const ChangePassword = () => {
  const [menu, setMenu] = useState("Change Password");
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(true);

  const [values, setValues] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        setMessage("Unauthorized. Please log in.");
        setMessageState(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/settings/change-password",
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setMessageState(true);
      } else {
        setMessageState(false);
      }
      setMessage(response.data.message);
    } catch (err) {
      setMessageState(false);
      setMessage(err.response?.data?.message || "Something went wrong!");
    }
  };

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
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div>
              {message && messageState && (
                <div
                  style={{
                    backgroundColor: "#d4edda",
                    padding: "20px",
                    color: "#155724",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaCheckCircle style={{ marginRight: "10px" }} />
                  {message}
                </div>
              )}

              {message && !messageState && (
                <div
                  style={{
                    backgroundColor: "#f8d7da",
                    padding: "20px",
                    color: "155724",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaCheckCircle style={{ marginRight: "10px" }} />
                  {message}
                </div>
              )}
              <label className="block text-black font-semibold text-sm mb-2">
                Old Password
              </label>
              <input
                type="password"
                placeholder="Old Password"
                className="w-full p-3 text-sm border border-gray-300 rounded-sm"
                value={values.old_password}
                onChange={(e) =>
                  setValues({ ...values, old_password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 text-sm border border-gray-300 rounded-sm"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-sm mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 text-sm border border-gray-300 rounded-sm"
                value={values.confirm_password}
                onChange={(e) =>
                  setValues({ ...values, confirm_password: e.target.value })
                }
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "8px",
                }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
