import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './components/pages/home/Home';
import CantBreathe from './components/pages/photo/CantBreathe';
// import PeoplePortfolio from './components/pages/photo/people-portfolio';
import Footer from './components/footer/Footer';
import UnderConstruction from './components/pages/misc/UnderConstruction';
import Navigation from './components/navigation/Navigation';
import ContactForm from './components/pages/contact/ContactForm';
import Gallery from './components/images/Gallery';
import PhotoBanners from './components/pages/photo/PhotoBanners';
import Toast from './util/Toast';
import useEvent from './util/useEvent';
import './App.css';

const App = () => {
  const [openToast, setOpenToast] = useState(false);
  const [hideAppUnderConstruction, setAppUnderConstruction] = useState();

  // Right click toast message
  useEvent('contextmenu', () => setOpenToast(true));
  const handleClose = () => setOpenToast(false);

  // TODO: remove CONSTRUCTION toggles when ready
  // TODO: add scroll to top button

  // // TODO: create call for Home gallery here
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
          render={() => (
            <Home
              setAppUnderConstruction={setAppUnderConstruction}
              hideConstruction={hideAppUnderConstruction}
            />
          )}
        />
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/gallery' component={Gallery} />
        <Route path='/cantbreathe' component={CantBreathe} />
        <Route exact path='/construction' component={UnderConstruction} />
        <Route exact path='/contact' component={ContactForm} />
        <Route exact path='/photos' component={PhotoBanners} />
      </Switch>
      <Toast
        open={openToast}
        handleClose={handleClose}
        toastMessage='Works on this site are currently shared under the Creative Commons CC BY-NC-SA 3.0 license. Commercial use requires explicit consent.'
      />
      <Footer toggle={setAppUnderConstruction}/>
    </Box>
  );
};

export default withRouter(App);
