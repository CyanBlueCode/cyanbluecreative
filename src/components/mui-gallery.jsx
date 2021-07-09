// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// // import tileData from './tileData';
// import stockImgs from '../stockImgs.json';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     minWidth: '100%',
//     height: '100%',
//     objectFit: 'fill'
//   },
// }));

// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     cols: 2,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function ImageGridList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight='auto' className={classes.gridList} cols='2'>
//         {stockImgs.photos.map((tile) => (
//           <GridListTile key={tile.src} cols={tile.cols || 1}>
//             <img src={tile.src} alt="" />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }
