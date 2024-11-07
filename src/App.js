// src/App.js
import React, { useState } from 'react';
import AdminView from './Components/RoleBasedView/AdminView';
import RecruiterView from './Components/RoleBasedView/RecruiterView';
import ApplicantView from './Components/RoleBasedView/ApplicantView';
import ProgressBar from './Components/Progress/ProgressBar';
import ControlButtons from './Components/ControlButtons';
import './Styles/Global.css';

const App = () => {
  const [userRole, setUserRole] = useState('applicant'); // Change role to 'admin' or 'recruiter'
  const [applicationStep, setApplicationStep] = useState(0); // Progress steps

  const handleRoleChange = (role) => setUserRole(role);

  const handleNextStep = () => setApplicationStep((prev) => (prev < 3 ? prev + 1 : 3));
  const handleResetStep = () => setApplicationStep(0);

  return (
    <div className="app-container">
      <h1>Job Listing App</h1>
      <ControlButtons onRoleChange={handleRoleChange} onNextStep={handleNextStep} onResetStep={handleResetStep} />

      <div className="role-view-container">
        {userRole === 'admin' && <AdminView />}
        {userRole === 'recruiter' && <RecruiterView />}
        {userRole === 'applicant' && (
          <div>
            <ApplicantView />
            <ProgressBar step={applicationStep} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
