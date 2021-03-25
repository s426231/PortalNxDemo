import Head from 'next/head'
import React,{FC} from 'react';
import PageHeader from "../components/page-header/PageHeader";

const About: FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <PageHeader headerText="About"/>
        </>
    )
}
export default About;