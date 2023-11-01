import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './startHeader.module.css';
const StartHeader = ({text}) => {
    return (
        <>
            <div style={{display: "flex"}}>
                <CloseIcon/>
                <span>{text}</span>
            </div>
        </>
    );
};

export default StartHeader;