import {  createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({id:1,name:"DaiP",
    profilePic:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
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
