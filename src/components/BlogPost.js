import React from 'react';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ title, content, refcontent }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  const sanitizedRefContent = DOMPurify.sanitize(refcontent);

  const replaceSuperscript = (text) => {
    return text.replace(/<sup>(\d+)<\/sup>/g, (match, num) => {
      const unicodeSuperscript = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
      let result = '';
      for (let i = 0; i < num.length; i++) {
        const digit = parseInt(num[i]);
        if (digit >= 0 && digit <= 9) {
          result += unicodeSuperscript[digit];
        } else {
          result += num[i]; // Keep the non-digit characters unchanged
        }
      }
      return result;
    });
  };

  return (
    <div className="blog-post">
      <div className="content">
        <h1>{title}</h1>
        <ReactMarkdown escapeHtml={false}>
  {replaceSuperscript(sanitizedContent)}
</ReactMarkdown>      </div>
      <div className="ref-content">
      <ReactMarkdown escapeHtml={false}>
  {replaceSuperscript(sanitizedRefContent)}
</ReactMarkdown>      </div>
    </div>
  );
};

export default BlogPost;