import React from 'react';
import Styles from './button.module.css'
const Button = ({text ,className, onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={Styles.button +" "+ className}>
                <b>{text}</b>
            </button>
        </div>
    );
};

export default Button;