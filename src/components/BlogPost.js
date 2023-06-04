import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ title, content }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;