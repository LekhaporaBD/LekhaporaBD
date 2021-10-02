import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../../components/utils/header';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/profile.svg';
import ProfileCompo from '../../components/Profile/ProfileCompo';

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
  return (
    <div style={{ padding: '2rem' }}>
      <Header data="Profile" />

      <Grid
        container
        spacing={3}
        alignItems="center"
        // style={{ width: '90%', margin: '0 auto' }}
      >
        <Grid item lg={4} md={12}>
          <img src={Img} alt="" className={classes.img} />
        </Grid>

        <Grid item lg={8} md={12}>
          <ProfileCompo />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
