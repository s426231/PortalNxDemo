import {
    AppBar,
    Button,
    ButtonGroup,
    Grid,
    Toolbar,
    Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import React, {FC} from 'react';


const Nav: FC = () => {

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item sm={5}>
                            <Typography variant="h5">
                                Next.js TypeScript
                            </Typography>
                        </Grid>
                        <Grid container justify="flex-end" item sm={7}>
                            <ButtonGroup size="small" variant="contained"
                                         aria-label="small outlined button group">
                                <Button href="/" startIcon={<HomeIcon/>}>
                                    Home
                                </Button>
                                <Button href="/faq" startIcon={<LiveHelpIcon/>}>
                                    FAQ
                                </Button>
                                <Button href="/about" startIcon={<InfoIcon/>}>
                                    About
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Nav;