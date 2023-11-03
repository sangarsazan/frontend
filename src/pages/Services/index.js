import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from './Services.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";

const Services = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.wrapper1}>
                <botton>بررسی اطراف</botton>
                <botton>رویداد ها</botton>
            </div>
            <div className={Styles.wrapper2}>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
                <botton>مشاوره</botton>
                <botton>دوره های آموزشی</botton>
            </div>
=======
>>>>>>> Stashed changes
                <botton>مشاوره سلامت</botton>
                <botton>دوره های آموزشی</botton>
            </div>
            <div className={Styles.wrapper3}>
                <botton>محاسبه BMI</botton>
                <botton>فروشگاه تجهیزات</botton>
            </div>
<<<<<<< Updated upstream
=======
>>>>>>> 6236805d722b0621e7b99c49159bd8eaa8436088
>>>>>>> Stashed changes
            <Appbar/>
        </div>
    );
};

export default Services;