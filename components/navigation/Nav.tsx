import {
    AppBar,
    Button,
    Grid,
    ListItem,
    ListItemText,
    Paper,
    Popper,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React, {FC, useState} from 'react';
import {NavItem,} from "../../models/navigatio";
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
    dropDownButton: {
        textDecoration: "none",
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

    const handleHoverLayerTwo = (listId: string) => (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setOpenLayerTwo(listId)
        setAnchorElLayerTwo(event.currentTarget);
    };

    const handleCloseLayerTwo = () => {
        setOpenLayerTwo("")
        setAnchorElLayerTwo(null);
    };

    const handleHoverLayerThree = (listId: string) => (
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
                        <div onMouseLeave={handleCloseLayerTwo}>
                            <Button aria-describedby={layerOne.name}
                                    className={classes.navButton}
                                    type="button"
                                    onMouseOver={handleHoverLayerTwo(layerOne.name)}
                            >
                                {layerOne.name}
                            </Button>
                            <Popper id={layerOne.name}
                                    placement={"bottom-start"}
                                    open={openLayerTwo === layerOne.name}
                                    anchorEl={anchorElLayerTwo}>
                                <Paper>
                                    {layerOne.children.map((layerTwo) => {
                                        if (layerTwo.children) {
                                            return (<div onMouseLeave={handleCloseLayerThree}>
                                                <Button
                                                    aria-describedby={layerTwo.name}
                                                    className={classes.dropDownButton}
                                                    type="button"
                                                    onMouseOver={handleHoverLayerThree(layerTwo.name)}>
                                                    {layerTwo.name}
                                                </Button>
                                                <Popper id={layerTwo.name}
                                                        placement={"right-start"}
                                                        open={openLayerThree === layerTwo.name}
                                                        anchorEl={anchorElLayerThree}>
                                                    <Paper>
                                                        {layerTwo.children.map(layerThree => {
                                                            return (
                                                                <ListItem key={layerThree.id}
                                                                          button
                                                                          component="a"
                                                                          href={layerThree.link}
                                                                          className={classes.dropDownButton}>
                                                                    <ListItemText>
                                                                        {layerThree.name}
                                                                    </ListItemText>
                                                                </ListItem>
                                                            );
                                                        })
                                                        }
                                                    </Paper>
                                                </Popper>
                                            </div>)
                                        } else {
                                            return (
                                                <ListItem key={layerTwo.id}
                                                          button
                                                          className={classes.dropDownButton}
                                                          component="a"
                                                          href={layerTwo.link}>
                                                    <ListItemText>
                                                        {layerTwo.name}
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                        }
                                    })
                                    }
                                </Paper>
                            </Popper>
                        </div>
                    )
                } else {
                    return (
                        <Button className={classes.navButton}
                                key={layerOne.id}
                                href={layerOne.link}>
                            {layerOne.name}
                        </Button>
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
                        <Grid
                            item
                            sm={5}>
                            <Typography variant="h5">
                                {headerText}
                            </Typography>
                        </Grid>
                        <Grid container
                              item
                              sm={7}>
                            {navBarRenderer()}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav;