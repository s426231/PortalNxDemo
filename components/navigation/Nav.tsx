import {
    AppBar,
    Button, ClickAwayListener,
    Grid, List, ListItem, ListItemText,
    Menu,
    MenuItem, Paper, Popper, PopperPlacementType,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React, {FC, useState} from 'react';
import {NavItem, NavItemChild} from "../../models/navigatio";
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
}));
const Nav: FC<Props> = ({headerText, navItems}) => {
    const classes = useStyles();

    const [openLayerTwo, setOpenLayerTwo] = useState<string>("");
    const [anchorElLayerTwo, setAnchorElLayerTwo] = React.useState<null | HTMLElement>(null);

    const [openLayerThree, setOpenLayerThree] = useState<string>("");
    const [anchorElLayerThree, setAnchorElLayerThree] = React.useState<null | HTMLElement>(null);

    const handleClickLayerTwo = (listId: string) => (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setOpenLayerTwo(listId)
        setAnchorElLayerTwo(event.currentTarget);
    };

    const handleCloseLayerTwo = () => {
        setOpenLayerTwo("")
        setAnchorElLayerTwo(null);
    };

    const handleClickLayerThree = (listId: string) => (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setOpenLayerThree(listId)
        setAnchorElLayerThree(event.currentTarget);
    };

    const handleCloseLayerThree = () => {
        setOpenLayerThree("")
        setAnchorElLayerThree(null);
    };

    const navBarRenderer = () => {
        return navItems.map((layerOne) => {
                if (layerOne.children) {
                    return (
                        <>
                            <Button aria-describedby={layerOne.name} className={classes.navButton} type="button"
                                    onClick={handleClickLayerTwo(layerOne.name)}>{layerOne.name}</Button>
                            <Popper id={layerOne.name} placement={"bottom-start"}
                                    open={openLayerTwo === layerOne.name ? true : false}
                                    anchorEl={anchorElLayerTwo}>
                                <ClickAwayListener onClickAway={handleCloseLayerTwo}>
                                    <Paper>
                                        <List>
                                            {layerOne.children.map((layerTwo) => {
                                                if (layerTwo.children) {
                                                    return (<> <Button aria-describedby={layerTwo.name}
                                                                       className={classes.navButton} type="button"
                                                                       onClick={handleClickLayerThree(layerTwo.name)}>{layerTwo.name}</Button>
                                                        <Popper id={layerTwo.name} placement={"right-start"}
                                                                open={openLayerThree === layerTwo.name ? true : false}
                                                                anchorEl={anchorElLayerThree}> <ClickAwayListener
                                                            onClickAway={handleCloseLayerThree}>
                                                            <Paper>
                                                                {layerTwo.children.map(layerThree => {
                                                                    return (<ListItem key={layerThree.id} button
                                                                                      className={classes.navButton}>
                                                                        <ListItemText>{layerThree.name}</ListItemText>
                                                                    </ListItem>);
                                                                })
                                                                }
                                                            </Paper></ClickAwayListener></Popper>
                                                    </>)
                                                } else {
                                                    return (
                                                        <ListItem key={layerTwo.id} button className={classes.navButton}>
                                                            <ListItemText>{layerTwo.name}</ListItemText>
                                                        </ListItem>)
                                                }
                                            })
                                            }
                                        </List>
                                    </Paper>
                                </ClickAwayListener>
                            </Popper>
                        </>
                    )
                } else {
                    return (<Button className={classes.navButton} key={layerOne.id}
                                    href={layerOne.link}>{layerOne.name}</Button>)
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