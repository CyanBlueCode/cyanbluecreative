import React, { useState, useEffect, useCallback } from 'react';
<<<<<<< HEAD
import useEvent from '../helpers/useEvent';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import ImgsViewer from 'react-images-viewer';

const ImgGallery = ({ photos4k }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [nodeLimit, setNodeLimit] = useState(2);
  const [isRetina, setIsRetina] = useState(false);
  const [photos2k, setPhotos2k] = useState();
  const [photos1k, setPhotos1k] = useState();

  // console.log('=>', photos2k);
=======
import { render } from 'react-dom';
import useEvent from '../helpers/useEvent'
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { portraits3840, portraits2048, portraits1024 } from '../photos';

const ImgGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [nodeLimit, setNodeLimit] = useState(1);
  const [isRetina, setIsRetina] = useState(false);
>>>>>>> 29014aa (Gallery data structure config + sample responsive gallery setup)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    // setCurrentImage(0);
    setViewerIsOpen(false);
  };

<<<<<<< HEAD
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
        // console.log('file name=>', transformedSrc);
        return {
          ...photo,
          src: transformedSrc,
          // title: `${fileName}-${resolution}p-80`,
          title: '©CyanBlueCreative',
        };
      })
    );
  };

  useEffect(() => {
    viewportCalc();
    if (!isRetina) {
      const photoSet1k = photos4k && transformPhotoRes(photos4k, 1024);
      setPhotos1k(photoSet1k);
    }
    const photoSet2k = photos4k && transformPhotoRes(photos4k, 2048);
    setPhotos2k(photoSet2k);
  }, []);

  // console.log('1111=>', photos1k);
  // console.log('2222=>', photos2k);
  // console.log('=x=>', photos4k && photos4k);

  // TODO: implement lazy loading with .slice to divide images into sections?
  // TODO: useEvent to attach listeners or intersection observer
  // https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video
  // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

  // TODO: consider separating viewportWidth and isRetina calculations
  // TODO: need more conditionals to render 1024p imgs for retina screens <= 512px

  // TODO: abstract viewportCalc into a helper? what to do with states? split into 2 functions? return array?
  const viewportCalc = () => {
    const viewportWidth = window.innerWidth;
    // console.log('=>', viewportWidth);
=======
  // TODO: implement targetRowHeight conditional for 4k screens?

  // TODO: on mount, make call to db to get 2/3 galleries depending on isRetina

  useEffect(() => {
    viewportCalc();
  }, []);

  // TODO: consider separating viewportWidth and isRetina calculations

  const viewportCalc = () => {
    const viewportWidth = window.innerWidth;
    console.log('=>', viewportWidth);
>>>>>>> 29014aa (Gallery data structure config + sample responsive gallery setup)
    if (viewportWidth <= 479) {
      setNodeLimit(1);
    } else if (viewportWidth <= 767) {
      setNodeLimit(2);
<<<<<<< HEAD
    } else if (viewportWidth <= 2048) {
      setNodeLimit(2);
    } else {
      setNodeLimit(4);
    }
    if (
      (viewportWidth >= 512 && window.devicePixelRatio > 1) ||
      (viewportWidth >= 512 &&
        window.matchMedia &&
=======
    } else {
      setNodeLimit(3);
    }
    if (
      window.devicePixelRatio > 1 ||
      (window.matchMedia &&
>>>>>>> 29014aa (Gallery data structure config + sample responsive gallery setup)
        window.matchMedia(
          '(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)'
        ).matches)
    ) {
      setIsRetina(true);
    }
<<<<<<< HEAD
    return;
  };

  // https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/
  useEvent('resize', () => viewportCalc());

  // function doSomething(scrollPos) {
  //   const viewportHeight = window.innerHeight;
  //   if (scrollPos >= viewportHeight) {
  //     console.log('SCROLLLL=>', scrollPos);
  //   }
  // }
  // useEvent('scroll', (e) => {
  //   const scrollPos = window.scrollY;
  //   let ticking = false;
  //   if (!ticking) {
  //     window.requestAnimationFrame(() => {
  //       doSomething(scrollPos);
  //       ticking = false;
  //     });

  //     ticking = true;
  //   }
  // });

  // Disable right-click menu
  // useEvent('contextmenu', (e) => e.preventDefault());

  const onPrev = () => setCurrentImage(currentImage - 1);
  const onNext = () => setCurrentImage(currentImage + 1);

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

      {/* TODO: preloading for ImgsViewer broken, moving between images make network calls repeatedly*/}
      {photos2k && (
        <ImgsViewer
          imgs={(isRetina ? photos4k : photos2k).map((x) => ({
            ...x,
            srcset: [],
            caption: x.description,
          }))}
          isOpen={viewerIsOpen}
          currImg={currentImage}
          onClickPrev={onPrev}
          onClickNext={onNext}
          onClose={closeLightbox}
          closeBtnTitle="Close"
          backdropCloseable={false}
          leftArrowTitle="Prev"
          rightArrowTitle="Next"
          width={3840}
          onClickImg={() =>
            window.open(
              photos2k[currentImage].src,
              'Image',
            )
          }
          showThumbnails={false}
          // onClickThumbnail={i => setCurrentImage(i)}
        />
      )}
=======
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
>>>>>>> 29014aa (Gallery data structure config + sample responsive gallery setup)
    </div>
  );
};

export default ImgGallery;
