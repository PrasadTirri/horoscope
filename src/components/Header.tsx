import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-symbol">⭐</span>
          <span className="logo-text">AstroVaani</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#ebook" className="nav-link">2025 eBook</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 