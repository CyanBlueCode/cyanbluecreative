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
import useEvent from '../../util/useEvent';
import isMobile from '../../util/isMobile';

const ImageCard = ({ image }) => {
  const [hovered, setHovered] = useState(false);
  const [mobile, setMobile] = useState(isMobile());

  useEvent('resize', () => setMobile(isMobile()));

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

export default ImageCard;