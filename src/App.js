import React, { useState, useEffect } from 'react';
import './App.css';
import ImgGallery from './components/gallery/img-gallery';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/navbar/navigation';
import HomePage from './components/pages/home-page';
import UnderConstruction from './components/under-construction';
import { Switch, Route, withRouter } from 'react-router-dom';
import Firebase from './config';

const App = () => {
  const [message, toggleMessage] = useState(false);
  const [photos, setPhotos] = useState('not working');

  // TODO: make firebase call into a helper fn then call from
  // individual apps. else, db only loads on homepage
  const database = Firebase.database().ref('photos');

  useEffect(() => {
    database.on('value', (snap) => {
      setPhotos(snap.val());
    });
  }, []);

  console.log('=>', photos);

  return (
    <div>
      {/* {message ? ( */}
      {/* <UnderConstruction /> */}
      {/* ) : ( */}
      {/* <div style={{ margin: '5px' }}> */}
      <Header />
      <Switch>
        <Route exact path="/" component={UnderConstruction} />
        <Route path="/home" component={HomePage} />
        {/* <Route path="/navi" component={Navigation} /> */}
        <Route path="/gallery" component={ImgGallery} />
        {/* <Route
          path="/gallery"
          render={(props) => <ImgGallery {...props} photos={photos} />}
        /> */}
        <Route path="/header" component={Header} />
      </Switch>
      {/* </div> */}
      {/* )} */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <button onClick={() => toggleMessage(!message)}>♥️</button>
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(App);
