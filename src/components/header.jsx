import React from 'react';
import Navigation from './navigation';

const Header = (props) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      {/* <h1>
        <b>CYAN BLUE CREATIVE</b>
      </h1>
      <h5>⚠ currently under re-construction (these are stock photos) ⚠️</h5> */}
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
