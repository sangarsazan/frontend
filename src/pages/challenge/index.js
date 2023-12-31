import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import Appbar from "../../components/Appbar/Appbar";
import Styles from "../chats/chatsPage.module.css";
import button from "../../components/button";

const challenge = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.vipTextW}>
                <span className={Styles.vipText}>این قسمت مختص <br/>ورزشیای وی آی پی هه (:</span>
                <button className={Styles.btn}><span className={Styles.btnSpan}>خرید اشتراک ویژه</span></button>
            </div>
            <Appbar/>
        </div>
    );
};

export default challenge;