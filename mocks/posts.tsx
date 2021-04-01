import { post } from "../models/posts";

export const featuredPosts: post[] = [
  {
    id: 1,
    title: 'PortalNX',
    date: 'Mar 31',
    description:
      'This is a homepage featured post test.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    id: 2,
    title: 'PortalNX',
    date: 'Mar 31',
    description:
      'This is a homepage featured post test',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
    linkText: 'Continue reading...'
  },
  {
    id: 3,
    title: 'Title of a longer featured blog post',
    description:
      "This is a homepage featured post test, that has wider text for multiple lines - it works perfectly.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  }
];

export const mainFeaturedPost: post = {
  id: 3,
  title: 'Title of a longer featured blog post',
  description:
    "This is a homepage featured post test, that has wider text for multiple lines - it works perfectly.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};