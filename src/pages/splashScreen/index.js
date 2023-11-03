import React from 'react';
import {useNavigate} from "react-router-dom"
import Styles from './splashScreen.module.css'

const SplashScreen = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(()=> navigate('/'), 100)
    }, []);

    return (
        <div className={Styles.backGround}>
            
        </div>
    );
};

export default SplashScreen;