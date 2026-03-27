import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Box, GitMerge, LayoutDashboard, Rocket } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: <Rocket size={18} /> },
    { name: 'Build', path: '/build', icon: <Box size={18} /> },
    { name: 'Deploy', path: '/deploy', icon: <Activity size={18} /> },
    { name: 'Pipeline', path: '/pipeline', icon: <GitMerge size={18} /> },
    { name: 'Health', path: '/health', icon: <LayoutDashboard size={18} /> },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src="https://raw.githubusercontent.com/defxharsh/logo_link/main/image%20(1).png" alt="Logo" width="100" />
        </Link>
        
        <div className="navbar-links">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="navbar-actions">
          <button className="btn btn-secondary">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
