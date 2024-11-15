import React, { useState } from 'react';
import Registration from './component/Registration';
import ApplicantView from './component/ApplicantView';
import AdminView from './component/AdminView';
import Payment from './component/Payment';
import Recruiter from './component/Recruiter';
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
      <ApplicantView  handleview={handleview} />}
      {currentView === 'admin' && 
      <AdminView />}
      {currentView === 'payment' && 
      <Payment handleview={handleview}/>}
      {currentView === 'recruiter' &&
      <Recruiter/> }
    </>
  );
};

export default App;
