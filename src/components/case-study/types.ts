import { ReactNode } from "react";

export interface CaseStudyProps {
    headerText: string;
    title: string;
    summary: string;
    backgroundColor: string;
    highlightColor: string;
    rightContent: ReactNode;
    buttonLabel?: string;
}