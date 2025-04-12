import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Register = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(false);

  const { user, setUser, setProfile } = useContext(AppContext);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirm_password) {
      console.log("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        values
      );

      console.log(values.first_name);
      console.log("Register Val", values);

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        if (response.data.user) {
          setUser(response.data.user)
          setProfile(true)
          
          console.log("Registration successful:", response.data.message);
          localStorage.setItem("user", JSON.stringify(response.data.user))
          navigate("/settings/edit-profile");
        }else{
          setMessageState(false)
          setMessage("User not Register!")
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-red-600 text-2xl mb-12 text-center">
        We are asking you to Register as it will help to track the status of the
        shipping of your order.
      </p>

      <h1 className="text-center text-2xl text-black font-medium mb-4">
        Register
      </h1>

      <form onSubmit={handleRegister}>
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="email"
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="tel"
          name="phone_number"
          placeholder="Phone Number"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChanges}
        />
        <br />
        <input
          className="mb-3 w-full p-3 border border-gray-300"
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
          onChange={handleChanges}
        />
        <br />
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="ml-2">
          I have read and agree to the{" "}
          <u>
            <a href="/terms-conditions" target="_blank">
              Terms & Conditions
            </a>
          </u>
        </label>
        <br />
        <button
          type="submit"
          className="w-full text-white py-2 rounded mt-4"
          style={{ backgroundColor: "black" }}
        >
          Register
        </button>
        <br />
        <div className="text-center mt-4">
          <p className="text-gray-500 inline-block mr-1">Have an account?</p>
          <a href="/register" className="text-black font-medium">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
