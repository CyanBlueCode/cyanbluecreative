import React, { useState, useEffect } from 'react';
import './App.css';
// import ImgGallery from './components/pages/photo/img-gallery';
// import Header from './components/header/header';
import Footer from './components/footer/Footer';
// import Navigation from './components/navbar/navigation';
import HomePage from './components/pages/home/HomePage';
// import PeoplePortfolio from './components/pages/photo/people-portfolio';
import CantBreathe from './components/pages/photo/CantBreathe';
import UnderConstruction from './components/pages/misc/under-construction';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Gallery from './components/pages/photo/Gallery';
import { Box } from '@mui/material';

const App = () => {
  const [message, toggleMessage] = useState(false);
  // const [photos, setPhotos] = useState('loading...');

  // TODO: create title banner
  // TODO: create useEffect calls to gallery db
  // TODO: store gallery obj in local photo state
  // TODO: create gallery & lightbox
  // TODO: add scroll to top button

  // // TODO: create call for homepage gallery here
  // const database = Firebase.database().ref('photos/portraits');

  // useEffect(() => {
  //   database.on('value', (snap) => {
  //     setPhotos(snap.val());
  //   });
  // }, []);

  // console.log('=>', photos);

  return (
    <Box sx={{ width: '100%' }}>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/gallery' component={Gallery} />
        <Route path='/cantbreathe' component={CantBreathe} />
        <Route exact path='/construction' component={UnderConstruction} />
      </Switch>
      <Footer />
    </Box>
  );
};

export default withRouter(App);
