import { createContext, useState } from "react";

export const AuthContext=createContext();

export default function AuthContextProvider({children}){
    const[isAuth,setisAuth]=useState(false);
    const[token,setToken]=useState('')
   const login=(a)=>{
    setisAuth(true)
    setToken(a)
   }

    return(
        <AuthContext.Provider value={{isAuth,setisAuth,login,token}}>{children}</AuthContext.Provider>
    )
}