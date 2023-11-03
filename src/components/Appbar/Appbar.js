import {Outlet} from "react-router-dom";
import MenuLink from "./MenuLink";
import Styles from "./appbar.module.css"
import {faComments, faHouse, faPlus, faUserGear, faUsers, faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons'


const Appbar = () => {
    return (
        <>
            <div className={Styles.navWrapper}>
                <nav className={Styles.nav}>
                    <MenuLink iconName={faHouse} to="/">خانه</MenuLink>
                    <MenuLink iconName={faPlus} to="/Services">خدمات</MenuLink>
                    <MenuLink iconName={faWandMagicSparkles} to="/challenge">چالش</MenuLink>
                    <MenuLink iconName={faUserGear} to="/profile">پروفایل</MenuLink>
                    <MenuLink iconName={faComments} to="/chat">گفتگو</MenuLink>
                </nav>
            </div>
            <Outlet/>
        </>
    );
};

export default Appbar;