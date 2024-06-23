import Block from "../ui/block";
import image1 from "../../assets/footer/1.png";
import image2 from "../../assets/footer/2.png";
import image3 from "../../assets/footer/3.png";
import image4 from "../../assets/footer/4.png";
import styles from "./footer.module.scss";
import { BlockProps } from "../ui/types";

const Footer = (props: BlockProps) => {
    return <Block className={styles.footer} {...props}>
        <Block className={styles.label}>
            <Block>Crafted with</Block>
            <Block>Love</Block>
        </Block>
        <Block className={styles.images}>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
        </Block>
    </Block>;
};

export default Footer;