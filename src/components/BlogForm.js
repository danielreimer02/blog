import React from "react";
import { useForm } from "react-hook-form";

const BlogForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" ref={register} />

      <label htmlFor="date">Date</label>
      <input type="text" name="date" ref={register} />

      <label htmlFor="body">Body</label>
      <textarea name="body" ref={register} />

      <label htmlFor="video">YouTube Video URL</label>
      <input type="text" name="video" ref={register} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;