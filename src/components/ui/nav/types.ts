import { ReactNode } from "react";

export interface NavProps {
    logo: ReactNode;
    items: NavMenuItem[];
    onClick: (item: NavMenuItem) => any;
}

export interface NavMenuItem {
    label: string;
}