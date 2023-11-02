import Styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Slider from '../../components/slider/slider'

const HomePage = () => {

    return (
        <div className={Styles.wrapper}>
            <div>

            </div>
            <div className={Styles.wrapperButton}>
                <button className={Styles.buttonRight}>
                    <FontAwesomeIcon icon={faPowerOff} />
                    <span>آماده نیستم!</span>
                </button>
                <button className={Styles.buttonLeft}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>بررسی اطراف</span>
                </button>
            </div>
            <div className={Styles.image}>
                <Slider/>
            </div>
        </div>
    );
};

export default HomePage;