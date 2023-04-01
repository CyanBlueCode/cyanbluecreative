import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { isMobile } from '../../util/isMobile';

const HideOnScroll = ({ children, window }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  // const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  // NOTE new implementation makes it look like there's no animation
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollingDown, setScrollingDown] = useState(false);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     if (typeof window !== 'undefined') {
  //       if (y > window.scrollY) {
  //         setScrollingDown(false);
  //         // console.log('scrolling up');
  //       } else if (y < window.scrollY) {
  //         setScrollingDown(true);
  //         // console.log('scrolling down');
  //       }
  //       setY(window.scrollY);
  //     }
  //   },
  //   [y]
  // );

  // console.log('isMobile =>', isMobile());

  // useEffect(() => {
  //   window.addEventListener('scroll', handleNavigation);

  //   return () => {
  //     window.removeEventListener('scroll', handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <Slide appear={true} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const HideAppBar = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const [open, setOpen] = useState(false);
  const navigationLinks = [
    {
      title: 'home',
      link: '',
    },
    {
      title: `can't breathe`,
      link: 'cantbreathe',
    },
    {
      title: 'gallery',
      link: 'gallery',
    },
    {
      title: 'people',
      link: 'people',
    },
  ];

  const isHomepage = pathname === '/';

  console.log('isHomepage =>', isHomepage);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            height: `${isHomepage ? '110px' : 'auto'}`,
            backgroundColor: `${isHomepage ? 'transparent' : 'black'}`,
            backgroundImage: 'linear-gradient(#0000004c, transparent)',
            boxShadow: 'none',
            position: `${isHomepage ? '' : 'sticky'}`,
          }}
        >
          <Toolbar>
            {/* FIXME isMobile not updating correctly */}
            <Link href='/' underline='none'>
              <Typography
                variant={isMobile() ? 'h5' : 'h4'}
                sx={{ fontWeight: 600 }}
                component='div'
                color='common.white'
              >
                CYAN BLUE CREATIVE
              </Typography>
            </Link>
            <IconButton
              size='large'
              edge='start'
              aria-label='menu'
              sx={{ ml: 'auto', mr: 0, color: 'common.white' }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='right'
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                backdropFilter: 'blur(3px)',
                // NOTE bg override here, but still has black frame?
                '& .MuiDrawer-paper': {
                  bgcolor: 'rgba(0,0,0,0.25)',
                  backdropFilter: 'blur(3px)',
                },
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
                <Box sx={{ my: 2, bgcolor: 'transparent' }}>
                  {navigationLinks.map(({ title, link }) => (
                    <Button
                      key={link}
                      onClick={() => {
                        history.push(`/${link}`);
                        setOpen(false);
                      }}
                      // disableRipple
                      sx={{
                        width: '100%',
                        ':hover': {
                          backgroundColor: 'transparent',
                        },
                        color: 'common.white',
                      }}
                    >
                      <h1>{title.toUpperCase()}</h1>
                    </Button>
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

export default withRouter(HideAppBar);
