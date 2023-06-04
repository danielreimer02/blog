import React from 'react';

const BlogPost = ({ title, content }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default BlogPost;