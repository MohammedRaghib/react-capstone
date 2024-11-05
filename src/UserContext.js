// src/UserContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (username, password) => {
        const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
        if (response.data.token) {
            setToken(response.data.token);
            const decoded = JSON.parse(atob(response.data.token.split('.')[1])); // Decode JWT
            setUser({ id: decoded.id, role: decoded.role });
        } else {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
