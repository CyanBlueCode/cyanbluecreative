import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // don't want overflow to hide images
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '99vw',
    height: 'auto',
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

// TODO: MUI GridList might be better suited for menu gallaries
// - cellHeight needs to scale
//  - current photo needs to be aware whether previous & next photos are vert or horz 
// - screen size must be considered 

const ImageGallery = ({ tileData }) => {
  const classes = useStyles();

  console.log(' tileData=>', tileData);

  return (
    <div className={classes.root}>
      <GridList cellHeight={720} className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.id} cols={(tile.height > tile.width) ? 2 : 3 } rows={(tile.height > tile.width) ? 2 : 1}>
            <img src={tile.src} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ImageGallery;