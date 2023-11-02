import React from 'react';
import Styles from './signup.module.css';
import StepBar from '../../components/stepBar';


const SignupPages = () => {
    return (
        <div className={Styles.container}>
            <StepBar/>
        </div>
    );
};

export default SignupPages;