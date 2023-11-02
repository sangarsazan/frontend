import React from 'react';
import {Link} from "@mui/material";
import Styles from "./login.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonArrow from "@mui/material/Button";
import Button from "../../components/button";
import Input from '../../components/input';

const LoginPage = () => {
    return (
        <>
            <ButtonArrow className={Styles.btnForward} sx={{mt:1.4 ,}}><ArrowForwardIcon fontSize="medium"/></ButtonArrow>
            <div className={Styles.wrapper}>
                <div className={Styles.hWrapper}>
                    <h1>خوش برگشتی!</h1>
                    <h5>برای ورود ، اطلاعات زیر را وارد کنید</h5>
                </div>
                <Input className={Styles.input} type={'fields'}/>
                <Input className={Styles.input}/>

                <Button className={Styles.button} text={'ورود'} sx={{width: ".5rem"}}></Button>
                <Link href="/" underline="always" style={{marginRight: "4.8rem", marginTop: "2rem"}}>رمز عبورم رو فراموش کردم</Link>
            </div>
        </>
    );
};

export default LoginPage;