import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import stockImgs from '../stockImgs.json';
// import { photos as stockImgs } from './photos'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    minWidth: 'auto',
    height: 'auto',
    objectFit: 'fill'
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight='auto' cols='3'>
        {stockImgs.photos.map((tile) => (
          <GridListTile key={tile.src} className={classes.gridList} cols={tile.cols || 2}>
            <img src={tile.src} alt="" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
