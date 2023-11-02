import {Outlet} from "react-router-dom";
import MenuLink from "./MenuLink";
import Styles from "./appbar.module.css"
import {faComments, faHouse, faUserGear, faUsers} from '@fortawesome/free-solid-svg-icons'


const Appbar = () => {
    return (
        <>
            <div className={Styles.navWrapper}>
                <nav className={Styles.nav}>
                    <MenuLink iconName={faHouse} to="/home">خانه</MenuLink>
                    <MenuLink iconName={faComments} to="/chat">گفتگو</MenuLink>
                    <MenuLink iconName={faUsers} to="/members">کاربران</MenuLink>
                    <MenuLink iconName={faUserGear} to="/profile">پروفایل</MenuLink>
                </nav>
            </div>
            <Outlet/>
        </>
    );
};

export default Appbar;