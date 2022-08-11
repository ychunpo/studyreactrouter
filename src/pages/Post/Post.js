import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPosts } from '../../data/BlogPosts';

const Post = () => {
  //console.log(BlogPosts);

  const { slug } = useParams();
  //console.log(slug)

  const post = BlogPosts[slug];
  //console.log(post)
  const { title, description } = post;

  return (
    <div style={{ padding: '20px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Post;