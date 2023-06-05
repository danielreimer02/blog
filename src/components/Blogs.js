import React, { useState, useEffect, useCallback } from 'react';
import BlogPost from './BlogPost';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const importFolderNames = useCallback(() => {
    try {
      const context = require.context(
        '../../public/data',
        true,
        /\/ref\.md$/
      );
      const folderNames = context.keys().map((key) => {
        // Extract the folder name from the full path
        const folderName = key.split('/')[1];
        return folderName;
      });
      return folderNames;
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const folderNames = await importFolderNames();

        if (!folderNames || folderNames.length === 0) {
          setBlogPosts([]);
          return;
        }

        const posts = await Promise.all(
          folderNames.map(async (folderName, index) => {
            const response = await fetch(`data/${folderName}/${folderName}.md`);
            const content = await response.text();
            const refresponse = await fetch(`data/${folderName}/ref.md`);
            const refcontent = await refresponse.text();
            console.log(`Fetched content and refcontent for ${folderName}:`, refcontent);
            return { id: index, title: folderName, content: content, refcontent: refcontent };
          })
        );

        setBlogPosts(posts);

      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, [importFolderNames]);

  return (
    <div>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <BlogPost key={post.id} title={post.title} content={post.content} refcontent={post.refcontent}/>
        ))
      ) : (
        <div className="blog-post">No blog posts found.</div>
      )}
    </div>
  );
};

export default Blogs;