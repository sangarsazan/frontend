import React from 'react';
import {TextField, Typography} from "@mui/material";
import styles from "./login.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@mui/material/Button";
const LoginPage = () => {
    return (
        <div>
            <div className={styles.forward}>
                <Button style={{color:"black"}} className={styles.btnForward}><ArrowForwardIcon fontSize="large"/></Button>
            </div>

             <div>
                 <Typography className={styles.Welcome} variant="h4" fontWeight="bold">خوش برگشتی!</Typography>
             </div>

            <div>
                 <Typography variant="h5" style={{textAlign: "center" , padding: "20px"}}>برای ورود ، اطلاعات زیر را وارد کنید</Typography>
            </div>
            <div style={{display: "flex", padding:"100px 0 15px 0" , justifyContent: "center"}}>
                <TextField id="outlined-basic" label="شماره تلفن" variant="outlined" style={{textAlign:"left"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <TextField id="outlined-basic" label="گذرواژه" variant="outlined"/>
            </div>
        </div>
    );
};

export default LoginPage;