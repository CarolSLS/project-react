import React, { createContext, useState, useEffect } from "react";
import userImg from "../assets/user-image.jpeg";
// import { useNavigate } from "react-router-dom";

const userContext = createContext();

export const UserProvider = ({ children }) => {
//   const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: " ",
          email: " ",
          profilePicture: userImg,
          password: " ",
          isLoggedIn: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const logout = () => {
    setUser({
      name: " ",
      email: " ",
      profilePicture: userImg,
      password: " ",
      isLoggedIn: false,
    });
    localStorage.removeItem("user");
  }
  
  // useEffect(() => {
  //   if (user.isLoggedIn){
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }
  // }, [user]);

  // const logout = () => {
  //   setUser({ name: '', email: '', profilePicture: '', isLoggedIn: false });
  //   localStorage.removeItem("user");
  //   // navigate("/login");
  // };

  return (
    <userContext.Provider value={{ user, setUser, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
