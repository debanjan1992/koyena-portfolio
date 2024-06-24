import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button = ({ children, onClick }: ButtonProps) => {
    return <button className={styles.btn} onClick={onClick}>{children}</button>;
};

export default Button;