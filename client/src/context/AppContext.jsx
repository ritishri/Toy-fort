import { createContext, useState, useEffect } from "react";
import { MdTitle } from "react-icons/md";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  
  const storedUser = localStorage.getItem("user")

  console.log("Stored user",storedUser);
  
  const [profile, setProfile] = useState(false)

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
      localStorage.removeItem("user")
    }
  }, [user]);

  const [wishlist, setWishlist] = useState(()=>{

    try {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    return Array.isArray(storedWishlist) ? storedWishlist : [];
    } catch (error) {
      return []
    }
  })

  useEffect(()=>{
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
  },[wishlist])


  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Check if the product is already in the wishlist
      const isAlreadyInWishlist = prevWishlist.some((item) => item.title === product.title);
  
      if (isAlreadyInWishlist) return prevWishlist; // Avoid duplicates
  
      return [...prevWishlist, product]; // Append new product while keeping existing ones
    });
  };
  


  const removeFromWishlist = (title) =>{
    setWishlist((prev) => prev.filter((item) => item.title != title))
  }


  

  const value = {
    user,
    setUser,
    profile,
    setProfile,
    storedUser,
    wishlist,
    addToWishlist,
    removeFromWishlist
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};






// import { createContext, useState, useEffect } from "react";


// export const AppContext = createContext()

// export const AppContextProvider = (props) =>{

//     const [user,setUser] = useState(localStorage.getItem('user') || 'Sign In')

//     useEffect(() => {
//         localStorage.setItem("user", user);
//       }, [user]);


//     const value = {
//         user,setUser
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }