// src/pages/Login.js
import React from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (role) => {
    login(role);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin('Admin')}>Login as Admin</button>
      <button onClick={() => handleLogin('JobPoster')}>Login as Job Poster</button>
      <button onClick={() => handleLogin('JobSeeker')}>Login as Job Seeker</button>
    </div>
  );
};

export default Login;
