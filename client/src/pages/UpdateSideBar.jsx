import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

function UpdateSideBar() {
  const [menu, setMenu] = useState("Update Profile");
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(true)

  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // console.log(response.data);

        if (response.data.length > 0) {
          const userData = response.data[0];
          setMessageState(true)
          setMessage("Register Successful!")
          setData(userData);
        } else {
          setMessageState(false)
          setMessage("User not Register!")
          console.log("No user data found in response");
        }
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      console.log("User ID not found");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/update-profile`,
        { userId, ...data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        setMessageState(true)
        setMessage("Changes successfully saved!");
        console.log("Profile updated successfully");
      }else{
        setMessageState(false)
        setMessage("Changes not saved!");
      }
    } catch (error) {
      console.log("Error in updating profile", error);
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
              onClick={() => setMenu("Update Profile")}
              className={`block p-3 rounded-md ${
                menu === "Update Profile" ? "bg-gray-100 " : ""
              } hover:bg-gray-200 transition-all`}
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
          <form onSubmit={handleUpdate} className="space-y-4 w-full ">
            <div>
              {message && messageState && (
                <div
                  style={{
                    backgroundColor: "#d4edda",
                    padding: "20px",
                    color: "#155724",
                    marginBottom:"10px",
                    display:"flex",
                    alignItems:"center"
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
                    marginBottom:"10px",
                    display:"flex",
                    alignItems:"center"
                  }}
                >
                  <FaCheckCircle style={{ marginRight: "10px" }} />
                  {message}
                </div>
              )}
              <label className="block text-black font-semibold text-base mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={data.email}
                className="w-full p-2 text-gray-500 border border-gray-300 rounded-sm"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray-500 border border-gray-300 rounded-sm"
                value={data.first_name}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, first_name: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray-500 border border-gray-300 rounded-sm"
                value={data.last_name}
                onChange={(e) =>
                  setData({ ...data, last_name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray-500 border border-gray-300 rounded-sm"
                value={data.phone_number}
                onChange={(e) =>
                  setData({ ...data, phone_number: e.target.value })
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
                Save Changes
              </button>

              <Link to={'/settings/shipping-address'}>
               <button className="bg-black text-white px-4 py-2">Next</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateSideBar;
