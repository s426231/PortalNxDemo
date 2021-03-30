
export interface NavItem {
    name: string;
    link?: string;
    children?: NavItemChild[];
}

export interface NavItemChild {
    name: string;
    link?: string;
    children?: NavItemChildrenChild [];
}

export interface NavItemChildrenChild {
    name: string;
    link: string;
}