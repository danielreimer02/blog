import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const response = await fetch('data.txt');
    const data = await response.text();
  
    if (!data) {
      // If data.txt is empty, set an empty array for blogPosts
      setBlogPosts([]);
      return;
    }
  
    const posts = data.split('\n\n').map((post, index) => {
      const lines = post.trim().split('\n');
      const title = lines[0].replace('Title: ', '');
      const content = lines[1].replace('Content: ', '');
  
      return { id: index, title, content };
    });
  
    setBlogPosts(posts);
  };

  return (
    <div>
      {blogPosts.map((post) => (
        <BlogPost title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blogs;