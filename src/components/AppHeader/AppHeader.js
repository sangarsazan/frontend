import React from 'react';
import Styles from './AppHeader.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const AppHeader = () => {
    return (
        <>

            <div className={Styles.wrapper}>
                <FontAwesomeIcon icon={faBars} className={Styles.icon}/>
                <div>
                    <span className={Styles.title}>ورزشیا</span>
                </div>
            </div>
        </>
    );
};

export default AppHeader;