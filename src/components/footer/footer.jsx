import React from 'react';
import { Instagram, MailOutline, Home } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        // width: '100vw',
        maxHeight: 40,
        mb: 2.4,
        textAlign: 'center',
        mt: 1.2,
      }}
    >
      {/* <h5>
        <small>
          All works on this site are shared under the Creative Commons
          CC BY-NC-SA 3.0 license; commercial use requires consent.
        </small>
        <br />
        <br />
        <small>
          The rest of my portfolio is undergoing updates & will be back shortly
        </small>
        <br />
        <small>
          (I am a commercial photographer & filmmaker, currently based in
          Austin, TX)
        </small>
      </h5> */}
      <Typography variant='h7'>
        <Box sx={{ mb: -1 }}>
          <a
            href='/'
            style={{
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Home sx={{ height: 20 }} />
          </a>{' '}
          <a
            href='https://www.instagram.com/chasechronicles/'
            style={{
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Instagram sx={{ height: 20 }} />
          </a>{' '}
          <a
            href='mailto:chase@cyanbluecreative.com'
            style={{
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <MailOutline sx={{ height: 20 }} />
          </a>
        </Box>
        <Box sx={{ maxHeight: 'fit-content', pt: 1 }}>
          {`CyanBlueCreative © ${currentYear}`}
        </Box>
      </Typography>
    </Box>
  );
};

export default Footer;
