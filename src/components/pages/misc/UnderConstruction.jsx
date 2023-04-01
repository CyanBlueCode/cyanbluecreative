import React from 'react';
import { Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const UnderConstruction = ({toggle}) => {
  return (
    <div>
      <div className='App'>
        <header className='App-header'>
          <Typography variant='h2'>
            <b>CYAN BLUE CREATIVE</b>
          </Typography>
          <div style={{ height: 25 }} />
            <ConstructionIcon onClick={() => toggle(true)}/>
          <Typography variant='h6'>
            Currently
            <br />
            Undergoing
            <br />
            Upgrades
            <div style={{ height: 25 }} />
            ☕ Be Back Soon ☕
          </Typography>
        </header>
      </div>
      {/* <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <a
          style={{ cursor: 'pointer', textDecoration: 'none' }}
          href='/cantbreathe'
        >
          <span role='img'>♥️</span>
        </a>
      </div> */}
    </div>
  );
};

export default UnderConstruction;
