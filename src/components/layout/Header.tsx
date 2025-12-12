import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">Entrepreneur</Link>
        <button id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="main-nav" className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <a href="/#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;