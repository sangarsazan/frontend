import React from 'react';
import {TextField, Typography} from "@mui/material";
import Styles from "./login.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ButtonArrow from "@mui/material/Button";
import Button from "../../components/button";
const LoginPage = () => {
    return (
        <div>
            <div style={{padding: "20px 10px 0 0"}}>
                <ButtonArrow style={{color:"black"}} className={Styles.btnForward}><ArrowForwardIcon fontSize="medium"/></ButtonArrow>
            </div>

             <div>
                 <Typography className={Styles.Welcome} variant="h4" fontWeight="bold">خوش برگشتی!</Typography>
             </div>

            <div>
                 <Typography variant="h5" style={{textAlign: "center" , padding: "20px"}}>برای ورود ، اطلاعات زیر را وارد کنید</Typography>
            </div>

            <div className={Styles.phone}>
                <TextField id="outlined-basic" label="شماره تلفن" variant="outlined" style={{textAlign:"left"}}/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="گذرواژه" variant="outlined" type="password"/>
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <Button className={Styles.button} text={'ورود'}></Button>
            </div>

        </div>
    );
};

export default LoginPage;