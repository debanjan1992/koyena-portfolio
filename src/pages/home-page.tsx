import React from "react";
import Nav from "../components/ui/nav/nav";
import { NavMenuItem } from "../components/ui/nav/types";
import Banner from "../components/banner/banner";
import CaseStudy from "../components/case-study/case-study";
import styles from "./home-page.module.scss";
import { caseStudies } from "../data";
import HighlightLabel from "../components/ui/highlight-label/highlight-label";
import Bio from "../components/bio/bio";
import Block from "../components/ui/block";

const HomePage = () => {
    const menuItems: NavMenuItem[] = [
        { label: "Work", url: "" },
        { label: "About Me", url: "" },
        { label: "Resume", url: "" },
        { label: "Contact", url: "" },
    ];

    const logo = <span>Koyena Saha</span>;

    return (
        <div id="home-page">
            <Nav logo={logo} items={menuItems}></Nav>
            <main className={styles.main}>
                <Banner mb={10} />
                <center><HighlightLabel style={{ color: "#A591C6" }}>Selected Work</HighlightLabel></center>
                <Block className={styles.caseStudies} mb={8} mt={5}>
                    <Block className={styles.wrapper}>
                        {caseStudies.map(cs => <CaseStudy
                            headerText={cs.headerText}
                            title={cs.title}
                            summary={cs.summary}
                            backgroundColor={cs.backgroundColor}
                            highlightColor={cs.highlightColor}
                            rightContent={cs.rightContent}
                            {...(cs.buttonLabel && { buttonLabel: cs.buttonLabel })}
                        />)}
                    </Block>
                </Block>
                <center><HighlightLabel mt={6} style={{ color: "#A591C6" }}>About Me</HighlightLabel></center>
                <Bio mt={5} mb={5} />
            </main>
        </div>
    );
};

export default HomePage;