import React from 'react';
import './App.css';
import Search from './search'; // Adjust the path if necessary
import React from 'react';
import { UserProvider } from './UserContext';
import RoleBasedView from './RoleBasedView';
import ProgressBar from './ProgressBar';
import Components from './Components/AdminPanel'

const App = () => {
    const jobListings = [
        { title: 'Software Engineer', company: 'Tech Corp', location: 'New York' },
        { title: 'Product Manager', company: 'Business Inc', location: 'San Francisco' },
        { title: 'UX Designer', company: 'Design Studio', location: 'Remote' },
        { title: 'Data Analyst', company: 'Data Solutions', location: 'Boston' },
    ];

    return (
        <div className="App">
            <h1>Job Listings</h1>
            <Search jobs={jobListings} />
        </div>
// src/App.js
// const App = () => {
//     return (
//         <>
//         </>
    );
};

export default App;
