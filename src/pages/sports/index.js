import React from 'react';
import ButtonArrow from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Styles from "../sports/sports.module.css";
import {Checkbox, FormControlLabel} from "@mui/material";

const SportPage = () => {
    return (
        <>
            <ButtonArrow className={Styles.btnForward} sx={{mt:1.4 ,}}><ArrowForwardIcon/></ButtonArrow>
            <p className={Styles.title}>سلامتی همه ورزشکارا صلوات!</p>
            <p className={Styles.caption}>با چه ورزشی سر کیفی عزیز؟</p>
            <div className={Styles.boxes}>
                <FormControlLabel className={Styles.box1} control={<Checkbox />} label="فوتبال" />
                <br />
            </div>
        </>

    );
};

export default SportPage;
