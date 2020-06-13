import React, { useState, useEffect } from 'react';
import './App.css';
// import ImgGallery from './components/pages/photo/img-gallery';
// import Header from './components/header/header';
import Footer from './components/footer/footer';
// import Navigation from './components/navbar/navigation';
// import HomePage from './components/pages/home/home-page';
// import PeoplePortfolio from './components/pages/photo/people-portfolio';
import CantBreathe from './components/pages/photo/cant-breathe';
import UnderConstruction from './components/pages/misc/under-construction';
import { Switch, Route, withRouter, HashRouter } from 'react-router-dom';
// import Firebase from './config';

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
    <div>
      {/* {message ? ( */}
      {/* <UnderConstruction /> */}
      {/* ) : ( */}
      {/* <div style={{ margin: '5px' }}> */}
      {/* <Header /> */}
      {/* <HashRouter basename="/"> */}
        <Switch>
          <Route exact path="/" component={UnderConstruction} />
          <Route path="/cantbreathe" component={CantBreathe} />
          {/* <Route path="/home" component={HomePage} /> */}
          {/* <Route path="/navi" component={Navigation} /> */}
          {/* <Route path="/gallery" component={ImgGallery} /> */}
          {/* <Route
          path="/gallery"
          render={(props) => <ImgGallery {...props} photos={photos} />}
        /> */}
          {/* <Route path="/header" component={Header} />
        <Route path="/people" component={PeoplePortfolio} /> */}
        </Switch>
      {/* </HashRouter> */}
      {/* </div> */}
      {/* )} */}
      {/* { !message ? <CantBreathe toggleMessage={toggleMessage}/> : <UnderConstruction toggleMessage={toggleMessage}/>} */}

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(App);
