import React, { useState, useEffect, useCallback } from 'react';
import useEvent from '../../helpers/useEvent';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { portraits3840, portraits2048, portraits1024 } from '../../photos';

const ImgGallery = ({ isRetina, photos4k, nodeLimit }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos2k, setPhotos2k] = useState();
  const [photos1k, setPhotos1k] = useState();
  // const [nodeLimit, setNodeLimit] = useState(2);
  // const [isRetina, setIsRetina] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const transformPhotoRes = (photoSet, resolution) => {
    return photoSet && photoSet.map((photo) => {
      // TODO: parsing not working correctly for images w/ 'edit'; fix prefix
      const prefix = photo.src.slice(0, -23);
      const title = photo.title.slice(0, -9);
      const src1k = `${prefix}/${resolution}/${title}-${resolution}p-80.jpg`;
      return { ...photo, src: src1k, title: `${title}-${resolution}p-80` };
    });
  };

  useEffect(() => {
    if (!isRetina) {
      const photoSet1k = transformPhotoRes(photos4k, 1024);
      setPhotos1k(photoSet1k);
    }
    const photoSet2k = transformPhotoRes(photos4k, 2048);
    setPhotos2k(photoSet2k);
  }, []);
  // const photoSet2k = photos4k && transformPhotoRes(photos4k, 2048);
  // const photoSet1k = photos4k && transformPhotoRes(photos4k, 1024);
  // setPhotos2k(photoSet2k);
  // setPhotos1k(photoSet1k);

  console.log('1111=>', photos1k);
  console.log('2222=>', photos2k);

  // TODO: implement targetRowHeight conditional for 4k screens?

  // TODO: on mount, make call to db to get 2/3 galleries depending on isRetina

  // useEffect(() => {
  //   viewportCalc();
  // }, []);

  // TODO: consider separating viewportWidth and isRetina calculations
  // TODO: need more conditionals to render 1024p imgs for retina screens <= 512px

  // const viewportCalc = () => {
  //   const viewportWidth = window.innerWidth;
  //   console.log('=>', viewportWidth);
  //   if (viewportWidth <= 479) {
  //     setNodeLimit(1);
  //   } else if (viewportWidth <= 767) {
  //     setNodeLimit(2);
  //   } else if (viewportWidth <= 2048) {
  //     setNodeLimit(3);
  //   } else {
  //     setNodeLimit(4)
  //   }
  //   if (
  //     window.devicePixelRatio > 1 ||
  //     (window.matchMedia &&
  //       window.matchMedia(
  //         '(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)'
  //       ).matches)
  //   ) {
  //     setIsRetina(true);
  //   }
  // };

  // https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/
  // window.addEventListener('resize', function () {
  //   viewportCalc();
  //   console.log('==>', window.innerWidth);
  // });

  // useEvent('resize', () => viewportCalc());

  // TODO: remove ternaries below; use states where gallery objs are stored

  console.log('=x=>', photos4k && photos4k);

  return (
    <div>
      {(photos1k || photos2k) && (
        <Gallery
          photos={isRetina ? photos2k : photos1k}
          onClick={openLightbox}
          targetRowHeight={700}
          direction="row"
          // TODO: make limitNodeSearch conditional to viewport size?
          limitNodeSearch={nodeLimit}
          // styles={{ margin: '0.1vw' }}
        />
      )}
      {photos2k && (
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              {/* TODO: lightbox currently loads all photos on open. not cool. solve */}
              <Carousel
                currentIndex={currentImage}
                views={(isRetina ? photos4k : photos2k).map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.description,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      )}
    </div>
  );
};

export default ImgGallery;
