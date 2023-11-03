import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import Appbar from "../../components/Appbar/Appbar";
import Styles from "../chats/chatsPage.module.css";
import button from "../../components/button";
import {NavLink} from "react-router-dom";

const NotCreated = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.vipTextW}>
                <span className={Styles.vipText}>کرکره این قسمت رو <br/>همین روزا میدیم بالا! (:</span>
                <NavLink to={'/services'} className={Styles.btn}><span className={Styles.btnSpan}>بازگشت</span></NavLink>
            </div>
        </div>
    );
};

export default NotCreated;