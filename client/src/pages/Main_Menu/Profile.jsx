import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Header from '../../components/utils/header';
import Img from '../../assets/profile.svg';
import ProfileCompo from '../../components/Profile/ProfileCompo';
import ProfilePic from '../../components/Profile/profilePic';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  img: {
    width: '100%',
    paddingTop: 75,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1200px)');

  return (
    <div style={{ padding: '2rem' }}>
      <Header data="Profile" />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={matches ? 12 : 6}>
          <img src={Img} alt="" className={classes.img} />
        </Grid>

        <Grid item xs={matches ? 12 : 6}>
          {/* <ProfileCompo /> */}
          <ProfilePic />
        </Grid>
      </Grid>

      <Grid container xs={12}>
          <ProfileCompo />
      </Grid>
    </div>
  );
};

export default Profile;
