import React from "react";
import { NavProps } from "./types";
import classes from "./nav.module.scss";

const Nav = ({ logo, items, onClick }: NavProps) => {
    return (
        <nav className={classes.container}>
            <div id="logo">{logo}</div>
            <ul className={classes.list}>
                {items.map((item, idx) => <a key={idx} className="menu-item" onClick={() => onClick(item)}>{item.label}</a>)}
            </ul>
        </nav>
    )
};

export default Nav;