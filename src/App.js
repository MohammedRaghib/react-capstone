import React from 'react';
import AdminView from './components/RoleBasedView/AdminView';
import RecruiterView from './components/RoleBasedView/RecruiterView';
import ApplicantView from './components/RoleBasedView/ApplicantView';
import ProgressBar from './components/ProgressBar/ProgressBar';

const App = () => {
  const userRole = 'applicant'; // Change this to 'admin', 'recruiter', or 'applicant' to test each view
  const applicationStep = 2; // Simulated application progress (0: Applied, 1: Interview, 2: Offer, 3: Accepted)

  return (
    <div>
      <h1>Job Listing App</h1>
      {userRole === 'admin' && <AdminView />}
      {userRole === 'recruiter' && <RecruiterView />}
      {userRole === 'applicant' && (
        <div>
          <ApplicantView />
          <ProgressBar step={applicationStep} />
        </div>
      )}
    </div>
  );
};

export default App;
