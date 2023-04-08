import React, { useState, useEffect } from 'react';
import Firebase from '../../../config';
import ImgGallery from '../../images/ImgGallery';
import Header from '../../header/Header';
import ScrollToTop from '../../../util/ScrollToTop';
import PhotoPortfolio from '../../images/PhotoPortfolio';

const CantBreathe = () => {
  const [photos4k, setPhotos4k] = useState();

  useEffect(() => {
    // const ref = Firebase.database().ref('photos/cantbreathe');
    const ref = Firebase.database().ref('photos/portraits');
    // const ref = Firebase.database().ref('photos/street');
    const listener = ref.on('value', (snap) => {
      if (snap.val()) {
        setPhotos4k(snap.val());
      }
    });
    return () => {
      ref.off('value', listener);
    };
  }, []);

  // TODO: implement MUI loading spinner while data being fetched?
  return (<PhotoPortfolio galleryName='cantbreathe' />
  );
};

export default CantBreathe;
