import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import ImageCard from './ImageCard';
import { photoBannerImages as images } from '../../config/contentConfig'

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
