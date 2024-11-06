// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/Pages/AuthContext';
import Sidebar from './Components/SideBar';
import ProtectedRoute from '../src/Components/';
import Unauthorized from './Components/Unauthorized';
import Login from './Components/Pages/Login';
import AdminPanel from './Components/Pages/AdminPanel';
import JobPosterView from './Components/Pages/JobPosterView';
import JobSeekerView from './Components/Pages/JobSeekerView';
import Dashboard from './Pages/DashBoard';
import './AppStyles.css'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/" element={<Dashboard />} />

            {/* Protected Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['Admin']}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/poster"
              element={
                <ProtectedRoute allowedRoles={['JobPoster']}>
                  <JobPosterView />
                </ProtectedRoute>
              }
            />
            <Route
              path="/seeker"
              element={
                <ProtectedRoute allowedRoles={['JobSeeker']}>
                  <JobSeekerView />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
