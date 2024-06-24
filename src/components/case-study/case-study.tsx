import { CaseStudyProps } from "./types";
import styles from "./case-study.module.scss";
import Button from "../ui/button/button";
import Block from "../ui/block";
import { getRandomDelay } from "../../utils";

const CaseStudy = (props: CaseStudyProps) => {

    return (
        <div className={styles.container} style={{ backgroundColor: props.backgroundColor }}>
            <Block className={styles.outerWrapper}>
                <Block className={styles.left}>
                    <Block className={styles.wrapper}>
                        <Block className={styles.header}>{props.headerText}</Block>
                        <Block className={styles.title}>{props.title}</Block>
                        <Block className={styles.summary}>{props.summary}</Block>
                        <Block style={{ flex: 1 }}></Block>
                        <Block className={styles.actionBtn}>
                            <Button>{props.buttonLabel ? props.buttonLabel : 'Read Case Study'}</Button>
                        </Block>
                    </Block>
                </Block>
                <Block className={styles.right}>{props.rightContent}</Block>
            </Block>
            <Block className={styles.highlight} style={{ backgroundColor: props.highlightColor, animationDelay: (getRandomDelay() * 2) + 's' }}></Block>
        </div>
    );
};

export default CaseStudy;