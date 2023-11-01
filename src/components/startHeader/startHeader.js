import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const StartHeader = ({text}) => {
    return (
        <>
                <svg data-testid={CloseIcon}></svg>
                <span>{text}</span>
        </>
    );
};

export default StartHeader;