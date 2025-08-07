import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
          @ 2025 Developed by <span className="developer-name">Prasad Tirri</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 