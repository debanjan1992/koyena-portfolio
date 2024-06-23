import { BlockProps } from "../types";

export interface HighlightLabelProps extends BlockProps {
    children: string;
    reverse?: boolean;
}