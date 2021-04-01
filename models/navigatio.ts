
export interface NavItem {
    id: number;
    name: string;
    link?: string;
    children?: NavItemChild[];
}

export interface NavItemChild {
    id: number;
    name: string;
    link?: string;
    children?: NavItemChildrenChild[];
}

export interface NavItemChildrenChild {
    id: number;
    name: string;
    link: string;
}