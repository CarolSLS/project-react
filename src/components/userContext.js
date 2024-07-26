import React, {createContext, useState} from 'react';
// import { useNavigate } from 'react-router-dom';

const userContext = createContext();

export const UserProvider = ({children })=>{ 
    const [user, setUser] = useState({name: 'Foi Caraio', profilePicture: 'url_da_imagem', isLoggedIn: true});
    // const navigate = useNavigate();

    const logout = () => {
        setUser({name: '', profilePicture: '', isLoggedIn: false});
        // navigate('/login');
    };

    return (
        <userContext.Provider value={{user, logout}}>
            {children}
        </userContext.Provider>
    );
};

export default userContext;