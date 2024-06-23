import React, { ReactNode, useRef } from "react";
import Nav from "../components/ui/nav/nav";
import { NavMenuItem } from "../components/ui/nav/types";
import Banner from "../components/banner/banner";
import CaseStudy from "../components/case-study/case-study";
import styles from "./home-page.module.scss";
import { caseStudies } from "../data";
import HighlightLabel from "../components/ui/highlight-label/highlight-label";
import Bio from "../components/bio/bio";
import Block from "../components/ui/block";
import Button from "../components/ui/button/button";
import Footer from "../components/footer/footer";


const EmailButton = () => {
    return <Button>
        <div style={{ display: "flex", alignItems: "center", width: "130px", justifyContent: "center" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
                mail
            </span>
            <span style={{ marginLeft: "10px" }}>Email</span>
        </div>
    </Button>;
};

const LinkedInButton = () => {
    return <Button onClick={() => window.open("https://www.linkedin.com/in/koyena-saha-879352166/")}>
        <div style={{ display: "flex", alignItems: "center", width: "130px", justifyContent: "center" }}>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M27 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V27C3 27.5304 3.21071 28.0391 3.58579 28.4142C3.96086 28.7893 4.46957 29 5 29H27C27.5304 29 28.0391 28.7893 28.4142 28.4142C28.7893 28.0391 29 27.5304 29 27V5C29 4.46957 28.7893 3.96086 28.4142 3.58579C28.0391 3.21071 27.5304 3 27 3ZM27 27H5V5H27V27ZM12 14V22C12 22.2652 11.8946 22.5196 11.7071 22.7071C11.5196 22.8946 11.2652 23 11 23C10.7348 23 10.4804 22.8946 10.2929 22.7071C10.1054 22.5196 10 22.2652 10 22V14C10 13.7348 10.1054 13.4804 10.2929 13.2929C10.4804 13.1054 10.7348 13 11 13C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14ZM23 17.5V22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23C21.7348 23 21.4804 22.8946 21.2929 22.7071C21.1054 22.5196 21 22.2652 21 22V17.5C21 16.837 20.7366 16.2011 20.2678 15.7322C19.7989 15.2634 19.163 15 18.5 15C17.837 15 17.2011 15.2634 16.7322 15.7322C16.2634 16.2011 16 16.837 16 17.5V22C16 22.2652 15.8946 22.5196 15.7071 22.7071C15.5196 22.8946 15.2652 23 15 23C14.7348 23 14.4804 22.8946 14.2929 22.7071C14.1054 22.5196 14 22.2652 14 22V14C14.0012 13.7551 14.0923 13.5191 14.256 13.3369C14.4197 13.1546 14.6446 13.0388 14.888 13.0114C15.1314 12.9839 15.3764 13.0468 15.5765 13.188C15.7767 13.3292 15.918 13.539 15.9738 13.7775C16.6502 13.3186 17.4389 13.0526 18.2552 13.0081C19.0714 12.9637 19.8844 13.1424 20.6067 13.5251C21.329 13.9078 21.9335 14.48 22.3551 15.1803C22.7768 15.8806 22.9997 16.6825 23 17.5ZM12.5 10.5C12.5 10.7967 12.412 11.0867 12.2472 11.3334C12.0824 11.58 11.8481 11.7723 11.574 11.8858C11.2999 11.9994 10.9983 12.0291 10.7074 11.9712C10.4164 11.9133 10.1491 11.7704 9.93934 11.5607C9.72956 11.3509 9.5867 11.0836 9.52882 10.7926C9.47094 10.5017 9.50065 10.2001 9.61418 9.92597C9.72771 9.65189 9.91997 9.41762 10.1666 9.2528C10.4133 9.08797 10.7033 9 11 9C11.3978 9 11.7794 9.15804 12.0607 9.43934C12.342 9.72064 12.5 10.1022 12.5 10.5Z" fill="white" />
            </svg>
            <span style={{ marginLeft: "10px" }}>LinkedIn</span>
        </div>
    </Button>;
};

const HomePage = () => {
    const aboutMeRef = useRef(null as any);
    const contactRef = useRef(null as any);

    const menuItems: NavMenuItem[] = [
        { label: "Work" },
        { label: "About Me" },
        { label: "Resume" },
        { label: "Contact" },
    ];

    const logo = <span>Koyena Saha</span>;

    const scrollToTop = () => window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

    const onNavItemClick = (item: NavMenuItem) => {
        switch (item.label) {
            case "About Me": (aboutMeRef?.current as any).scrollIntoView({ behavior: "smooth" }); break;
            case "Contact": (contactRef?.current as any).scrollIntoView({ behavior: "smooth" }); break;
        }
    };

    return (
        <div id="home-page">
            <Nav logo={logo} items={menuItems} onClick={onNavItemClick}></Nav>
            <main className={styles.main}>
                <Banner mb={10} mt={4} />
                <center><HighlightLabel>Selected Work</HighlightLabel></center>
                <Block className={styles.caseStudies} mb={8} mt={5}>
                    <Block className={styles.wrapper}>
                        {caseStudies.map((cs, idx) => <CaseStudy key={idx}
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
                <center ref={aboutMeRef}><HighlightLabel>About Me</HighlightLabel></center>
                <Bio mt={2} mb={5} />
                <center ref={contactRef}><HighlightLabel mt={8} mb={6}>Contact Links</HighlightLabel></center>
                <Block style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }} mb={10}>
                    <LinkedInButton />
                    <EmailButton />
                </Block>
                <Footer mb={15} />
                <center><HighlightLabel mb={6} flip={true} onClick={scrollToTop}>Back To Top</HighlightLabel></center>
            </main>
        </div>
    );
};

export default HomePage;