// src/components/RoleBasedView/AdminView.js
import React from 'react';
import './RoleBasedView.css';

const AdminView = () => (
  <div className="role-view admin-view">
    <h2>Admin View</h2>
    <p>As an admin, you have the ability to manage users, view statistics, and oversee the application process.</p>
    <p>Current Admin Actions: Add/Remove Users, Manage Permissions, View Applications</p>
  </div>
);

export default AdminView;
