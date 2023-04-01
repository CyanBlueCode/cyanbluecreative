// import React, { useState, useEffect } from 'react';
// import ImgGallery from './ImgGallery';

// const LazyLoadGallery = ({ images }) => {
//   const [galleryImages, setGalleryImages] = useState(images || []);

//   console.log('images =>', images);

//   useEffect(() => {
//     const loadImages = () => {
//       // Calculate how many images to load based on the window height
//       const windowHeight = window.innerHeight;
//       const imagesToLoad = Math.ceil(windowHeight / 300);
//       console.log('imagesToLoad =>', imagesToLoad);

//       // Only load images that haven't already been loaded
//       const imagesNotLoaded = images.filter(image => !galleryImages.includes(image));
      
//       // Load the necessary number of images
//       const newImages = imagesNotLoaded.slice(0, imagesToLoad);
      
//       // Update the gallery images state
//       setGalleryImages(prevImages => [...prevImages, ...newImages]);
//     };

//     window.addEventListener('scroll', loadImages);

//     return () => {
//       window.removeEventListener('scroll', loadImages);
//     };
//   }, [galleryImages, images]);

//   console.log('galleryImages =>', galleryImages);

//   return (
//     <ImgGallery photos4k={galleryImages} />
//   );
// };

// // const Gallery = ({ images }) => {
// //   return (
// //     <div className="gallery">
// //       {images.map(image => (
// //         <img key={image.id} src={image.src} alt={image.description} />
// //       ))}
// //     </div>
// //   );
// // };

// export default LazyLoadGallery;
