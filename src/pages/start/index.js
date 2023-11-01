import React from 'react';
import Styles from './start.module.css'


const StartPage = () => {
    return (
        <div className={Styles.container}>
            <div>
                {/*<img className={Styles.logo} src={'#'} alt={"logo"}/>*/}
            </div>
            <div className={Styles.box2}>
                <p>آیا دوست دارید که یک همراه برای ورزش کردن داشته باشید</p>
            </div>
        </div>
    );
};

export default StartPage;