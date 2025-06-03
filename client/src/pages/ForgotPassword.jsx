import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageState, setMessageState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email);

      const response = await axios.post(
        "http://localhost:5000/api/auth/forget-password",
        { email }
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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-2xl text-center mt-6">
          Reset Password
        </h1>

        <p className="text-gray-500 text-center mt-6 mb-4">
          Enter your email address
        </p>

        {message && messageState && (
          <div
            style={{
              backgroundColor: "#d4edda",
              padding: "15px",
              color: "#155724",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              width:"1/4"
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
              padding: "15px",
              color: "#F75A5A",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaCheckCircle style={{ marginRight: "10px" , color:"#F75A5A" }} />
            {message}
          </div>
        )}
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
          className="w-1/4 text-white py-2 rounded mt-1"
          style={{ backgroundColor: "black" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
