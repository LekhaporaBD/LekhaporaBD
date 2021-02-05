import React from 'react'
import { Grid } from "@material-ui/core";
import Header from '../../components/utils/Header'
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/profile.svg'
import ProfileCompo from '../../components/Profile/ProfileCompo'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  img : {
      width : '100%',
      paddingTop : 75
  }

}));


const Profile = () => {
    const classes = useStyles();
    return (
        <div style={{height:'96vh'}}>
            <Header data="Profile" />
            {/* <div style={{height:125}}></div> */}
            <Grid container spacing={3} alignItems="center" style={{width:'90%', margin:'0 auto'}}>
                <Grid item xs={5} > 
                    <img src={Img} alt="" className={classes.img} />
                </Grid>

                <Grid item xs={7}> 
                    <ProfileCompo />
                </Grid>
            </Grid>

        </div>
    )
}

export default Profile
