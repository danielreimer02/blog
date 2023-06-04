import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <h1>Daniel's Blog</h1>
      <nav>
        <ul>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;