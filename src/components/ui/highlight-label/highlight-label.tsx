import { ReactNode } from "react";
import styles from "./highlight-label.module.scss";
import { HighlightLabelProps } from "./types";
import Block from "../block";

const HighlightLabel = (props: HighlightLabelProps) => {

    return <Block className={styles.container} {...props}>
        <Block className={styles.wrapper}>
            {props.reverse && <Block className="material-symbols-outlined">
                keyboard_arrow_up
            </Block>}
            <Block className={styles.label}>{props.children}</Block>
            {!props.reverse && <Block className="material-symbols-outlined">
                keyboard_arrow_down
            </Block>}
        </Block>
    </Block>
};

export default HighlightLabel;