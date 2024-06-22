import { ReactNode } from "react";

export interface NavProps {
    logo: ReactNode;
    items: NavMenuItem[];
}

export interface NavMenuItem {
    label: string;
    url: string;
}