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
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    headerText: string;
    navItems: NavItem[],
}

const useStyles = makeStyles((theme) => ({
    root: {},
    navButton: {
        textDecoration: "none",
        marginRight: theme.spacing(1),
        borderRadius: "0px",
        color: theme.palette.type === 'light' ? "black" : "white",
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        '&:hover': {
            color: theme.palette.type === 'light' ? "white" : "black",
            backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[50],
            '& a':{
                color: theme.palette.type === 'light' ? "white" : "black",
            }
        },
        '& a':{
            textDecoration: "none",
            color: theme.palette.type === 'light' ? "black" : "white",
        },

    },
    menu: {
        marginTop: theme.spacing(4.3),
    },
    subMenu:{
        marginTop: theme.spacing(0.9),
        marginLeft: theme.spacing(14),
    }
}));
const Nav: FC<Props> = ({headerText, navItems}) => {
    const classes = useStyles();

    const navBarRenderer = () => {
        return navItems.map((item) => {
            if (!item.children) {
                return (<Button className={classes.navButton} key={item.name} href={item.link}>{item.name}</Button>)
            } else {
                return (
                    <PopupState variant="popover">
                        {(popupState) => (
                            <React.Fragment>
                                <Button className={classes.navButton} {...bindTrigger(popupState)}>
                                    {item.name}
                                </Button>
                                <Menu className={classes.menu} {...bindMenu(popupState)}>
                                    {
                                        item.children?.map(child => {
                                            if (!child.children) {
                                                return <MenuItem className={classes.navButton}  onClick={popupState.close}>
                                                    <a  href={child.link}>{child.name}</a>
                                                </MenuItem>
                                            } else {
                                                return <PopupState variant="popover">
                                                    {(childPopup) => (
                                                        <React.Fragment>
                                                            <MenuItem className={classes.navButton}  {...bindTrigger(childPopup)}>
                                                                {child.name}
                                                            </MenuItem>
                                                            <Menu  className={classes.subMenu} {...bindMenu(childPopup)}
                                                            >
                                                                {
                                                                    child.children?.map(childItem => {
                                                                        return <MenuItem  className={classes.navButton} onClick={childPopup.close}>
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
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container>
                        <Grid item sm={5}>
                            <Typography variant="h5">
                                {headerText}
                            </Typography>
                        </Grid>
                        <Grid container justify="center" item sm={7}>
                            <ButtonGroup size="small">
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