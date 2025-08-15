import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Login/Register</Link>
      <Link to="/auth">Home</Link>
    </div>
  );
};