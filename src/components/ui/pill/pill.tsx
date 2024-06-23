import React from "react";
import { PillProps } from "./types";
import styles from "./pill.module.scss";
;

const Pill = ({ label, backgroundColor, color, icon, style, className }: PillProps) => {
    return (
        <div className={styles.container} style={{
            backgroundColor: backgroundColor,
            color: color || "inherit",
            ...style
        }}>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <span>{label}</span>
                {icon && <div>{icon}</div>}
            </div>
        </div>
    );

};

export default Pill;