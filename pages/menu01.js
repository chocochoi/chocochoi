import React from 'react';
import Helmet from 'react-helmet';
// import Hello from '@/Hello';
import Menu01Container from '@/menu01';
import '@styles/index.scss';

const Menu01 = () => (
  <>
    <Helmet title="Menu01 page" />
    <Menu01Container />
    {/* <Hello /> */}
  </>
);

export default Menu01;
