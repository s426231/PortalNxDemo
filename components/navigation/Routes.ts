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
                name: "Link 1",
            },
            {
                name: "Link 2"
            },
            {
                name: "More Links",
                children: [
                    {
                        name: "Child-Link 1",
                        link: "/",
                    },
                    {
                        name: "Child-Link 2",
                        link: "/",
                    },],

            }
        ]
    },
]