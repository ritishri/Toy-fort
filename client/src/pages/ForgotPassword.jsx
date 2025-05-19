import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      console.log(email);

      const response = await axios.post(
        "http://localhost:5000/api/auth/forget-password",
        { email }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-2xl text-center mt-6">
          Reset Password
        </h1>
        <p className="text-gray-500 text-center mt-6 mb-4">
          Enter your email address
        </p>
        <input
          className="p-3 border border-gray-300 w-1/4"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button
          type="submit"
          className="w-1/4 text-white py-2 rounded mt-6"
          style={{ backgroundColor: "black" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
