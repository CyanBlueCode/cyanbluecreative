import React, { useState, useEffect, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const ImgGallery = ({ isRetina, photos4k, nodeLimit }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
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

  console.log('1111=>', photos1k);
  console.log('2222=>', photos2k);
  console.log('=x=>', photos4k && photos4k);

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
                style={{ objectFit: 'contain', width:'100vw', height: '100vw' }}
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
