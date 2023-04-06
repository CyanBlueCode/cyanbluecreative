import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import isMobile from '../../../util/isMobile';

import Photo1 from '../../../assets/CB-2K-1633232.jpg';
import Photo2 from '../../../assets/CB-2K-1633147.jpg';
import Photo3 from '../../../assets/P1511063.jpg';
import Photo4 from '../../../assets/P1511379.jpg';

const ImageCard = ({ image }) => {
  const [hovered, setHovered] = useState(false);
  const mobile = isMobile();
  // if(isMobile){
  //   setHovered(true)
  // };

  useEffect(() => {
    if (mobile) {
      setHovered(true);
    }
  }, [mobile]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Grid
      item
      xs={12}
      sx={{ width: `${mobile ? '80vw' : '70vw'}`, m: '0 auto' }}
    >
      <Card
        sx={{ height: '250px', borderRadius: 0, boxShadow: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea
          component={Link}
          to={image.link}
          sx={{
            display: 'flex',
            textDecoration: 'none',
            position: 'relative',
            // FIXME: (low priority) - hover overlay width is wider than 800px;
            // transparent colors are a temporary fix
            color: 'transparent',
            '&:hover': {
              display: 'flex',
              color: 'transparent',
            },
          }}
        >
          <CardMedia
            component='img'
            image={image.src}
            alt={image.alt}
            sx={{ height: 250, maxWidth: 800 }}
          />
          {hovered && (
            <Box
              sx={{
                position: 'absolute',
                width: 800,
                height: '100%',
                backgroundColor: `rgba(0, 0, 0, ${mobile ? '0.2' : '0.3'})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease-in-out',
                opacity: 1,
              }}
            >
              <Typography
                variant={`${mobile ? 'h5' : 'h4'}`}
                component='div'
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  opacity: 1,
                  transition: 'opacity 0.3s ease-in-out',
                  // TODO: (low priority) - get word-wrap working
                }}
              >
                {image.title}
              </Typography>
            </Box>
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const PhotoBanners = ({ imagesData }) => {
  const images = imagesData || [
    {
      src: Photo1,
      alt: 'Image 1',
      title: 'product',
      link: '/gallery',
    },
    {
      src: Photo2,
      alt: 'Image 2',
      title: 'people',
      link: '/construction',
    },
    {
      src: Photo3,
      alt: 'Image 3',
      title: 'activism',
      link: '/cantbreathe',
    },
    {
      src: Photo4,
      alt: 'Image 4',
      title: 'contact',
      link: '/contact',
    },
  ];

  return (
    <Box>
      <Typography
        variant='h3'
        sx={{ textTransform: 'uppercase', mt: 4, mb: 4, textAlign: 'center', fontWeight: 600 }}
      >
        Photos
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 8,
        }}
      >
        {images.map((image, index) => (
          <Grid item key={index} xs={12}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotoBanners;
