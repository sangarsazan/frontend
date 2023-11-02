import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/modal'


// import Slider from '../../components/slider/slider'
import Slider from "react-slick";
import dataSlider from "../../components/slider/dataSlider";
import Styles from './home.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appbar from "../../components/Appbar/Appbar";


const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const [modal, setModal] = useState(false);
    // const Toggle = () => setModal(!modal);
    return (
        <>

            <div className={Styles.wrapper}>
                {/*    <div>*/}
                {/*        <button onClick={Toggle}></button>*/}
                {/*    </div>*/}
                {/*    <Modal show={modal} />*/}
                <div className={Styles.header}>
                    <FontAwesomeIcon icon={faBars} className={Styles.hamburMenu}/>
                    <h2>پاکار</h2>
                    <div></div>
                </div>
                <div className={Styles.circleWrapper}>
                    <div className={Styles.circle}></div>
                    <div className={Styles.circle}></div>
                    <div className={Styles.circle}></div>
                    <div className={Styles.circle}></div>
                </div>


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

                {/*<div className={Styles.sliderWrapper}>*/}
                {/*    <Slider className={Styles.slider} {...settings}>*/}
                {/*        {dataSlider.map((obj) => {*/}
                {/*            return (*/}
                {/*                <div className={Styles.sliderItem}>*/}
                {/*                    <img*/}
                {/*                        src={obj}*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })}*/}
                {/*    </Slider>*/}
                {/*</div>*/}
            </div>
            <Appbar/>
        </>

    );
};

export default HomePage;