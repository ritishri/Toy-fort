import { createContext, useState, useEffect } from "react";
import { MdTitle } from "react-icons/md";
import axios from 'axios'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  
  const storedUser = localStorage.getItem("user")

  console.log("Stored user",storedUser)
  
  const [profile, setProfile] = useState(false)
  const [wishlist, setWishlist] = useState([])

  const [user, setUser] = useState(() => {
    try {
      return storedUser ? JSON.parse(storedUser) : "Sign In";
    } catch (error) {
      return "Sign In"; 
    }
  })

  useEffect(() => {
    if (user && user !== "Sign In") {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user")
    }
  }, [user]);


  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (user && user !== "Sign In") {
          const response = await axios.get("http://localhost:5000/api/wishlist", {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          console.log("response",response.data);
          setWishlist(response.data.wishlist);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    }

    fetchWishlist()
  }, [user])


  // Add item to wishlist
  const addToWishlist = async (item) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/add",
        item,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          }
        }
      )
      console.log("Response",response);
      
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }



  // Remove item from wishlist
  const removeFromWishlist = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/remove/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
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