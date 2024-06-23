import React from "react";
import { CaseStudyProps } from "./components/case-study/types";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";

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
        rightContent: <img src={Image2} width="262px" style={{
            position: "relative",
            top: "44px",
            left: "120px"
        }} />
    }
]