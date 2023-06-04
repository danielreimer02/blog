// src/App.js
import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const blogPostContent = {
    title: 'Blog Post Title',
    content: 'Blog post content goes here...',
  };

  const sidebarCategories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <BlogPost title={blogPostContent.title} content={blogPostContent.content} />
        <Sidebar categories={sidebarCategories} />
      </div>
      <Footer />
    </div>
  );
};

export default App;