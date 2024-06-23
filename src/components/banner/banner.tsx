import React from "react";
import styles from "./banner.module.scss";
import Pill from "../ui/pill/pill";
import { BannerProps } from "./types";
import Block from "../ui/block";
import { getRandomDelay } from "../../utils";

const Banner = (props: BannerProps) => {
    return (
        <Block {...props} className={styles.container}>
            <center style={{ height: "400px" }}>
                <div className={styles.row} style={{ fontSize: "79px", animationDelay: getRandomDelay() + 's' }}>
                    <Pill label="Product" backgroundColor="#5F8BFF" style={{
                        position: "relative",
                        right: "-10px",
                        top: "-56px",
                        transform: "rotateZ(16deg)"
                    }} />
                    <span>Intuitive</span>
                </div>
                <div className={styles.row} style={{ fontSize: "110px", animationDelay: getRandomDelay() + 's' }}>
                    <span>User-centric</span>
                    <Pill label="Cuppa" backgroundColor="#FFF38A" color="#958600"
                        icon={<span className="material-symbols-outlined">
                            coffee
                        </span>}
                        style={{
                            position: "relative",
                            right: "57px",
                            top: "-82px",
                            transform: "rotateZ(16deg)"
                        }} />
                </div>
                <div className={styles.row} style={{ fontSize: "79px", animationDelay: getRandomDelay() + 's' }}>
                    <span>Playful</span>
                </div>
                <div className={styles.row} style={{ fontSize: "100px", animationDelay: getRandomDelay() + 's' }}>
                    <Pill label="Prototype" backgroundColor="#F16428" style={{
                        position: "relative",
                        right: "-605px",
                        top: "-66px",
                        transform: "rotateZ(-15deg)"
                    }} />
                    <span>Storyteller</span>
                </div>
            </center>
            <Block className={styles.highlightBox} mt={4}>
                <div className="wrapper">
                    Currently cooking up delightful experiences and tackling tricky user problems for over 400 millions Users at <span>Flipkart!</span>
                    <div>Previously @ MTX Group</div>
                </div>
            </Block>
        </Block>
    );
};

export default Banner;