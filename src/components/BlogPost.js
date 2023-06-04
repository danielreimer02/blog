import React from "react";

const BlogPost = ({ title, date, body, video }) => {
  return (
    <div calssName="blog-post">
      <h2>{title}</h2>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />

      {video && (
        <div>
          <h3>Video</h3>
          <div className="video-container">
            <iframe
              title="YouTube video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;