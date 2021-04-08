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
        id: 4,
        name: "Register",
        link: "/register"
    },
    {
        id: 5,
        name: "Dropdown",
        children: [
            {
                id: 6,
                name: "About",
                link: "/about",
            },
            {
                id: 7,
                name: "FAQ",
                link: "/faq",
            },
            {
                id: 8,
                name: "More Links",
                children: [
                    {
                        id: 9,
                        name: "Test",
                        link: "/",
                    },
                    {
                        id: 10,
                        name: "Test",
                        link: "/",
                    },],

            }
        ]
    },
    {
        id: 11,
        name: "Dropdown II",
        children: [
            {
                id: 12,
                name: "About",
                link: "/about",
            },
            {
                id: 13,
                name: "FAQ",
                link: "/faq",
            },
            {
                id: 14,
                name: "About",
                link: "/about",
            },
            {
                id: 15,
                name: "FAQ",
                link: "/faq",
            },
            {
                id: 16,
                name: "Some lon text here",
                children: [
                    {
                        id: 17,
                        name: "Home",
                        link: "/",
                    },
                    {
                        id: 18,
                        name: "FAQ",
                        link: "/faq",
                    },],

            }
        ]
    },

]