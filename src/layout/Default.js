import {Outlet} from "react-router-dom";
import MenuLink from "../components/MenuLink";
import Styles from "./DefaultLayout.module.css"
const DefaultLayout = () => {
    return (
        <>
            <div className={Styles.navWrapper}>
                <nav className={Styles.nav}>
                    <div className={Styles.MenuLinkWrapper}>
                        <MenuLink className={Styles.MenuLink} to="/home">خانه</MenuLink>
                    </div>
                    <div>
                        <MenuLink className={Styles.MenuLink} to="/chat">گفتگو</MenuLink>
                    </div>
                    <div>
                        <MenuLink className={Styles.MenuLink} to="/members">کاربران</MenuLink>
                    </div>
                    <div>
                        <MenuLink className={Styles.MenuLink} to="/profile">پروفایل</MenuLink>
                    </div>
                </nav>
            </div>
            <Outlet/>
            <footer></footer>
        </>
    );
};

export default DefaultLayout;