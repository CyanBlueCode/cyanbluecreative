// import React, { useState, useEffect } from 'react';
// import Firebase from '../../../config';
// import useEvent from '../../helpers/useEvent';
// import ImgGallery from './img-gallery';

// const PeoplePortfolio = (props) => {
//   const [photos4k, setPhotos4k] = useState();


//   useEffect(() => {
//     const ref = Firebase.database().ref('photos/portraits');
//     const listener = ref.on('value', (snap) => {
//       console.log('=>', snap.val());
//       if (snap.val()) {
//         setPhotos4k(snap.val());
//       }
//     });
//     return () => {
//       ref.off('value', listener);
//     };
//   }, []);


//   // TODO: implement MUI loading spinner while data being fetched?
//   return (
//     <div>
//       {photos4k && (
//         <ImgGallery
//           // isRetina={isRetina}
//           // nodeLimit={nodeLimit}
//           photos4k={photos4k}
//         />
//       )}
//     </div>
//   );
// };

// export default PeoplePortfolio;
