import {Outlet} from "react-router-dom";
import MenuLink from "./MenuLink";
import Styles from "./appbar.module.css"
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupsIcon from '@mui/icons-material/Groups';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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