import { BlockProps } from "../types";

export interface HighlightLabelProps extends BlockProps {
    children: string;
    flip?: boolean;
    onClick?: () => any;
}