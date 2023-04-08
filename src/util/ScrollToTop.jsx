import React from 'react';
import { Box, Zoom, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import isMobile from './isMobile';

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    threshold: 500,
  });

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: `${isMobile() ? '10.5vh' : '32px'}`,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          sx={{
            color: '#ffffff',
            backgroundColor: '#0000004c',
            '&:hover': { color: '#000000' },
          }}
          size='small'
          aria-label='scroll back to top'
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollToTop;
