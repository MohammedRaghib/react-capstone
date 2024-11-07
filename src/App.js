// src/App.js
import React, { useState } from 'react';
import AdminView from './Components/RoleBasedView/AdminView';
import RecruiterView from './Components/RoleBasedView/RecruiterView';
import ApplicantView from './Components/RoleBasedView/ApplicantView';

const App = () => {
  const [currentView, setCurrentView] = useState('admin'); // Default view

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app-container">
      <h1>Role-Based Dashboard</h1>
      
      <div className="control-buttons">
        <button onClick={() => handleViewChange('admin')}>Admin View</button>
        <button onClick={() => handleViewChange('recruiter')}>Recruiter View</button>
        <button onClick={() => handleViewChange('applicant')}>Applicant View</button>
      </div>

      <div className="role-view-container">
        {currentView === 'admin' && <AdminView />}
        {currentView === 'recruiter' && <RecruiterView />}
        {currentView === 'applicant' && <ApplicantView />}
      </div>
    </div>
  );
};

export default App;
