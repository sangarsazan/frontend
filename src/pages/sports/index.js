import React from 'react';
import ButtonArrow from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Styles from "../sports/sports.module.css";
import {Checkbox, FormControlLabel, LinearProgress} from "@mui/material";
import Button from "../../components/button";
import StepBar from "../../components/stepBar";
import {NavLink} from "react-router-dom";

const SportPage = () => {
    return (
        <div className={Styles.container}>
            <ButtonArrow className={Styles.btnForward} sx={{mt:1.4 ,}}><ArrowForwardIcon/></ButtonArrow>
            <div className={Styles.progressBar}>
                <StepBar variant="determinate" value={"50"} />
            </div>
            <div>
                <p className={Styles.title}>سلامتی همه ورزشکارا صلوات!</p>
            </div>
            <div>
                <p className={Styles.caption}>با چه ورزشی سر کیفی عزیز؟</p>
            </div>
            <div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="فوتبال" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="تناسب اندام" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="پیاده روی" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="هنرهای رزمی" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="دوچرخه سواری" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="تنیس روی میز" />
                </div>
                <div className={Styles.boxes}>
                    <FormControlLabel className={Styles.box1} control={<Checkbox />} label="کوهنوردی" />
                </div>
            </div>

            <div className={Styles.btnWrapper}>
                <NavLink to='/home'>
                    <Button className={Styles.btn} text={"دیگه تمومه!"}/>
                </NavLink>
            </div>
        </div>

    );
};

export default SportPage;
