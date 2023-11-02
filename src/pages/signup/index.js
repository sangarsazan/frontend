import React from 'react';
import Styles from './signup.module.css';
import StepBar from '../../components/stepBar';


const SignupPages = () => {
    return (
        <div className={Styles.container}>

            <div>
                <StepBar variant="determinate" value={"50"} />
            </div>
        </div>
    );
};

export default SignupPages;