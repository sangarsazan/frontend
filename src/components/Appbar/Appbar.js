import {Outlet} from "react-router-dom";
import MenuLink from "./MenuLink";
import Styles from "./appbar.module.css"
import {faCircleQuestion, faComments, faHouse, faUserGear, faUsers} from '@fortawesome/free-solid-svg-icons'


const Appbar = () => {
    return (
        <>
            <div className={Styles.navWrapper}>
                <nav className={Styles.nav}>
                    <MenuLink iconName={faComments} to="/chat">گفتگو</MenuLink>
                    <MenuLink iconName={faComments} to="/Services">خدمات</MenuLink>
                    <MenuLink iconName={faHouse} to="/home">خانه</MenuLink>
<<<<<<< Updated upstream
                    <MenuLink iconName={faComments} to="/challenge">چالش</MenuLink>
=======
                    <MenuLink iconName={faComments} to="/Challenge">چالش</MenuLink>
>>>>>>> Stashed changes
                    <MenuLink iconName={faUserGear} to="/profile">پروفایل</MenuLink>
                </nav>
            </div>
            <Outlet/>
        </>
    );
};

export default Appbar;