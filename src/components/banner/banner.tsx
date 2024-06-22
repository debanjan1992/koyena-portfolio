import React from "react";
import styles from "./banner.module.scss";
import Pill from "../ui/pill/pill";

const Banner = () => {
    return (
        <div className={styles.container}>
            <div style={{ height: "400px" }}>
                <div className={styles.row} style={{ fontSize: "79px" }}>
                    <Pill label="Product" backgroundColor="#5F8BFF" style={{
                        position: "relative",
                        right: "-10px",
                        top: "-56px",
                        transform: "rotateZ(16deg)"
                    }} />
                    <span>Intuitive</span>
                </div>
                <div className={styles.row} style={{ fontSize: "110px" }}>
                    <span>User-centric</span>
                    <Pill label="Cuppa" backgroundColor="#FFF38A" color="#958600" style={{
                        position: "relative",
                        right: "57px",
                        top: "-82px",
                        transform: "rotateZ(16deg)"
                    }} />
                </div>
                <div className={styles.row} style={{ fontSize: "79px" }}>
                    <span>Playful</span>
                </div>
                <div className={styles.row} style={{ fontSize: "100px" }}>
                    <Pill label="Prototype" backgroundColor="#F16428" style={{
                        position: "relative",
                        right: "-605px",
                        top: "-66px",
                        transform: "rotateZ(-15deg)"
                    }} />
                    <span>Storyteller</span>
                </div>
            </div>
            <div className={styles.highlightBox}>
                <div className="wrapper">
                    Currently cooking up delightful experiences and tackling tricky user problems for over 400 millions Users at <span>Flipkart!</span>
                    <div>Previously @ MTX Group</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;