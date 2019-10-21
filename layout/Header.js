import React from 'react';
import '@styles/layout/header.scss';

const Header = () => (
  <header id="header">
    <h1><a href="/">CHOI</a></h1>
    <nav>
      <ul className="gnb-list">
        <li><a href="#none">menu01</a></li>
        <li><a href="#none">menu02</a></li>
        <li><a href="#none">menu03</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
