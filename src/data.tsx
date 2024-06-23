import React from "react";
import { CaseStudyProps } from "./components/case-study/types";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import CaseStudy3Image1 from "./assets/case/1.png";
import CaseStudy3Image2 from "./assets/case/2.png";
import CaseStudy3Image3 from "./assets/case/3.png";
import CaseStudy3Image4 from "./assets/case/4.png";
import Block from "./components/ui/block";

const CaseStudy3 = () => {
    return <Block style={{
        position: "absolute",
        display: "flex",
        gap: "15px"
    }}>
        <Block style={{
            position: "relative",
            top: "-100px",
            left: "150px",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        }}>
            <img src={CaseStudy3Image1} width="262px" />
            <img src={CaseStudy3Image2} width="262px" />
        </Block>
        <Block style={{
            position: "relative",
            left: "150px",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
        }}>
            <img src={CaseStudy3Image3} width="262px" />
            <img src={CaseStudy3Image4} width="262px" />
        </Block>
    </Block>
};

export const caseStudies: CaseStudyProps[] = [
    {
        headerText: "01 - FLIPKART - What’s Your Vibe?",
        title: "Enhancing UX for Tail & Torso Discoverability",
        summary: "Boosting discoverability in Flipkart's Home & Furniture category by highlighting 1700+ Tail & Torso verticals, essential for sector growth",
        backgroundColor: "#EC304B",
        highlightColor: "#DD112F",
        rightContent: <img src={Image1} width="262px" style={{
            position: "relative",
            top: "44px",
            left: "120px"
        }} />
    },
    {
        headerText: "01 - FLIPKART GREEN",
        title: "Environmentally Safe Shopping Made Simple",
        summary: "Empowering eco-conscious consumers with a user-friendly platform for discovering and buying environmentally safe products effortlessly",
        backgroundColor: "#008E41",
        highlightColor: "#007E3A",
        rightContent: <img src={Image2} width="262px" style={{
            position: "relative",
            top: "44px",
            left: "120px"
        }} />
    },
    {
        headerText: "03 - PREVIOUS WORK",
        title: "Behance Portfolio",
        summary: "My early Behance projects opened doors to exciting design opportunities, showing my growth from newbie to experienced UX Designer",
        backgroundColor: "#4178FF",
        highlightColor: "#1C5BF6",
        buttonLabel: "Explore My Behance Portfolio",
        rightContent: <CaseStudy3 />
    }
]