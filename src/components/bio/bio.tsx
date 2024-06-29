import Block from "../ui/block";
import { BlockProps } from "../ui/types";
import image from "../../assets/mimi.png";
import styles from "./bio.module.scss";
import Pill from "../ui/pill/pill";
import { BioProps } from "./types";

const BioLeft = (props: BlockProps) => {
    return <Block {...props} className={styles.bioText}>
        I'm Koyena Saha, a product and visual designer at <span><strong>Flipkart</strong></span>, currently crafting user centric, & delightful e-commerce experiences. Previously, I worked as a UI/UX Consultant at <span><strong>MTX Group</strong></span> , focusing on impactful digital solutions.
        <br />
        <br />
        I thrive on ambition, curiosity, humour, and nurturing my green plants! 💖
    </Block>
};

const BioRight = (props: BlockProps) => {
    return <Block style={{ position: "relative" }}>
        {/* <Block className={styles.pills} style={{ display: "inline-flex", alignItems: "center", gap: "10px"}}>
            <Pill label="movie buff" backgroundColor="#5F8BFF" />
            <Pill label="gardener" backgroundColor="#FFF38A" color="#958600" />
            <Pill label="newbie reader" backgroundColor="#F16428" />
        </Block> */}
        <Block {...props} style={{
            ...props.style,
            display: "flex",
            justifyContent: "center",
        }}>
            <Block className={styles.imageBackground}>
                <img className={styles.mimi} src={image} />
            </Block>
        </Block>
    </ Block>;
};


const Bio = (props: BioProps) => {
    return <Block {...props} className={styles.container}>
        <BioLeft></BioLeft>
        <BioRight></BioRight>
    </Block>
};

export default Bio;