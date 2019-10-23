import React from 'react';
import Link from 'next/link';
import '@styles/layout/header.scss';

const Header = () => (
  <header id="header">
    <h1><a href="/">CHOI</a></h1>
    <nav>
      <ul className="gnb-list">
        <li><Link href="/menu01"><a>menu01</a></Link></li>
        <li><a href="#none">menu02</a></li>
        <li><a href="#none">menu03</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
