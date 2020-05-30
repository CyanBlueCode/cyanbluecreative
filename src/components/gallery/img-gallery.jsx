import React, { useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import useEvent from '../helpers/useEvent'
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { portraits3840, portraits2048, portraits1024 } from '../photos';

const ImgGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [nodeLimit, setNodeLimit] = useState(2);
  const [isRetina, setIsRetina] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // TODO: implement targetRowHeight conditional for 4k screens?

  // TODO: on mount, make call to db to get 2/3 galleries depending on isRetina

  useEffect(() => {
    viewportCalc();
  }, []);

  // TODO: consider separating viewportWidth and isRetina calculations

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
      setNodeLimit(4)
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
  };

  // https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/
  // window.addEventListener('resize', function () {
  //   viewportCalc();
  //   console.log('==>', window.innerWidth);
  // });

  useEvent('resize', () => viewportCalc());


  // TODO: remove ternaries below; use states where gallery objs are stored

  console.log('==>');

  return (
    <div>
      <Gallery
        photos={isRetina ? portraits2048 : portraits1024}
        onClick={openLightbox}
        targetRowHeight={720}
        direction="row"
        // TODO: make limitNodeSearch conditional to viewport size?
        limitNodeSearch={nodeLimit}
        // styles={{ margin: '0.1vw' }}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            {/* TODO: lightbox currently loads all photos on open. not cool. solve */}
            <Carousel
              currentIndex={currentImage}
              views={(isRetina ? portraits3840 : portraits2048).map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.description,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default ImgGallery;
