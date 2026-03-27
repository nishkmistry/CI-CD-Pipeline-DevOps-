import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="#">English (United States)</a>
          <a href="#">Your Privacy Choice</a>
        </div>
        <div className="footer-links">
          <a href="#">AI Disclaimer</a>
          <a href="#">Terms of Use</a>
          <a href="#">Trademarks</a>
          <span>© Web Vit 2026</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Web Dev. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
