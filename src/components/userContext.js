import React, {createContext, useState} from 'react';
import userImg from "../assets/user-image.jpeg"

const userContext = createContext();

export const UserProvider = ({children })=>{ 
    const [user, setUser] = useState({name: '', profilePicture: userImg, isLoggedIn: false});
    // const navigate = useNavigate();

    const logout = () => {
        setUser({name: '', profilePicture: '', isLoggedIn: false});
        // navigate('/login');
    };

    return (
        <userContext.Provider value={{user, setUser, logout}}>
            {children}
        </userContext.Provider>
    );
};

export default userContext;