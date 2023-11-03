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
                <botton>مشاوره</botton>
                <botton>دوره های آموزشی</botton>
            </div>
            <div>
                <botton>مشاوره سلامت</botton>
                <botton>دوره های آموزشی</botton>
            </div>
            
            <div className={Styles.wrapper3}>
                <botton>محاسبه BMI</botton>
                <botton>فروشگاه تجهیزات</botton>
            </div>

            <Appbar/>
        </div>
    );
};

export default Services;