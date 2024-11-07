import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ step }) => {
  const steps = ["Applied", "Interview", "Offer", "Accepted"];
  return (
    <div className="progress-bar">
      {steps.map((s, index) => (
        <div key={index} className={`progress-step ${step >= index ? 'active' : ''}`}>
          {s}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
