import React, { useState, useEffect } from 'react';
import Firebase from '../../../config';
import useEvent from '../../helpers/useEvent';
import ImgGallery from './img-gallery';

const PeoplePortfolio = (props) => {
  const [photos4k, setPhotos4k] = useState();
  const [nodeLimit, setNodeLimit] = useState(2);
  const [isRetina, setIsRetina] = useState(false);

  // const database = Firebase.database().ref('photos/portraits');

  const fetchData = () => {
    // const database = Firebase.database();
    // const ref = database.ref('photos/portraits');
    // ref.on(
    //   'value',
    //   (snap) => {
    //     console.log('SNAP=>', snap.val());
    //     const val = snap.val();
    //     setPhotos4k(val);
    //   },
    //   (err) => {
    //     console.log('DB read failed: ' + err.code);
    //   }
    // );
    // debugger;
    // try {
    //   const database = Firebase.database()
    //   const ref = database.ref('photos/portraits');
    //   ref.on(
    //     'value',
    //     (snap) => {
    //       console.log('SNAP=>', snap);
    //       return setPhotos4k(snap.val());
    //     },
    //     (err) => {
    //       console.log('DB read failed: ' + err.code);
    //     }
    //   );
    //   return
    // } catch (err) {
    //   console.log('Promise error:', err);
    // }
  };
  // TODO: create call for homepage gallery here

  useEffect(() => {
    viewportCalc();
    const ref = Firebase.database().ref('photos/portraits');
    const listener = ref.on('value', (snap) => {
      console.log('=>', snap.val());
      if (snap.val()) {
        setPhotos4k(snap.val());
      }
    });
    return () => {
      ref.off('value', listener);
    };
  }, []);

  // useEffect(() => {
  //   viewportCalc();
  //   let photoDb = [];
  //   const database = Firebase.database();
  //   const ref = database.ref('photos/portraits');
  //   ref.on(
  //     'value',
  //     (snap) => {
  //       photoDb = [...snap.val()];
  //     },
  //     (err) => {
  //       console.log('DB read failed: ' + err.code);
  //     }
  //   );

  // fetchData();
  // TODO: need to handle async; wait for photos4k to populate
  // isRetina
  // ? setPhotos2k(transformPhotoRes(photos4k, 2048))
  // : setPhotos1k(transformPhotoRes(photos4k, 1024))
  //   return () => {
  //     ref.off('value');
  //     photoDb && setPhotos4k(photoDb);
  //   };
  // }, []);

  // TODO: implement async/await? need to ensure 4k photos loaded!

  // const transformPhotoRes = (photoSet, resolution) => {
  //   return photoSet.map((photo) => {
  //     const prefix = photo.src.slice(0, -23);
  //     const title = photo.title.slice(0, -9);
  //     const src1k = `${prefix}/${resolution}/${title}-${resolution}p-80.jpg`;
  //     return { ...photo, src: src1k, title: `${title}-${resolution}p-80` };
  //   });
  // };


  // console.log('trans=>', photos4k && transformPhotoRes(photos4k, 1024));

  // setTimeout(() => photos4k && isRetina
  //   ? setPhotos2k(transformPhotoRes(photos4k, 2048))
  //   : setPhotos1k(transformPhotoRes(photos4k, 1024)), 1000)

  // TODO: consider separating viewportWidth and isRetina calculations
  // TODO: need more conditionals to render 1024p imgs for retina screens <= 512px

  const viewportCalc = () => {
    const viewportWidth = window.innerWidth;
    console.log('=>', viewportWidth);
    if (viewportWidth <= 479) {
      setNodeLimit(1);
    } else if (viewportWidth <= 767) {
      setNodeLimit(2);
    } else if (viewportWidth <= 2048) {
      setNodeLimit(3);
    } else {
      setNodeLimit(4);
    }
    if (
      window.devicePixelRatio > 1 ||
      (window.matchMedia &&
        window.matchMedia(
          '(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)'
        ).matches)
    ) {
      setIsRetina(true);
    }
    return;
  };

  // https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/
  useEvent('resize', () => viewportCalc());

  // console.log('4k=>', photos4k && photos4k);
  // console.log('1k=>', photos1k);
  // console.log('2k=>', photos4k && transformPhotoRes(photos4k, 2048));

  return (
    <div>
      {photos4k && (
        <ImgGallery
          isRetina={isRetina}
          nodeLimit={nodeLimit}
          photos4k={photos4k}
        />
      )}
      {/* {`${photos4k}`} */}
    </div>
  );
};

export default PeoplePortfolio;
