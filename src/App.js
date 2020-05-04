import React, { useState } from 'react';
import './App.css';
import ImgGallery from './components/imgGallery';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const [message, toggleMessage] = useState(true);
  return (
    <div>
      {message ? (
        <div className="App">
          <header className="App-header">
            <h1>
              <b>CYAN BLUE CREATIVE</b>
            </h1>

            <small>☕ Currently Undergoing Upgrades ☕</small>
          </header>
        </div>
      ) : (
        <div style={{ margin: '5px' }}>
          <Header />
          <ImgGallery />
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <button onClick={() => toggleMessage(!message)}>♥️</button>
        <Footer />
      </div>
    </div>
  );
};

export default App;
