import React from "react";
import { PillProps } from "./types";
import styles from "./pill.module.scss";
;

const Pill = ({ label, backgroundColor, color, icon, style }: PillProps) => {
    return (
        <div className={styles.container} style={{
            backgroundColor: backgroundColor,
            color: color || "inherit",
            ...style
        }}>
            <span>{label}</span>
            { icon && <div>{icon}</div>}
        </div>
    );

};

export default Pill;