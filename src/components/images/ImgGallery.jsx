import React, { useState, useEffect, useCallback } from 'react';
import useEvent from '../../util/useEvent';
import Gallery from 'react-photo-gallery';
// FIXME ImgsViewer is outdated; need to replace
import ImgsViewer from 'react-images-viewer';
import { Box, Modal, Fade, Backdrop } from '@mui/material';
import useScrolldown from '../../util/useScrollDown';
import isMobile from '../../util/isMobile';
import './ImgGallery.css';

const ImgGallery = ({ photos4k }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [nodeLimit, setNodeLimit] = useState(2);
  const [isRetina, setIsRetina] = useState(false);
  const [photos2k, setPhotos2k] = useState([]);
  const [photos1k, setPhotos1k] = useState();
  const currImgSrc = photos2k?.[currentImage]?.src
  const mobileView = isMobile();
  const isVerticalImage = photos2k?.[currentImage];
  // < photos2k?.[currentImage].height();
  console.log('isVerticalImage =>', isVerticalImage);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  // TODO: implement shouldcomponentupdate hook to prevent re-render when exiting from lightbox

  useEffect(() => {
    viewportCalc();
    if (!isRetina) {
      const photoSet1k = photos4k && transformPhotoRes(photos4k, 1024);
      setPhotos1k(photoSet1k);
    }
    const photoSet2k = photos4k && transformPhotoRes(photos4k, 2048);
    setPhotos2k(photoSet2k);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transformPhotoRes = (photoSet, resolution) =>
    photoSet?.map((photo) => {
      const prefix = 'https://media.publit.io/file';
      const splitSrc = photo.src.split('/');
      const folder = splitSrc[4];
      const fileName = splitSrc[6].slice(0, -13);
      const transformedSrc = `${prefix}/${folder}/${resolution}/${fileName}-${resolution}p-80.jpg`;
      return {
        ...photo,
        src: transformedSrc,
        // title: `${fileName}-${resolution}p-80`,
        title: '©CyanBlueCreative',
      };
    });

  // TODO: implement lazy loading with .slice to divide images into sections
  // TODO: useEvent to attach listeners or intersection observer
  // https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video
  // https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

  // TODO: consider separating viewportWidth and isRetina calculations
  // TODO: need more conditionals to render 1024p imgs for retina screens <= 512px

  const viewportCalc = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 479) {
      setNodeLimit(1);
    } else if (viewportWidth <= 776) {
      setNodeLimit(2);
    } else if (viewportWidth <= 1900) {
      setNodeLimit(2);
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

  // Lazy load images
  const userScrolledDown = useScrolldown();
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  console.log('images =>', images);

  // TODO implement for 1k imgs as well
  const loadMoreImgs = () => {
    if (count >= photos2k.length) return;
    if (images.length === 0 || userScrolledDown) {
      const slicedPics = [...photos2k].slice(count, count + 4);
      setImages([...images, ...slicedPics]);
      setCount(count + 4);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadMoreImgs(), [photos2k, userScrolledDown]);

  const onPrev = () => setCurrentImage(currentImage - 1);
  const onNext = () => setCurrentImage(currentImage + 1);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    margin: 'auto',
    maxHeight: '100vh',
    width: '98%',
    maxWidth: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'common.white',
    overflowY: 'auto',
  };

  const renderImageViewerModal = () => (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={viewerIsOpen}
      onClose={closeLightbox}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      disableAutoFocus
      slotProps={{
        backdrop: {
          timeout: 700,
          sx: {
            color: '#000000c4',
            // FIXME hide scroll bar not working
            overflow: 'hidden',
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
      }}
    >
      <Fade in={viewerIsOpen}>
        <Box sx={style} onClick={closeLightbox}>
          <Box sx={{ m: 2, height: '100%' }}>
            <img
              style={{ width: '100%' }}
              src={currImgSrc}
              alt={`full size - ${currImgSrc}`}
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );

  return (
    <Box sx={{ m: 0.15 }}>
      {(photos1k || photos2k) && images && (
        <Gallery
          // photos={isRetina ? photos2k : photos1k}
          photos={images}
          onClick={openLightbox}
          targetRowHeight={700}
          direction='row'
          limitNodeSearch={nodeLimit}
        />
      )}
      {/* FIXME ImgsViewer is outdated; need to replace */}
      {photos2k && renderImageViewerModal()}
      {/* {photos2k && (
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
          closeBtnTitle='Close'
          backdropCloseable={false}
          leftArrowTitle='Prev'
          rightArrowTitle='Next'
          width={3840}
          onClickImg={() => window.open(photos2k[currentImage].src, 'Image')}
          showThumbnails={true}
          onClickThumbnail={(i) => setCurrentImage(i)}
        />
      )} */}
    </Box>
  );
};

export default ImgGallery;
