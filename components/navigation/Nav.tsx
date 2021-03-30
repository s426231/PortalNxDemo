import {
    AppBar,
    Button,
    ButtonGroup,
    Grid,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';

import React, {FC} from 'react';
import {NavItem} from "../../models/navigatio";
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';

interface Props {
    headerText: string;
    navItems: NavItem[],
}

const Nav: FC<Props> = ({headerText, navItems}) => {

    const navBarRenderer = () => {
        return navItems.map((item) => {
            if (!item.children) {
                return (<Button key={item.name} href={item.link}>{item.name}</Button>)
            } else {
                return (
                    <PopupState variant="popover">
                        {(popupState) => (
                            <React.Fragment>
                                <Button variant="contained" {...bindTrigger(popupState)}>
                                    {item.name}
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    {
                                        item.children?.map(child => {
                                            if (!child.children) {
                                                return <MenuItem onClick={popupState.close}>
                                                    <a href={child.link}>{child.name}</a>
                                                </MenuItem>
                                            } else {
                                                return <PopupState variant="popover">
                                                    {(childPopup) => (
                                                        <React.Fragment>
                                                            <MenuItem {...bindTrigger(childPopup)}>
                                                                {child.name}
                                                            </MenuItem >
                                                            <Menu  {...bindMenu(childPopup)}
                                                            >
                                                                {
                                                                    child.children?.map(childItem => {
                                                                        return <MenuItem onClick={childPopup.close}>
                                                                            <a href={childItem.link}>{childItem.name}</a>
                                                                        </MenuItem>
                                                                    })
                                                                }
                                                            </Menu>
                                                        </React.Fragment>
                                                    )}
                                                </PopupState>
                                            }
                                        })
                                    }
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                )
            }
        })
    }

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
                                {navBarRenderer()}
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav;