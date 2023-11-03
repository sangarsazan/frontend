import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import Styles from "../chats/chatsPage.module.css";
import button from "../../components/button";
import Appbar from "../../components/Appbar/Appbar";

const ProfilePage = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.vipTextW}>
                <span className={Styles.vipText}>کرکره این قسمت رو <br/>همین روزا میدیم بالا! (:</span>
            </div>
            <Appbar/>
        </div>
    );
};

export default ProfilePage;