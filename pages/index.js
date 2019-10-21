import React from 'react';
import Helmet from 'react-helmet';
// import Hello from '@/Hello';
import Main from '@/Main';
import '@styles/index.scss';

const Index = () => (
  <>
    <Helmet title="Main Page" />
    <Main />
    {/* <Hello /> */}
  </>
);

export default Index;
