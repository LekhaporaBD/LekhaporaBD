import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Paper } from '@material-ui/core'
import Title from '../../components/utils/Title'
import Header from '../../components/utils/header'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  cardHolder: {
    display: 'flex',
    justifyContent:'space-around',
    padding : '35px 0',
    boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF !important',
    background : '#ebecf0',
    borderRadius : 8
  },
  container: {
    flexDirection : 'column',
    padding : '2rem 5rem'
  },
  text: {
    fontSize : 25
  },
  textValue : {
    color : '#0d236d'
  },
  btn : {
    padding : '10px 30px',
    fontSize : 20,
    borderRadius : 25,
    cursor : 'pointer',
    background: '#ebecf0',
    border: '1px solid',
    color: '#0d236d',
    boxShadow: '-5px -5px 20px #FFF, 5px 5px 20px #BABECC',
    transition: 'all 0.2s ease-in-out',
  
    '&:hover': {boxShadow: '-2px -2px 5px #FFF, 2px 2px 5px #BABECC'},
    '&:active' :{ boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF'}
  }
}));

const lectures = {
  '1st Class':{fileName:'All About HTML' , date:'21-12-2020' , fileType:'pdf'},
  '2nd Class':{fileName:'Learn About CSS' , date:'28-12-2020' , fileType:'mp4'},
  '3rd Class':{fileName:'Make A Website' , date:'5-01-2021' , fileType:'ppt'},
  '4th Class':{fileName:'Learn Js' , date:'8-01-2021' , fileType:'word'},
  '5th Class':{fileName:'Javascript' , date:'8-01-2021' , fileType:'pdf'},
}

const Lectures = () => {
  const classes = useStyles();
  return (

    <>
      <Header data='Lectures' />

      <Grid container spacing={3} className={classes.container}>
      {
        Object.keys(lectures).map((lec , num) => (
          <div> 
            <Title title={Object.keys(lectures)[num]} />

            <Grid item xs={12} >
            <Paper className={classes.cardHolder}>
              <p className={classes.text}> FileName : <span className={classes.textValue}> {lectures[lec].fileName} </span> </p>
              <p className={classes.text}> Date : <span className={classes.textValue}> {lectures[lec].date} </span> </p>
              <p className={classes.text}> Type : <span className={classes.textValue}> {lectures[lec].fileType} </span></p>
              <button className={classes.btn}> Download </button>
            </Paper>
            </Grid>
          </div>
        ))
      }
      </Grid>
    </>
  )
}

export default Lectures
