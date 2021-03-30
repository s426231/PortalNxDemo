import {
    AppBar,
    Button,
    ButtonGroup,
    Grid,
    Toolbar,
    Typography,
} from '@material-ui/core';

import React, {FC} from 'react';
import {NavItem} from "../../models/navigatio";

interface Props {
    headerText: string;
    navItems: NavItem[],
}

const Nav: FC<Props> = ({headerText, navItems}) => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item sm={5}>
                            <Typography variant="h5">
                                {headerText}
                            </Typography>
                        </Grid>
                        <Grid container justify="center" item sm={7}>
                            <ButtonGroup size="small" variant="contained"
                                         aria-label="small outlined button group">
                                {
                                    navItems.map((item) => {
                                        return (<Button key={item.name} href={item.link}>{item.name}</Button>)
                                    })
                                }
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav;