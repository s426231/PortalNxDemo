import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { featuredPosts } from '../../mocks/posts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  postArea: {
    margin: theme.spacing(3, 0, 2),
  }
}));
function Post({ post }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8} className={classes.postArea}>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Divider />
      <Typography variant="body1">
        {post.description}
      </Typography>
    </Grid>
  )
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const posts = featuredPosts;
  const paths = posts.map((post) => ({
    params: { slug: post.id.toString() },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  let post = featuredPosts.find(x => x.id == params.slug);
  // Pass post data to the page via props
  return { props: { post } }
}

export default Post