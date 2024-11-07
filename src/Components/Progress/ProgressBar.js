// src/components/ProgressBar/ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ step }) => {
  const steps = [
    { label: 'Applied', description: 'You have submitted your application.' },
    { label: 'Interview', description: 'You are scheduled for an interview.' },
    { label: 'Offer', description: 'You have received a job offer.' },
    { label: 'Accepted', description: 'You have accepted the offer.' },
  ];

  return (
    <div className="progress-bar">
      {steps.map((s, index) => (
        <div
          key={index}
          className={`progress-step ${step >= index ? 'active' : 'inactive'}`}
          title={s.description}
        >
          <strong>{s.label}</strong>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
