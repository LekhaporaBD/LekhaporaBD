import React from 'react'
import Header from '../../components/utils/header'
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/studentList.svg'
import StudentList from '../../components/studentList/studentList'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  
    img : {
        width : '100%',
        
        // paddingTop : 75
    },
  
  }));


const Students = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Header data='Students' />

            <Grid container spacing={3} alignItems="center" style={{width:'90%', margin:'0 auto' , height : '94vh',}}>
                <Grid item xs={6} > 
                    <img src={Img} alt="" className={classes.img} />
                </Grid>

                <Grid item xs={6}> 
                    <StudentList />
                </Grid>
            </Grid>
        </div>
    )
}

export default Students
