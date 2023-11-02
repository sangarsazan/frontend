import React from 'react';
import Styles from './AppHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const AppHeader = () => {
    return (
        <div className={Styles.wrapper}>
            <h2 className={Styles.title}>ورزشیا</h2>
        </div>
    );
};

export default AppHeader;