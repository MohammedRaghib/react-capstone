// src/App.js
import React, { useState } from 'react';
import Registration from './Registration';
import ControlButtons from './Components/ControlButtons';
import ApplicantView from './Components/RoleBasedView/ApplicantView';
import RecruiterView from './Components/RoleBasedView/RecruiterView';
import AdminView from './Components/RoleBasedView/AdminView';
const App = () => {
  const [currentView, setCurrentView] = useState('register');
  const handleview = (view) => {
    setCurrentView(view)
  }

  return (
    <>
      {currentView === 'register' &&
        <Registration handleview={handleview} />}
      {currentView === 'role' && 
      <ControlButtons handleview={handleview} />}
      {currentView === 'Applicant' && 
      <ApplicantView />}
      {currentView === 'Recruiter' && 
      <RecruiterView />}
      {currentView === 'admin' && 
      <AdminView />}
    </>
  );
};

export default App;
