import React from 'react';
import Appbar from "../../components/Appbar/Appbar";
import Styles from "./members.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import AppHeader from "../../components/AppHeader/AppHeader";

const Members = () => {
    return (
        <div>
            <AppHeader/>
            <div className={Styles.wrapperHeader}>
                <div className={Styles.itemHeader}>
                    <p className={Styles.titleP}>موتورت رو روشن کن</p>
                </div>
                <div className={Styles.itemHeader}>
                    <button className={Styles.buttonLeft}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>بررسی اطراف</span>
                    </button>
                </div>
            </div>
            <div>
                <p className={Styles.capthion}>با کدوم همسفر ورزش میکنی جووون دل؟!</p>
            </div>
            <div className={Styles.Box}>
                <div className={Styles.circleWrapper}>
                    <button className={Styles.circle}></button>
                </div>
                <div className={Styles.textMember}>

                    <h2>علیرضا دهقانیان</h2>

                    <div>
                        <span className={Styles.span1}>  دوچرخه سواری  </span>
                        <span className={Styles.span2}>  کوهنوردی  </span>
                        <span className={Styles.span3}>   فوتبال </span>
                    </div>

                </div>

            </div>

            <div className={Styles.Box}>
                <div className={Styles.circleWrapper}>
                    <button className={Styles.circle}></button>
                </div>
                <div className={Styles.textMember}>

                    <h2>علیرضا دهقانیان</h2>

                    <div>
                        <span className={Styles.span1}>  دوچرخه سواری  </span>
                        <span className={Styles.span2}>  کوهنوردی  </span>
                        <span className={Styles.span3}>   فوتبال </span>
                    </div>

                </div>

            </div>

            <div className={Styles.Box}>
                <div className={Styles.circleWrapper}>
                    <button className={Styles.circle}></button>
                </div>
                <div className={Styles.textMember}>

                    <h2>علیرضا دهقانیان</h2>

                    <div>
                        <span className={Styles.span1}>  دوچرخه سواری  </span>
                        <span className={Styles.span2}>  کوهنوردی  </span>
                        <span className={Styles.span3}>   فوتبال </span>
                    </div>

                </div>

            </div>

            <div className={Styles.Box}>
                <div className={Styles.circleWrapper}>
                    <button className={Styles.circle}></button>
                </div>
                <div className={Styles.textMember}>

                    <h2>علیرضا دهقانیان</h2>

                    <div>
                        <span className={Styles.span1}>  دوچرخه سواری  </span>
                        <span className={Styles.span2}>  کوهنوردی  </span>
                        <span className={Styles.span3}>   فوتبال </span>
                    </div>

                </div>

            </div>
            <Appbar/>
        </div>
    );
};

export default Members;