import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res=await axios.post("http://localhost:8800/api/auth/login",inputs,{
      withCredentials:true,

    })
    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(currentUser));
  }, [currentUser]);

  const values = {
    currentUser,
    login,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
