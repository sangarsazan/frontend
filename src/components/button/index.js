import React from 'react';
import Styles from './button.module.css'
const Button = ({text ,className}) => {
    return (
        <div>
            <button className={Styles.button +" "+ className}>
                {text}
            </button>
        </div>
    );
};

export default Button;