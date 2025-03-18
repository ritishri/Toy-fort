import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  
  const storedUser = localStorage.getItem("user");

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

  const value = {
    user,
    setUser,
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