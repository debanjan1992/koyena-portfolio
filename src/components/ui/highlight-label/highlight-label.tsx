import { ReactNode } from "react";
import styles from "./highlight-label.module.scss";
import { HighlightLabelProps } from "./types";
import Block from "../block";

const HighlightLabel = (props: HighlightLabelProps) => {
    const reverse = props.flip !== undefined ? props.flip : false;

    return <Block className={props.onClick ? styles.containerHover : styles.container} {...props} style={{
        cursor: props.onClick ? "pointer" : "default",
    }} onClick={props.onClick}>
        <Block className={styles.wrapper}>
            {reverse && <Block className="material-symbols-outlined">
                keyboard_arrow_up
            </Block>}
            <Block className={styles.label}>{props.children}</Block>
            {!reverse && <Block className="material-symbols-outlined">
                keyboard_arrow_down
            </Block>}
        </Block>
    </Block>
};

export default HighlightLabel;