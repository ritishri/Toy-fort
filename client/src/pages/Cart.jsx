import React, { useContext, useEffect, useState } from "react";
import "@fontsource/open-sans";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import visaImg from "../assets/visa.svg";
import masterCard from "../assets/mastercard.svg";
import maestro from "../assets/maestro.svg";
import american from "../assets/amex.svg";
import discover from "../assets/discover.svg";

const Cart = () => {
  const { user, setUser, cart, setCart, increaseProductQuantity } =
    useContext(AppContext);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

      // console.log("cart token", token)
      // console.log("User", user)

      if (!token || !user || user === "Sign In") {
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getCartProducts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // console.log("Cart response:", response.data)

        setCart(response.data);
      } catch (error) {
        console.log(
          "Error in fetching products:",
          error.response?.data || error.message
        );
      }
    };

    fetchCart();
  }, [user]);

  const removeFromCart = async (slug) => {
    // console.log("slug remove cart",slug);

    try {
      const token = localStorage.getItem("token");
      // console.log("Token",token)

      const response = await axios.delete(
        `http://localhost:5000/api/removeProduct/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart((prevCart) => prevCart.filter((item) => item.slug !== slug))
      // To update the card page dynamically

      // console.log("Cart Response",response);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const removeProductQuantity = async (slug) => {
    // console.log("slug update cart",slug);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/decreaseProductQuantity/${slug}`
      );

      // console.log("Cart Response",response.data.newQuantity);
      // setProductQuantity(response.data.newQuantity)

      const newQuantity = response.data.newQuantity;

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.slug === slug ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error in updating quantity of product:", error);
    }
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    let discountedPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.original_price * item.quantity;
      discountedPrice += item.discounted_price * item.quantity;
    });
    return {
      totalPrice,
      discountedPrice,
      youSaved: totalPrice - discountedPrice,
    };
  };

  const { totalPrice, discountedPrice, youSaved } = calculateTotal();

  return (
    <div className="p-8">
      <h1 className="font-bold text-xl ml-4">My Cart ({cart.length})</h1>

      <div className="flex flex-col lg:flex-row justify-between mt-3 gap-8">
        {/* Left: Cart items */}

        <div className="w-[65%]">
          <hr className="my-4" />
          {cart.map((item, index) => (
            <div key={index} className="flex items-start gap-6 pb-4 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover"
              />
              <div className="flex-1">
                <h2 className="text-md text-gray-800">{item.title}</h2>
                <p className="text-gray-800 font-semibold text-sm mt-1">
                  <span className="text-gray-500">By </span>
                  Toy Fort
                </p>
                <div className="flex mt-2">
                  <p className="mr-20">Unit price:</p>
                  <p className="line-through text-gray-500 font-bold text-md">
                    ₹{item.original_price}
                  </p>
                </div>
                <div className="flex mt-2">
                  <p className="mr-6">Discounted price:</p>
                  <p className="text-black font-bold text-md">
                    ₹{item.discounted_price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.slug)}
                  className="mt-4 bg-gray-50 px-3 py-1 text-sm border"
                >
                  × Remove
                </button>
              </div>

              <div className="flex flex-col items-center gap-2 mt-3">
                <div className="flex flex-row items-center gap-0 border border-gray-300 rounded overflow-hidden">
                  <button
                    onClick={() => removeProductQuantity(item.slug)}
                    className="px-3 py-1 w-full text-lg border-r border-gray-300"
                  >
                    -
                  </button>
                  <button className="px-3 py-1 w-full text-lg">
                    {item.quantity}
                  </button>
                  <button
                    onClick={() => increaseProductQuantity(item.slug)}
                    className="px-3 py-1 w-full text-lg border-l border-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <hr className="my-4" />
          <a href="/"><button className="bg-black text-white px-4 py-2 mt-4 rounded">
            <KeyboardArrowLeftIcon />
            Keep Shopping
          </button></a>
          
        </div>

        {/* Right: Cart items */}

        <div className="bg-gray-50 p-6 rounded shadow-md font-bold w-full max-w-sm">
          <div className="flex justify-between mb-2">
            <span>Total Price</span>
            <span className="line-through text-gray-500">₹{totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discounted Price</span>
            <span className="text-green-700 font-semibold">
              ₹{discountedPrice}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>You have saved</span>
            <span className="text-green-600">₹{youSaved}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-semibold mb-2">
            <span>Total Amount</span>
            <span>₹{discountedPrice}</span>
          </div>
          <p className="text-red-600 font-bold mb-4">
            You will save RS.{youSaved} on this order
          </p>

          <hr className="my-4" />

          <p className="text-red-600 font-semibold m-6 cursor-pointer">
            Have A Promo Code?
          </p>

          <hr className="my-4" />

          <button className="w-full bg-black text-white py-2 rounded">
            Continue to Checkout
          </button>

          <div className="flex-row flex w-8 mt-4 items-center gap-2">
            <img src={visaImg} />
            <img src={masterCard} />
            <img src={maestro} />
            <img src={american} />
            <img src={discover} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
