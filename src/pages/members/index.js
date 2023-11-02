import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from "../home/home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faPowerOff} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
    return (
        <div>
            <div className={Styles.wrapperButton}>
                <div>
                    <p>موتورت رو روشن کن</p>
                </div>
                <button className={Styles.buttonLeft}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>بررسی اطراف</span>
                </button>
            </div>
            <div>
                <p></p>
            </div>
            <Appbar/>
        </div>
    );
};

export default Index;