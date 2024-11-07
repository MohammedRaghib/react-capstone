// src/components/ControlButtons.js
import React from 'react';
import './RoleBasedView/RoleBasedView.css'

const ControlButtons = ({ handleview }) => (
  <div className="control-buttons">
    <button onClick={() => handleview('Recruiter')} title="Switch to Recruiter view">
      Recruiter View
    </button>
    <button onClick={() => handleview('Applicant')} title="Switch to Applicant view">
      Applicant View
    </button>
  </div>
);

export default ControlButtons;
