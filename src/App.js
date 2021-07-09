import React, { useState, useEffect } from 'react';
import './App.css';
import ImgGallery from './components/imgGallery';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import HomePage from './components/homePage';
import UnderConstruction from './components/underConstruction';
import { Switch, Route, withRouter } from 'react-router-dom';
import Firebase from './config';
import ImageGridList from './components/mui-gallery';
import MasonryImageList from './components/imgGalleryMui';

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
        <Route path="/mui" component={ImageGridList} />
        <Route path="/mui2" component={MasonryImageList} />
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
