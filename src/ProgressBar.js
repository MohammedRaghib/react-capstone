// src/ProgressBar.js
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 100 : prev + 10)); // Simulating progress
        }, 1000); // Update every second
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: '100%', backgroundColor: '#e0e0e0', margin: '20px 0' }}>
            <div
                style={{
                    height: '20px',
                    width: `${progress}%`,
                    backgroundColor: progress < 100 ? '#76c7c0' : '#4caf50',
                    transition: 'width 1s',
                }}
            />
            <p>{progress}%</p>
        </div>
    );
};

export default ProgressBar;
