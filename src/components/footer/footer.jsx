import React from 'react';
// import { Instagram, MailOutline, Home } from '@material-ui/icons';

const Footer = () => {
  return (
    <div>
      <h5>
        <small>
          All current works on this site are shared under the Creative Commons
          CC BY-NC-SA 3.0 license; commercial use requires consent.
        </small>
        <br />
        <br />
        <small>
          The rest of my portfolio is undergoing updates & will be back shortly
        </small>
        <br />
        <small>(I am a commercial photographer & filmmaker, currently based in Austin, TX)</small>
      </h5>
      <h5>
      <a
          href="/"
          style={{
            color: 'inherit',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {/* <Home /> */}
        </a>
        {' '}
        <a
          href="https://www.instagram.com/chasechronicles/"
          style={{
            color: 'inherit',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {/* <Instagram /> */}
        </a>
        {' '}
        <a
          href="mailto:chase@cyanbluecreative.com"
          style={{
            color: 'inherit',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {/* <MailOutline /> */}
        </a>
        <br />
        <br />
        <small>CyanBlueCreative © 2020</small>
      </h5>
    </div>
  );
};

export default Footer;
