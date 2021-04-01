import Head from 'next/head'
import React, { FC } from 'react';
import MainFeaturedPost from "../components/homepage/mainFeatured";
import FeaturedPost from "../components/homepage/featuredPosts";
import { Grid } from '@material-ui/core';
import { mainFeaturedPost, featuredPosts } from '../mocks/posts';



const Home: FC = () => {
    return (
        <>
            <Head>
                <title>PortalNX Check</title>
                <meta name="description" content="PortalNX check SEO purposes" />
            </Head>
            <MainFeaturedPost post={featuredPosts[0]} />
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </>
    )
}
export default Home;