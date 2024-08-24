import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const userId = localStorage.getItem('userId');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        QuesterBaba
      </div>
      <ul className="navbar-links">
        <li><Link to="/">SignIn</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/createPost">Create Post</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li>
          {userId ? (
            <Link to={`/profile/${userId}`}>Profile</Link>
          ) : (
            <Link to="/login">Login</Link>  // Redirect to login if userId is null
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

