
import React, { useState } from 'react';

function App() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Simple App</h1>
            <button onClick={toggleMessage} style={{ padding: '10px', fontSize: '16px' }}>
                {showMessage ? 'Hide' : 'Show'} Message
            </button>
            {showMessage && (
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    This is a simple message displayed by toggling the button!
                </p>
            )}
        </div>
    );
}

export default App;