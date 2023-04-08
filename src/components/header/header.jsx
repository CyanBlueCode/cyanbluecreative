import React from 'react';

const Header = ({
  title = 'JUNE 2020 | AUSTIN, TX',
  subText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
}) => {
  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <div>
        <h1>{title}</h1>
        <h5>
          {subText}
        </h5>
      </div>
    </div>
  );
};

export default Header;
