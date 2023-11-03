import ButtonArrow from "@mui/material/Button";
import Styles from './backArrow.module.css';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const BackArrow = () => {
    return (
        <div>
            <ButtonArrow className={Styles.btnForward} sx={{mt:1.4}}><ArrowForwardIcon fontSize="medium"/></ButtonArrow>
        </div>
    );
};

export default BackArrow;
