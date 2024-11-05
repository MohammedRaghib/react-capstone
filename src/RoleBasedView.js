// src/RoleBasedView.js
import React, { useContext } from 'react';
import { useUserContext } from './UserContext';

const RoleBasedView = () => {
    const { user } = useUserContext();

    if (!user) {
        return <p>Please log in to see your options.</p>;
    }

    switch (user.role) {
        case 'admin':
            return <AdminPanel />;
        case 'jobPoster':
            return <JobPosterView />;
        case 'jobSeeker':
            return <JobSeekerView />;
        default:
            return <p>No role assigned.</p>;
    }
};

const AdminPanel = () => <div>Admin Panel: Manage Users and Settings</div>;

const JobPosterView = () => <div>Job Poster View: Post New Jobs</div>;

const JobSeekerView = () => <div>Job Seeker View: View and Apply for Jobs</div>;

export default RoleBasedView;
