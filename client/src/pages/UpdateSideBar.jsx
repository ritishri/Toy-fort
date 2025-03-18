import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UpdateSideBar() {
  const [menu, setMenu] = useState("Update Profile");

  const [data, setData] = useState({
    email:"",
    first_name: "",
    last_name:"",
    phone_number:""
  })

  useEffect(()=>{

    const fetchUserData = async()=>{

      try {
        const token = localStorage.getItem("token")
        if (!token) {
        console.log("No token found");
        return;
      }
        const {data} = await axios.get("http://localhost:5000/api/user/profile")

        if(data.success){
          setData(data)
        }
      } catch (error) {
        console.log("Error in fetching data",error);
        
      }
    }

    fetchUserData()

  },[])



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
                menu === "Update Profile"
                  ? "bg-gray-100 "
                  : ""
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
                menu === "Change Password"
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              } transition-all`}
            >
              Change Password
            </Link>
          </div>
        </div>

        <div className="w-3/4 p-10">
          <form className="space-y-4 w-full ">
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={data.email}
                className="w-full p-2 border border-gray-300 rounded-sm"
                disabled 
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={data.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}

              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={data.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-black font-semibold text-base mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-sm"
                value={data.phone_number}
                onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
              />
            </div>
            <div className="flex space-x-4">
              <button
               type="submit"
               style={{backgroundColor:"black", color:"white" , padding:"8px"}}
             >
                Save Changes
              </button>
              <button className="bg-black text-white px-4 py-2">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateSideBar;
