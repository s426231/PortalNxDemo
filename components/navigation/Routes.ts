import { NavItem } from "../../models/navigatio";

export const ROUTES: NavItem[] = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "About",
        link: "/about",
    },
    {
        id: 3,
        name: "FAQ",
        link: "/faq",
    },
    {
        id: 10,
        name: "Register",
        link: "/register"
    },
    {
        id: 4,
        name: "Dropdown",
        children: [
            {
                id: 5,
                name: "About",
                link: "/about",
            },
            {
                id: 6,
                name: "FAQ",
                link: "/faq",
            },
            {
                id: 7,
                name: "More Links",
                children: [
                    {
                        id: 8,
                        name: "Home",
                        link: "/",
                    },
                    {
                        id: 9,
                        name: "FAQ",
                        link: "/faq",
                    },],

            }
        ]
    },

]