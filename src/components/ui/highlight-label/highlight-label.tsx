import { ReactNode } from "react";
import styles from "./highlight-label.module.scss";
import { HighlightLabelProps } from "./types";
import Block from "../block";

const HighlightLabel = (props: HighlightLabelProps) => {

    return <Block {...props} className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.label}>{props.children}</div>
            <div className="material-symbols-outlined">
                keyboard_arrow_down
            </div>
        </div>
    </Block>
};

export default HighlightLabel;