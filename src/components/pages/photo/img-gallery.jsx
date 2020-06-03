import React, { useState, useEffect, useCallback } from 'react';
import useEvent from '../../helpers/useEvent';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const ImgGallery = ({ photos4k }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [nodeLimit, setNodeLimit] = useState(2);
  const [isRetina, setIsRetina] = useState(false);
  const [photos2k, setPhotos2k] = useState();
  const [photos1k, setPhotos1k] = useState();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // TODO: implement shouldcomponentupdate hook to prevent re-render when exiting from lightbox

  const transformPhotoRes = (photoSet, resolution) => {
    return (
      photoSet &&
      photoSet.map((photo) => {
        const prefix = 'https://media.publit.io/file';
        const splitSrc = photo.src.split('/');
        const folder = splitSrc[4];
        const fileName = splitSrc[6].slice(0, -13);
        const transformedSrc = `${prefix}/${folder}/${resolution}/${fileName}-${resolution}p-80.jpg`;
        return {
          ...photo,
          src: transformedSrc,
          // title: `${fileName}-${resolution}p-80`,
          title: '© Cyan Blue Creative',
        };
      })
    );
  };

  useEffect(() => {
    viewportCalc();
    if (!isRetina) {
      const photoSet1k = transformPhotoRes(photos4k, 1024);
      setPhotos1k(photoSet1k);
    }
    const photoSet2k = transformPhotoRes(photos4k, 2048);
    setPhotos2k(photoSet2k);
  }, []);

  console.log('1111=>', photos1k);
  console.log('2222=>', photos2k);
  console.log('=x=>', photos4k && photos4k);

  // TODO: implement lazy loading with .slice to divide images into sections
  // TODO: useEvent to attach listeners or intersection observer
  // https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video
  // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

  // TODO: consider separating viewportWidth and isRetina calculations
  // TODO: need more conditionals to render 1024p imgs for retina screens <= 512px

  // TODO: abstract viewportCalc into a helper? what to do with states? split into 2 functions? return array?
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
      (viewportWidth >= 512 && window.devicePixelRatio > 1) ||
      (viewportWidth >= 512 &&
        window.matchMedia &&
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

  function doSomething(scrollPos) {
    const viewportHeight = window.innerHeight;
    if (scrollPos >= viewportHeight) {
      console.log('SCROLLLL=>', scrollPos);
    }
  }
  useEvent('scroll', (e) => {
    const scrollPos = window.scrollY;
    let ticking = false;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(scrollPos);
        ticking = false;
      });

      ticking = true;
    }
  });

  // Disable right-click menu
  useEvent('contextmenu', (e) => e.preventDefault());

  return (
    <div>
      {(photos1k || photos2k) && (
        <Gallery
          photos={isRetina ? photos2k : photos1k}
          onClick={openLightbox}
          targetRowHeight={700}
          direction="row"
          limitNodeSearch={nodeLimit}
        />
      )}
      {photos2k && (
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              {/* TODO: lightbox currently loads all photos on open. not cool. solve */}
              {/* <Carousel
                currentIndex={currentImage}
                views={(isRetina ? photos4k : photos2k).map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.description,
                }))}
              /> */}
              <img
                src={photos4k[currentImage].src}
                style={{
                  objectFit: 'contain',
                  width: '100vw',
                  height: '100vw',
                  margin: '1%'
                }}
                alt={photos4k[currentImage].title}
                onClick={closeLightbox}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      )}
    </div>
  );
};

export default ImgGallery;
