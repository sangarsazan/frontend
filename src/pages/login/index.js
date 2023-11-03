import React, {useState} from 'react';
import Styles from "./login.module.css";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonArrow from "../../components/backArrow";
import Button from "../../components/button";
import Input from '../../components/input';
import BackArrow from "../../components/backArrow";
import {NavLink} from "react-router-dom";

const HandleSubmit = async (e) => {
    e.preventDefault();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    // Make an API call to login the user
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber,
            password,
        }),
    });

    // Handle the response from the API
    if (response.ok) {
        // Login was successful
        // Redirect the user to the home page
    } else {
        // Login was unsuccessful
        // Display an error message to the user
    }
};

const LoginPage = () => {
    return (
        <>
            <BackArrow/>
            <div className={Styles.wrapper}>
                <div className={Styles.hWrapper}>
                    <h1>خوش برگشتی!</h1>
                    <h5>برای ورود ، اطلاعات زیر را وارد کنید</h5>
                </div>
                <Input name={'phoneNumber'} className={Styles.input} type={'number'} placeholder={'09904633008'}/>
                <Input name={'password'} className={Styles.input} type={'password'} placeholder={'**********'}/>
                <NavLink to={'../sports'}>
                    <Button className={Styles.button} text={'ورود'}></Button>
                </NavLink>
                <a className={Styles.a} href={"#"}>«راهنمای نرم افزار»</a>
            </div>
        </>
    );
};

export default LoginPage;