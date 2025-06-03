import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const location = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const token = url.get("token");
    console.log(token);

    if (token) {
      const decodedToken = decodeURIComponent(token);
      setResetToken(token);
    } else {
      alert("Reset token not found");
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }

    try {
      // console.log("Reset token", resetToken);
      console.log("Password", password);

      const response = await axios.post(
        "http://localhost:5000/api/auth/reset-password",
        { token: resetToken, password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <h1 className="font-medium text-2xl text-center mt-6">
          Reset Password
        </h1>
        <input
          className="p-3 mt-4 border border-gray-300 w-1/4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="p-3 mt-4 border border-gray-300 w-1/4"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button
          type="submit"
          className="w-1/4 text-white py-2 rounded mt-4"
          style={{ backgroundColor: "black" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
