import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.scss';

const Navbar = () => (
  <nav>
    <span className="logo">
      Bookstore CMS
    </span>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
    <div className="profile">
      <PersonIcon className="person" />
    </div>
  </nav>
);

export default Navbar;
