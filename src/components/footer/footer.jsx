import React from 'react';
import { Box, Typography } from '@mui/material';
import { Instagram, MailOutline, Home } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        maxHeight: 40,
        mb: 2.4,
        textAlign: 'center',
        mt: 1.2,
      }}
    >
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
            href='https://www.instagram.com/chase_chronicles/'
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
