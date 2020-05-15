import React, { useState } from 'react';
import './App.css';
import ImgGallery from './components/imgGallery';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
import HomePage from './components/homePage';
import UnderConstruction from './components/underConstruction';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
  const [message, toggleMessage] = useState(false);
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
