import {
    AppBar,
    Button,
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
            '& a': {
                color: theme.palette.type === 'light' ? "white" : "black",
            }
        },
        '& a': {
            textDecoration: "none",
            color: theme.palette.type === 'light' ? "black" : "white",
        },

    },
    menu: {
        marginTop: theme.spacing(4.3),
    },
}));
const Nav: FC<Props> = ({headerText, navItems}) => {
    const classes = useStyles();

    const navBarRenderer = () => {
        return navItems.map((layerOne) => {
                if (!layerOne.children) {
                    return (<Button key={layerOne.id} className={classes.navButton}
                                    href={layerOne.link}>{layerOne.name}</Button>)
                } else {
                    return (
                        <PopupState key={layerOne.id} variant="popover">
                            {(layerTwoPopoverState) => (
                                <React.Fragment>
                                    <Button className={classes.navButton} {...bindTrigger(layerTwoPopoverState)}>
                                        {layerOne.name}
                                    </Button>
                                    <Menu className={classes.menu} {...bindMenu(layerTwoPopoverState)}>
                                        {
                                            layerOne.children?.map(layerTwo => {
                                                if (!layerTwo.children) {
                                                    return <MenuItem key={layerTwo.id} className={classes.navButton}
                                                                     onClick={layerTwoPopoverState.close}>
                                                        <a href={layerTwo.link}>{layerTwo.name}</a>
                                                    </MenuItem>
                                                } else {
                                                    return <PopupState key={layerTwo.id} variant="popover">
                                                        {(layerThreePopoverState) => (
                                                            <React.Fragment>
                                                                <MenuItem
                                                                    className={classes.navButton}  {...bindTrigger(layerThreePopoverState)}>
                                                                    {layerTwo.name}
                                                                </MenuItem>
                                                                <Menu
                                                                    className={classes.menu} {...bindMenu(layerThreePopoverState)}
                                                                >
                                                                    {
                                                                        layerTwo.children?.map(layerThree => {
                                                                            return <MenuItem key={layerThree.id}
                                                                                             className={classes.navButton}
                                                                                             onClick={layerThreePopoverState.close}>
                                                                                <a href={layerThree.link}>{layerThree.name}</a>
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
            }
        )
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
                        <Grid container item sm={7}>
                            {navBarRenderer()}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav;