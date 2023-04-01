import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, CardMedia, Slide } from '@mui/material';
import Photo1 from '../../../assets/CB-2K-1633232.jpg';
import Photo2 from '../../../assets/CB-2K-1633147.jpg';
import Photo3 from '../../../assets/P1511063.jpg';
import Photo4 from '../../../assets/P1511379.jpg';
import UnderConstruction from '../misc/UnderConstruction';

const HomePage = ({ setAppUnderConstruction, hideConstruction }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const containerRef = useRef(null);
  const images = [Photo1, Photo2, Photo3, Photo4];

  useEffect(() => {
    let intervalId;
    if (isRotating) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isRotating, images.length]);

  const handleToggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return hideConstruction ? (
    <>
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          overflowX: 'hidden',
          backgroundColor: '#000000c4',
        }}
        ref={containerRef}
      >
        {images.map((image, index) => (
          <Slide
            key={index}
            direction={index === currentImageIndex ? 'left' : 'right'}
            in={index === currentImageIndex}
            container={containerRef.current}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <Card
              sx={{
                borderRadius: 0,
                boxShadow: 'none',
                position: 'absolute',
                width: '100%',
                height: 'auto',
              }}
            >
              <CardMedia
                sx={{
                  height: '100vh',
                  width: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                image={image}
                title='Cyan Blue Creative'
                onClick={handleToggleRotation}
              />
            </Card>
          </Slide>
        ))}
      </Box>
    </>
  ) : (
    <UnderConstruction toggle={setAppUnderConstruction}/>
  );
};

export default HomePage;
