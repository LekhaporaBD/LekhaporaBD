import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/utils/header';
import Gallery404 from '../../assets/Gallery404.svg';

const useStyles = makeStyles((theme) => ({
  notFoundWrapper: {
    backgroundColor: '#fff',
    margin: '6rem 15rem 10rem',
    padding: '1rem 5rem 7rem',
    textAlign: 'center',
    [theme.breakpoints.down('1400')]: {
      margin: '3rem 2rem',
    },
    [theme.breakpoints.down('600')]: {
      margin: '3rem 0',
    },
  },
  notFoundImage: {
    height: '50rem',
    width: '100%',
  },
  notFoundTitle: {
    fontSize: '3rem',
    fontWeight: 400,
  },
}));

const Gallery = () => {
  // const data = [];
  const classes = useStyles();
  return (
    <div>
      <Header data="Gallery" />
      <div className={classes.notFoundWrapper}>
        <img
          className={classes.notFoundImage}
          src={Gallery404}
          alt="No Class Record"
        />
        <h3 className={classes.notFoundTitle}>
          Sorry, There is no class record available.
        </h3>
      </div>
    </div>
  );
};

export default Gallery;
