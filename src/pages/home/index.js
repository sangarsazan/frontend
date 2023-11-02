import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import Slider from '../../components/slider/slider'
import Slider from "react-slick";
import dataSlider from "../../components/slider/dataSlider";
import Styles from './home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.wrapperButton}>
                <button className={Styles.buttonRight}>
                    <FontAwesomeIcon className={Styles.icon} icon={faPowerOff} />
                    <span>آماده نیستم!</span>
                </button>
                <button className={Styles.buttonLeft}>
                    <FontAwesomeIcon className={Styles.icon} icon={faMagnifyingGlass} />
                    <span>بررسی اطراف</span>
                </button>
            </div>

            <div className={Styles.sliderWrapper}>
                <Slider className={Styles.slider} {...settings}>
                    {dataSlider.map((obj) => {
                        return (
                            <div className={Styles.sliderItem}>
                                <img
                                    src={obj}
                                />
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>
    );
};

export default HomePage;