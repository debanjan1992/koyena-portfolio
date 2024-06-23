import { CSSProperties, ReactNode } from "react";

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
    m?: number;
    p?: number;
    mb?: number;
    mt?: number;
    ml?: number;
    mr?: number;
    pb?: number;
    pt?: number;
    pl?: number;
    pr?: number;
    children?: ReactNode;
    className?: string;
    ref?: any;
}