// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ categories }) => {
  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;