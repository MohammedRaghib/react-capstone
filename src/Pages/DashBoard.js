// src/Pages/Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Roles } from './Roles';

// Components for each role
import AdminPanel from './Pages/AdminPanel';
import JobPosterView from './Pages/JobPosterView';
import JobSeekerView from './Pages/JobSeekerView';

const Dashboard = () => {
  const { role } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {role === Roles.Admin && <AdminPanel />}
      {role === Roles.JobPoster && <JobPosterView />}
      {role === Roles.JobSeeker && <JobSeekerView />}
    </div>
  );
};

export default Dashboard;
