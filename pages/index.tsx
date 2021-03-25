import Head from 'next/head'
import React, {FC} from 'react';
import PageHeader from "../components/page-header/PageHeader";

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PageHeader headerText="Home"/>
        </>
    )
}
export default Home;