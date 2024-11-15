import React, { useState } from 'react';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

function Recruiter() {
    const [token, setToken] = useState(null)
    
    return (
        <>
            <div>Recruiter</div>
        </>
    )
}

export default Recruiter