import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#ccc' }}>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
