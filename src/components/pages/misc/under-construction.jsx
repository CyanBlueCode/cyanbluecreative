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
            ☕ The Rest of My Portfolio is Currently Undergoing Updates. Check
            Back Soon. ☕
          </small>
        </header>
      </div>
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <a style={{ cursor: 'pointer' }} onClick={() => toggleMessage(false)}>
          <span role="img">♥️</span>
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
