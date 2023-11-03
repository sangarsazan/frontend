import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from './Services.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import {NavLink} from "react-router-dom";

const Services = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.wrapper}>
                <NavLink className={Styles.nav} to={'/notCreated'}>بررسی اطراف</NavLink>
                <NavLink className={Styles.nav} to={'/notCreated'}>رویداد ها</NavLink>
            </div>
            <div className={Styles.wrapper}>
                <NavLink className={Styles.nav} to={'/notCreated'}>مشاوره سلامت</NavLink>
                <NavLink className={Styles.nav} to={'/notCreated'}>دوره های آموزشی</NavLink>
            </div>
            
            <div className={Styles.wrapper}>
                <NavLink className={Styles.nav} to={'/notCreated'}>BMI</NavLink>
                <NavLink className={Styles.nav} to={'/notCreated'}>فروشگاه تجهیزات</NavLink>
            </div>

            <Appbar/>
        </div>
    );
};

export default Services;