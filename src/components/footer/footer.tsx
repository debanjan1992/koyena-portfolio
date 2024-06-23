import Block from "../ui/block";
import image1 from "../../assets/footer/1.png";
import image2 from "../../assets/footer/2.png";
import image3 from "../../assets/footer/3.png";
import image4 from "../../assets/footer/4.png";
import styles from "./footer.module.scss";
import { BlockProps } from "../ui/types";
import { getRandomDelay } from "../../utils";

const Footer = (props: BlockProps) => {

    return <Block className={styles.footer} {...props}>
        <Block className={styles.label}>
            <Block>Crafted with</Block>
            <Block>Love</Block>
        </Block>
        <Block className={styles.images}>
            <img src={image1} style={{ animationDelay: getRandomDelay() + 's' }} />
            <img src={image2} style={{ animationDelay: getRandomDelay() + 's' }} />
            <img src={image3} style={{ animationDelay: getRandomDelay() + 's' }} />
            <img src={image4} style={{ animationDelay: getRandomDelay() + 's' }} />
        </Block>
    </Block>;
};

export default Footer;