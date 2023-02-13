import React from 'react';
import {  useNavigate } from 'react-router-dom';

const HomePage = () => {
    //const location = useLocation()
    const navigate = useNavigate()
    //console.log('We are in Routue:', location.pathname) // '/about | /faqs'

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={()=>{ navigate('/profile')}}>
                    Go to Profile
                </button>
            </div>
        </div>
        
    );
}

export default HomePage;
