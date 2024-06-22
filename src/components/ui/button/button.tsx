import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button = ({ children }: ButtonProps) => {
    return <button className={styles.btn}>{children}</button>;
};

export default Button;