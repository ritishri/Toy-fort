import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const storedUser = localStorage.getItem("user");

  console.log("Stored user", storedUser);

  const [profile, setProfile] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [sidebarProducts, setSidebarProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [productByAge, setProductByAge] = useState([]);
  const [productByGender, setProductByGender] = useState([]);
  const [productByPrice, setProductByPrice] = useState([]);
  const [productOutOfStock, setProductOutOfStock] = useState([]);
  const [productInStock, setProductInStock] = useState([]);
  const [subcategoryProduct, setSubcategoryProduct] = useState([])
  const [outdoorProduct, setOutdoorProduct] = useState([])

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
  }, [user])

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

  // Add to cart 

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
        );
      }

      if (response.data && response.data.result) {
        console.log("Product added to cart successfully");

        setCart(response.data.result);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Manage product quantity

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

  // SideBar filters

  const sidebarFilter = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/category/${category}`
      );
      // console.log("Response",response)
      setSidebarProducts(response.data);
    } catch (error) {
      console.error("Error in updating quantity of product:", error);
    }
  };


  // Filter to fetch discounted products

  const fetchDiscountProduct = async (discount) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/discount?discount=${discount}`
      );

      // console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProduct = async (age) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/age?age=${age}`
      );

      // console.log(response.data);
      setProductByAge(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductByGender = async (gender) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/gender?gender=${gender}`
      );

      // console.log(response.data);
      setProductByGender(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductByPrice = async (min, max) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/filter-by-price?p_min=${min}&p_max=${max}`
      );

      setProductByPrice(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductOutStock = async (out) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/stock-products/out-stock?stock=${out}`
      );

      // console.log("Out of stock", response.data);
      setProductOutOfStock(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchProductInStock = async (out) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/stock-products/in-stock?stock=${out}`
      );

      // console.log("In stock", response.data);
      setProductInStock(response.data);
    } catch (error) {
      console.log("Error in fetching the products", error);
    }
  };

  const fetchSubCategoryProduct = async (cat,subCat) =>{

    try {
      const response = await axios.get(`http://localhost:5000/api/category/${cat}/${subCat}`)

      // console.log("sub-cat",response.data);
      
      setSubcategoryProduct(response.data)

    } catch (error) {
      console.log(error);
      
    }

  }

  const outdoorProducts = async (toys) => {
    console.log("Toys: ",toys);
    

    try {
      const response = await axios.get(
        `http://localhost:5000/api/toys/${toys}`
      );
    
      setOutdoorProduct(response.data)
    
    } catch (error) {
      console.error("Error in fetching product:", error);
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
    sidebarFilter,
    sidebarProducts,
    setSidebarProducts,
    fetchDiscountProduct,
    product,
    setProduct,
    fetchProduct,
    productByAge,
    setProductByAge,
    fetchProductByGender,
    productByGender,
    fetchProductByPrice,
    setProductByPrice,
    productByPrice,
    fetchProductOutStock,
    productOutOfStock,
    fetchProductInStock,
    productInStock,
    fetchSubCategoryProduct,
    subcategoryProduct,
    outdoorProducts,
    setOutdoorProduct,
    outdoorProduct
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
