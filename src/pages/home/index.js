import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Styles from './home.module.css'
import Button from "../../components/button";
import logoText from "../../assets/logoText.png";
import logoImage from "../../assets/logo.png";
import React from "react";
const HomePage = () => {
    return (
        <>
            <div className={Styles.box1}>
                    <div className={Styles.header}>
                        <FontAwesomeIcon icon={faBars} className={Styles.hamburMenu}/>
                        <h2>سلام خوش اومدی</h2>
                    </div>
                    <div className={Styles.kadoImg}>
                        <img src={require("../../assets/kado.png")} alt="kado"/>
                    </div>
            </div>

            <div className={Styles.box2}>
                <div className={Styles.container}>

                    <Button>ارسال کادو</Button>

                </div>
            </div>
        </>
    );
};

export default HomePage;