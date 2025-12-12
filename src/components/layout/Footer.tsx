import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {currentYear} Entrepreneur Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;