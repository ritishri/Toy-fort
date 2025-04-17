import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const storedUser = localStorage.getItem("user");

  console.log("Stored user", storedUser);

  const [profile, setProfile] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(() => {
    try {
      return storedUser ? JSON.parse(storedUser) : "Sign In";
    } catch (error) {
      return "Sign In";
    }
  });

  useEffect(() => {
    if (user && user !== "Sign In") {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Add item to wishlist

  const addToWishlist = async (item) => {
    try {
      // console.log(item);

      const token = localStorage.getItem("token");
      // console.log("Token",token)

      const response = await axios.post("http://localhost:5000/api/add", item, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("Add Response", response.data.result);

      if (response.data && response.data.result) {
        console.log("Product Added successfully");
        setWishlist(response.data.result);

        // setWishlist((prevWishlist) => [...prevWishlist, item])
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  // Remove item from wishlist

  const removeFromWishlist = async (slug) => {
    console.log("slug remove wishlist", slug);

    try {
      const token = localStorage.getItem("token");
      // console.log("Token", token);

      const response = await axios.delete(
        `http://localhost:5000/api/remove/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.wishlist) {
        // setWishlist(response.data.wishlist);
        setWishlist((prevWishlist) =>
          prevWishlist.filter((item) => item.slug !== slug)
        );
      }
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  const addToCart = async (item) => {
    try {
      const token = localStorage.getItem("token");

      // console.log("item.slug", item.slug);

      const existingItem = cart.find((product) => product.slug === item.slug);

      if (existingItem) {
        await increaseProductQuantity(item.slug);
      } else {
        const response = await axios.post(
          "http://localhost:5000/api/addToCart",
          item,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }

      if (response.data && response.data.result) {
        console.log("Product added to cart successfully");

        setCart(response.data.result);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const increaseProductQuantity = async (slug) => {
    //  console.log("slug update cart",slug);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/increaseProductQuantity/${slug}`
      );

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

  const value = {
    user,
    setUser,
    profile,
    setProfile,
    storedUser,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    setWishlist,
    addToCart,
    cart,
    setCart,
    increaseProductQuantity,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
