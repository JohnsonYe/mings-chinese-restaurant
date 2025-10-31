import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/" className="logo">
          Mings Chinese Restaurant
        </Link>
        <ul className="nav-menu">
          <li className={isActive('/') && currentPath === '/' ? 'active' : ''}>
            <Link to="/">Welcome to Mings</Link>
          </li>
          <li className={isActive('/menu') ? 'active' : ''}>
            <Link to="/menu">Menu</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
