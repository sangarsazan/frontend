import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import Styles from "./appbar.module.css";

const isActiveIcon = () => {
  
}

const MenuLink = ({to, children, iconName}) => {
    return (
            <>
                <NavLink to={to} style={({isActive}) => ({
                    color: isActive ? "#0088ff" : "white"
                })
                }
                    >
                    <div className={Styles.MenuLink}>
                        <FontAwesomeIcon icon={iconName} className={Styles.icon}/>
                        {children}
                    </div>
                </NavLink>

            </>
    );
};

export default MenuLink;