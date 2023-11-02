import Styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
    return (
        <>
            <div>

            </div>
            <div className={Styles.wrapperButton}>
                <button>

                    <span>آماده نیستم!</span>
                </button>
                <button>

                    <span>بررسی اطراف</span>
                </button>
            </div>
            <div>
                <img src={require('../../assets/images/banner-bmi.png')}/>
            </div>
        </>
    );
};

export default HomePage;