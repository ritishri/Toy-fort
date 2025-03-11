import { createContext, useState, useEffect } from "react";


export const AppContext = createContext()

export const AppContextProvider = (props) =>{

    const [user,setUser] = useState(localStorage.getItem('user') || 'Sign In')

    useEffect(() => {
        localStorage.setItem("user", user);
      }, [user]);


    const value = {
        user,setUser
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

