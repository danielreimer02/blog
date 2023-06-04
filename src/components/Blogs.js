import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const importFilenames = () => {
    return new Promise((resolve, reject) => {
      try {
        const context = require.context('../../public/data', false, /\.md$/);
        const filenames = context.keys().map((key) => key.replace('./', ''));
        resolve(filenames);
      } catch (error) {
        reject(error);
      }
    });
  };

  const fetchBlogPosts = async () => {
    try {
      const fileNames = await importFilenames();

      if (!fileNames || fileNames.length === 0) {
        setBlogPosts([]);
        return;
      }

      const posts = await Promise.all(
        fileNames.map(async (fileName, index) => {
          const response = await fetch(`data/${fileName}`);
          const content = await response.text();
          return { id: index, title: fileName.replace('.md', ''), content };
        })
      );

      setBlogPosts(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <BlogPost title={post.title} content={post.content} />
        ))
      ) : (
        <div className="blog-post">No blog posts found.</div>
      )}
    </div>
  );
};

export default Blogs;