import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import ImageCard from './ImageCard';

import Photo1 from '../../assets/CB-2K-1633232.jpg';
import Photo2 from '../../assets/CB-2K-1633147.jpg';
import Photo3 from '../../assets/P1511063.jpg';
import Photo4 from '../../assets/P1511379.jpg';

// ANCHOR UPDATE PHOTO BANNERS HERE
const images = [
  {
    src: Photo4,
    alt: 'Image 4',
    title: 'street',
    link: '/street',
  },
  {
    src: Photo1,
    alt: 'Image 1',
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
    src: Photo2,
    alt: 'Image 2',
    title: 'contact',
    link: '/contact',
  },
];

const PhotoBanners = ({ imagesData = images }) => (
  <Box>
    <Typography
      variant='h3'
      sx={{
        textTransform: 'uppercase',
        mt: 4,
        mb: 4,
        textAlign: 'center',
        fontWeight: 600,
      }}
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
      {imagesData.map((image, index) => (
        <Grid item key={index} xs={12}>
          <ImageCard image={image} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default PhotoBanners;
