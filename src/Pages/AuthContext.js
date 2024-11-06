// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { Roles } from '../../public/Constants/Roles';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ role: Roles.JobSeeker, isAuthenticated: true });

  const login = (role) => setUser({ role, isAuthenticated: true });
  const logout = () => setUser({ role: null, isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
