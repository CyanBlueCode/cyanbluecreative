import React, { useState, useEffect } from 'react';
import './App.css';
// import ImgGallery from './components/pages/photo/img-gallery';
// import Header from './components/header/header';
import Footer from './components/footer/Footer';
// import Navigation from './components/navbar/navigation';
import HomePage from './components/pages/home/HomePage';
// import PeoplePortfolio from './components/pages/photo/people-portfolio';
import CantBreathe from './components/pages/photo/CantBreathe';
import UnderConstruction from './components/pages/misc/UnderConstruction';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Gallery from './components/pages/photo/Gallery';
import { Box, IconButton } from '@mui/material';
import Toast from './util/Toast';
import ConstructionIcon from '@mui/icons-material/Construction';
import useEvent from './util/useEvent';

const App = () => {
  const [openToast, setOpenToast] = useState();
  const [hideAppUnderConstruction, setAppUnderConstruction] = useState();

  // Right click toast
  useEvent('contextmenu', () => setOpenToast(true));
  const handleClose = () => setOpenToast(false);

  // const [photos, setPhotos] = useState('loading...');

  // TODO: remove CONSTRUCTION toggles when ready
  // TODO: add scroll to top button

  // // TODO: create call for homepage gallery here
  // const database = Firebase.database().ref('photos/portraits');

  // useEffect(() => {
  //   database.on('value', (snap) => {
  //     setPhotos(snap.val());
  //   });
  // }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Navigation hideConstruction={hideAppUnderConstruction} />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => (
            <HomePage
              setAppUnderConstruction={setAppUnderConstruction}
              hideConstruction={hideAppUnderConstruction}
            />
          )}
        />
        {/* <Route exact path='/' component={HomePage} /> */}
        <Route exact path='/gallery' component={Gallery} />
        <Route path='/cantbreathe' component={CantBreathe} />
        <Route exact path='/construction' component={UnderConstruction} />
      </Switch>
      <Toast
        open={openToast}
        handleClose={handleClose}
        toastMessage='Works on this site are currently shared under the Creative Commons CC BY-NC-SA 3.0 license. Commercial use requires explicit consent.'
      />
      <Footer />
    </Box>
  );
};

export default withRouter(App);
