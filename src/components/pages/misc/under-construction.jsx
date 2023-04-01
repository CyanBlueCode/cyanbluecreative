import React from 'react';

const UnderConstruction = ({ toggleMessage }) => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>
            <b>CYAN BLUE CREATIVE</b>
          </h1>
          <small>
            ☕ My Portfolio is Currently Undergoing Updates & Will Be
            Back Soon ☕
            <h5>
            ✊ <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} href='/cantbreathe'>Click Here for a Special Temporary Page</a> ✊
            </h5>
          </small>
        </header>
      </div>
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        {/* <a style={{ cursor: 'pointer' }} onClick={() => toggleMessage(false)}>
          <span role="img">♥️</span>
        </a> */}
        <a style={{ cursor: 'pointer', textDecoration: 'none' }} href='/cantbreathe'>
          <span role="img">♥️</span>
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
