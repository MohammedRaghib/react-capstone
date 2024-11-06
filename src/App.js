
import React, { useState } from 'react';

function App() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <>
        </>
    );
}

export default App;
