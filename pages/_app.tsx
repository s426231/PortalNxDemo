import {AppProps} from 'next/app'
import React from 'react'
import Nav from "../components/navigation/Nav";
import '../styles/globals.css'
import {Grid} from "@material-ui/core";
import {ROUTES} from "../components/navigation/Routes";


function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Nav headerText="Portal NX Demo" navItems={ROUTES}/>
            <Grid container xs={12}>
                <Grid item xs={false} sm={2}>
                </Grid>
                <Grid container item xs={12} sm={8}>
                    <Component {...pageProps} />
                </Grid>
                <Grid item xs={false} sm={2}>
                </Grid>
            </Grid>
        </>)
}

export default App