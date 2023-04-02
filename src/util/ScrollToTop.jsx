import React from 'react';
import { Box, Zoom, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={scrollToTop}
          sx={{
            color: '#ffffff',
            backgroundColor: '#0000003c',
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
