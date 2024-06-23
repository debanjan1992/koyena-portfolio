import { ReactNode } from "react";

export interface PillProps {
    label: string;
    backgroundColor: string;
    color?: string;
    icon?: ReactNode;
    style?: React.CSSProperties;
    className?: string;
}