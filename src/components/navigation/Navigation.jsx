// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link, withRouter } from 'react-router-dom';

// const Navigation = (props) => {
//   console.log('==>', props);
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     // <div>
//     //   <Link to="/">HomePage</Link>
//     //   <button onClick={() => props.history.push('/gallery')}>
//     //     Gallery
//     //   </button>
//     // </div>
//   );
// };

// export default withRouter(Navigation);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Drawer from '@mui/material/Drawer';

const HideOnScroll = (props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const HideAppBar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            // zIndex: 1000,
            // position: 'absolute'
            // '& .MuiToolbar-root': {
            //   position: 'absolute',
            //   backgroundColor: 'red',
            //   color: 'red'
            // }
          }}
        >
          <Toolbar
          // sx={{ position: 'absolute' }}
          // sx={{'& .MuiToolbar-root': {
          //   position: 'absolute',
          //   backgroundColor: 'red',
          //   color: 'red'
          // }}}
          >
            <Typography
              variant='h4'
              sx={{ fontWeight: 600 }}
              component='div'
              color='common.white'
            >
              CYAN BLUE CREATIVE
            </Typography>
            <IconButton
              size='large'
              edge='start'
              aria-label='menu'
              sx={{ ml: 'auto', mr: 0, color: 'common.white' }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            {/* NOTE white bg comes from Drawer-paper child */}
            <Drawer
              anchor='right'
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                backdropFilter: 'blur(3px)',
                bgcolor: 'transparent',
              }}
            >
              <Container
                sx={{
                  width: 300,
                  height: '100%',
                  backdropFilter: 'blur(3px)',
                  bgcolor: 'transparent',
                }}
              >
                <Box sx={{ my: 2, bgcolor: 'transparent', }}>
                  {[...new Array(6)].map((_e, i) => (
                    <li>{`Menu item ${i}`}</li>
                  ))}
                </Box>
              </Container>
            </Drawer>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar /> */}
    </React.Fragment>
  );
};

export default HideAppBar;
