// src/components/ControlButtons.js
import React from 'react';

const ControlButtons = ({ onRoleChange, onNextStep, onResetStep }) => (
  <div className="control-buttons">
    <button onClick={() => onRoleChange('admin')} title="Switch to Admin view">
      Admin View
    </button>
    <button onClick={() => onRoleChange('recruiter')} title="Switch to Recruiter view">
      Recruiter View
    </button>
    <button onClick={() => onRoleChange('applicant')} title="Switch to Applicant view">
      Applicant View
    </button>
    <button onClick={onNextStep} title="Progress to the next step in your application">
      Next Step
    </button>
    <button onClick={onResetStep} title="Reset application progress">
      Reset Progress
    </button>
  </div>
);

export default ControlButtons;
