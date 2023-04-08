import React, { useState, useEffect } from 'react';
import Firebase from '../../config';
import ImgGallery from './ImgGallery';
import Header from '../header/Header';
import ScrollToTop from '../../util/ScrollToTop';

const PhotoGrid = ({ galleryName = 'street', title, subText }) => {
  const [photos4k, setPhotos4k] = useState();

  useEffect(() => {
    const ref = Firebase.database().ref(`photos/${galleryName}`);
    const listener = ref.on('value', (snap) => {
      if (snap.val()) {
        setPhotos4k(snap.val());
      }
    });
    return () => {
      ref.off('value', listener);
    };
  }, [galleryName]);

  // TODO: implement MUI loading spinner while data being fetched?
  return (
    <div>
      <Header title={title.toUpperCase()} subText={subText}/>
      {photos4k && <ImgGallery photos4k={photos4k} />}
      {/* <div style={{ textAlign: 'center', marginTop: '15px' }}>
      <h5>POWER TO THE PEOPLE</h5>
        <a style={{ cursor: 'pointer', textDecoration: 'none' }} href='/'>
          <span role="img" aria-label='heart'>♥️</span>
        </a>
      </div> */}
      <ScrollToTop />
    </div>
  );
};

export default PhotoGrid;
