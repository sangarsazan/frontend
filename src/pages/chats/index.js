import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from "./chatsPage.module.css";
import button from "../../components/button";
import AppHeader from "../../components/AppHeader/AppHeader";
const ChatsPage = () => {
    return (
        <div>
            <AppHeader/>
            <Appbar/>
            <div className={Styles.vipTextW}>
                <span className={Styles.vipText}>این قسمت مختص <br/>ورزشیای وی آی پی هه (:</span>
                    <button><span className={Styles.btnSpan}>خرید اشتراک ویژه</span></button>
            </div>
        </div>
    );
};

export default ChatsPage;