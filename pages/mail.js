import React from 'react';
import Helmet from 'react-helmet';
// import Hello from '@/Hello';
import MailComponents from '@/mail';
import '@styles/index.scss';

const Mail = () => (
  <>
    <Helmet title="mail page" />
    <MailComponents />
    {/* <Hello /> */}
  </>
);

export default Mail;
