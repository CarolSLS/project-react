import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import userImg from "../assets/user-image.jpeg";

const userContext = createContext();

export const UserProvider = ({ children }) => {
//   const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: '',
          profilePicture: userImg,
          isLoggedIn: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const logout = () => {
    setUser({ name: '', profilePicture: '', isLoggedIn: false });
    localStorage.removeItem("user");
    // navigate("/login");
  };

  return (
    <userContext.Provider value={{ user, setUser, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default userContext;
