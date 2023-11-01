import React from 'react';
import {TextField, Typography} from "@mui/material";
import Styles from "./login.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonArrow from "@mui/material/Button";
import Button from "../../components/button";
const LoginPage = () => {
    return (
        <div>
            <div className={Styles.arrowbtnwrapper}>
                <ButtonArrow className={Styles.btnForward} style={{color: "black"}}><ArrowForwardIcon fontSize="medium"/></ButtonArrow>
            </div>

             <div className={Styles.titre}>
                 <h1>خوش برگشتی!</h1>
             </div>

            <div className={Styles.caption}>
                 <h5>برای ورود ، اطلاعات زیر را وارد کنید</h5>
            </div>

            <div className={Styles.phone}>
                <TextField id="outlined-basic" label="شماره تلفن" variant="outlined" style={{}}/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="گذرواژه" variant="outlined" type="password"/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <Button className={Styles.button} text={'ورود'} sx={{width: ".5rem"}}></Button>
            </div>

        </div>
    );
};

export default LoginPage;