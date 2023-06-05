import React from 'react';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ title, content, refcontent }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  const sanitizedRefContent = DOMPurify.sanitize(refcontent);

  return (
    <div className="blog-post">
      <div className="content">
        <h1>{title}</h1>
        <ReactMarkdown escapeHtml={false}>{sanitizedContent.replaceAll('<sup>1</sup>', '¹')}</ReactMarkdown>
      </div>
      <div className="ref-content">
        <ReactMarkdown escapeHtml={false}>{sanitizedRefContent.replaceAll('<sup>1</sup>', '¹')}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;