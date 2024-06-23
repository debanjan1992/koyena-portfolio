import Block from "../ui/block";
import { BlockProps } from "../ui/types";
import image from "../../assets/mimi.png";
import styles from "./bio.module.scss";

const BioLeft = (props: BlockProps) => {
    return <Block {...props} className={styles.bioText}>
        I'm Koyena Saha, a product and visual designer at <span><strong>Flipkart</strong></span>, currently crafting user centric, & delightful e-commerce experiences. Previously, I worked as a UI/UX Consultant at <span><strong>MTX Group</strong></span> , focusing on impactful digital solutions.
        <br />
        <br />
        I thrive on ambition, curiosity, humour, and nurturing my green plants! 💖
    </Block>
};

const BioRight = (props: BlockProps) => {
    return <Block {...props} style={{
        ...props.style,
        display: "flex",
        justifyContent: "center",
    }}>
        <Block className={styles.imageBackground}>
            <img className={styles.mimi} src={image} />
        </Block>
    </Block>;
};


const Bio = (props: BlockProps) => {
    return <Block {...props} className={styles.container}>
        <BioLeft style={{ flex: 1 }}></BioLeft>
        <BioRight style={{ flex: 1 }} p={5}></BioRight>
    </Block>
};

export default Bio;