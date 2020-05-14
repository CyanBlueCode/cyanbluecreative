import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = (props) => {
  console.log('==>', props);
  return (
    <div>
      <Link to="/">HomePage</Link>
      <button onClick={() => props.history.push('/gallery')}>
        Gallery
      </button>
    </div>
  );
};

export default withRouter(Navigation);
