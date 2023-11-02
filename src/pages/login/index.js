import React from 'react';
import Styles from "./login.module.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonArrow from "../../components/backArrow";
import Button from "../../components/button";
import Input from '../../components/input';
import BackArrow from "../../components/backArrow";


const LoginPage = () => {
    return (
        <>
            <BackArrow/>
            <div className={Styles.wrapper}>
                <div className={Styles.hWrapper}>
                    <h1>خوش برگشتی!</h1>
                    <h5>برای ورود ، اطلاعات زیر را وارد کنید</h5>
                </div>
                <Input className={Styles.input} type={'number'} placeholder={'09904633008'}/>
                <Input className={Styles.input} type={'password'} placeholder={'**********'}/>
                <Button className={Styles.button} text={'ورود'}></Button>
            </div>
        </>
    );
};

export default LoginPage;