import {NavItem} from "../../models/navigatio";

export const ROUTES: NavItem[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "FAQ",
        link: "/faq",
    },
    {
        name: "Dropdown",
        children: [
            {
                name: "About",
                link: "/about",
            },
            {
                name: "FAQ",
                link: "/faq",
            },
            {
                name: "More Links",
                children: [
                    {
                        name: "Home",
                        link: "/",
                    },
                    {
                        name: "FAQ",
                        link: "/faq",
                    },],

            }
        ]
    },
]