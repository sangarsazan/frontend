import React from 'react';
import {NavLink} from "react-router-dom";

const MenuLink = ({to, children}) => {
    return (
        <NavLink to={to} style={({isActive}) => ({
            color: isActive ? "red" : "white"
        })
        }
        >
            {children}
        </NavLink>
    );
};

export default MenuLink;