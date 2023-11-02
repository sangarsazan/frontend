import React from 'react';
import Styles from './start.module.css'
import Button from '../../components/button'

const StartPage = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.box1}>
                {/*<img className={Styles.logo} src={'#'} alt={"logo"}/>*/}

            </div>
            <div className={Styles.box2}>
                <p>آیا دوست دارید که یک همراه برای ورزش کردن داشته باشید</p>
                <Button className={Styles.button} text={'تازه وارد هستم'}></Button>
                <Button text={'ورود'}></Button>
            </div>
        </div>
    );
};

export default StartPage;