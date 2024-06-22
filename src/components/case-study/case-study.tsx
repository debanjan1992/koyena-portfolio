import { CaseStudyProps } from "./types";
import styles from "./case-study.module.scss";
import Button from "../ui/button/button";

const CaseStudy = (props: CaseStudyProps) => {
    return (
        <div className={styles.container} style={{ backgroundColor: props.backgroundColor }}>
            <div className={styles.left}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>{props.headerText}</div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.summary}>{props.summary}</div>
                    <div className={styles.actionBtn}>
                        <Button>Read Case Study</Button>
                    </div>
                </div>
            </div>
            <div className={styles.right}>{props.rightContent}</div>
            <div className={styles.highlight} style={{ backgroundColor: props.highlightColor }}></div>
        </div>
    );
};

export default CaseStudy;