// src/App.js
import React from 'react';
import { UserProvider } from './UserContext';
import RoleBasedView from './RoleBasedView';
import ProgressBar from './ProgressBar';

const App = () => {
    return (
        <UserProvider>
            <div style={{ padding: '20px' }}>
                <h1>Job Application Portal</h1>
                <RoleBasedView />
                <ProgressBar />
            </div>
        </UserProvider>
    );
};

export default App;
