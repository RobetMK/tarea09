import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {
    const navigate = useNavigate()
    let credentials = JSON.parse( localStorage.getItem('credentialDos') )
    return (
        <div>
            <h1>Your Profile: { credentials.email}</h1>
            <button onClick={ ()=>{ navigate('/tasks') } }>Tasks</button>
            <button onClick={ ()=>{ navigate(-1) } }>Go Back</button>
        </div>
    );
}

export default ProfilePage;
