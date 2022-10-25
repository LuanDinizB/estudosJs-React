import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

import { Nav } from './styles';

export default function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome size={24} />
      </a>
      <a href="/login">
        <FaUserAlt size={24} />
      </a>
      <a href="/asd">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
