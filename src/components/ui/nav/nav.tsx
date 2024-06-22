import React from "react";
import { NavProps } from "./types";
import classes from "./nav.module.scss";

const Nav = ({ logo, items }: NavProps) => {
    return (
        <nav className={classes.container}>
            <div id="logo">{logo}</div>
            <ul className={classes.list}>
                {items.map(item => <a className="menu-item" href={item.url}>{item.label}</a>)}
            </ul>
        </nav>
    )
};

export default Nav;