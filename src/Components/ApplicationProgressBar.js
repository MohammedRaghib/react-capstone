// src/components/ApplicationProgressBar.js
import React from 'react';
import { ApplicationStatus } from '../../public/Constants/statuses';
import './assets/styles/AppStyles.css';

const statusStages = [
  { label: ApplicationStatus.Applied, color: '#ccc', icon: '📄' },
  { label: ApplicationStatus.Interview, color: '#ffce45', icon: '🕒' },
  { label: ApplicationStatus.Offer, color: '#1d8efa', icon: '🤝' },
  { label: ApplicationStatus.Hired, color: '#57a773', icon: '🎉' },
];

const ApplicationProgressBar = ({ status }) => {
  const currentStepIndex = statusStages.findIndex(stage => stage.label === status);
  const progressPercentage = ((currentStepIndex + 1) / statusStages.length) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
      </div>
      {statusStages.map((stage, index) => (
        <span
          key={index}
          className={`progress-icon ${currentStepIndex >= index ? '' : 'inactive'}`}
          style={{ color: currentStepIndex >= index ? stage.color : '#ccc' }}
        >
          {stage.icon}
        </span>
      ))}
    </div>
  );
};

export default ApplicationProgressBar;
