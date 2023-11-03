import React from 'react';
import Styles from './signup.module.css';
import StepBar from '../../components/stepBar';
import Inout from '../../components/input'
import Button from '../../components/button'
import {Link} from "@mui/material";
import {useNavigate} from "react-router-dom";

const SignupPages = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/home")
    }
    return (
        <div className={Styles.container}>
            <StepBar variant="determinate" value={"25"} />
            <h2 className={Styles.title}>ثبت نام در یک دقیقه!</h2>
            <div className={Styles.wrapperInput}>
                <Inout className={Styles.input} type={'text'} placeholder={"اسم و فامیل"}/>
                <Inout className={Styles.input} type={'number'} placeholder={"سن"}/>
            </div>
            <Inout className={Styles.input} type={'number'} placeholder={"شماره تلفن"}/>
            <Inout className={Styles.input} type={'password'} placeholder={"گذرواژه"}/>
            <p>لطفا جنسیتتون رو درست وارد کنید (:</p>

            <div className={Styles.wrapperRadio}>
                <div className={Styles.radio}>
                    <input type="radio" id="huey" name="drone" value="mel" checked/>
                    <label htmlFor="mel">مرد</label>
                </div>

                <div className={Styles.radio}>
                    <input type="radio" id="louie" name="drone" value=" female"/>
                    <label htmlFor=" female">زن</label>
                </div>
            </div>
            <Link to="/login">
                <Button text={'ثبت'} className={Styles.button}/>
            </Link>
        </div>
    );
};

export default SignupPages;