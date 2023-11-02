import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from "./members.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPowerOff} from "@fortawesome/free-solid-svg-icons";
import AppHeader from "../../components/AppHeader/AppHeader";

const Index = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.wrapperHeader}>
                <div className={Styles.itemHeader}>
                    <p className={Styles.titleP}>موتورت رو روشن کن</p>
                </div>
                <div className={Styles.itemHeader}>
                    <button className={Styles.buttonLeft}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>بررسی اطراف</span>
                    </button>
                </div>
            </div>
            <div>
                <p className={Styles.capthionP}>با کدوم همسفر ورزش میکنی جووون دل؟!</p>
            </div>
            <div className={Styles.wrapper}>
                <h2 className={Styles.title}>ورزشیا</h2>
            </div>
            <Appbar/>
        </div>
    );
};

export default Index;