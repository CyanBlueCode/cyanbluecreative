import React, { useState, useEffect } from 'react';
import Firebase from '../../../config';
// import useEvent from '../../helpers/useEvent';
import ImgGallery from './img-gallery';
import Header from '../../header/header';

const CantBreathe = (props) => {
  const [photos4k, setPhotos4k] = useState();

  useEffect(() => {
    const ref = Firebase.database().ref('photos/cantbreathe');
    const listener = ref.on('value', (snap) => {
      // console.log('=>', snap.val());
      if (snap.val()) {
        setPhotos4k(snap.val());
      }
    });
    return () => {
      ref.off('value', listener);
    };
  }, []);

  // TODO: implement MUI loading spinner while data being fetched?
  return (
    <div>
      <Header />
      {photos4k && <ImgGallery photos4k={photos4k} />}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
      <h5>POWER TO THE PEOPLE</h5>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span role="img">♥️</span>
        </a>
      </div>
    </div>
  );
};

export default CantBreathe;
