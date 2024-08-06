import React, {createContext, useState} from 'react';

const userContext = createContext();

export const UserProvider = ({children })=>{ 
    const [user, setUser] = useState({name: '', profilePicture: '', isLoggedIn: false});
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