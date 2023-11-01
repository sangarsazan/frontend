import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const StartHeader = (headerTitle) => {
    return (
        <>
            <div>
                <svg data-testid="CloseIcon"></svg>{headerTitle}
            </div>
        </>
    );
};

export default StartHeader;