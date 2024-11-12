import React, { useState } from 'react';
import Registration from './Registration';
import ApplicantView from './Components/RoleBasedView/ApplicantView';
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
      {currentView === 'Applicant' && 
      <ApplicantView />}
      {currentView === 'admin' && 
      <AdminView />}
    </>
  );
};

export default App;
