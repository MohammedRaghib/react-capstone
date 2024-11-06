// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Include global styles if you have them
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
