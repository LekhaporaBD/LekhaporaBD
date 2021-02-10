import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid , Paper , IconButton , Collapse  } from '@material-ui/core'
import Title from '../../components/utils/Title'
import Header from '../../components/utils/header'
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';


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

const Assignments = {
  '1st Assignment':{AssignmentOn:'All About HTML' , GivenOn:'21-12-2020' , SubmissionDate:'28-12-2020'},
  '2nd Assignment':{AssignmentOn:'Learn About CSS' , GivenOn:'28-12-2020' , SubmissionDate:'12-01-2021'},
  '3rd Assignment':{AssignmentOn:'Make A Website' , GivenOn:'5-01-2021' , SubmissionDate:'21-01-2021'},
}

const Assignment = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  return (

    <>
      <Header data='Assignments' />

     
      <Collapse in={open}   >
      <Alert severity="info"   
          style={{fontSize:18 , marginTop:30 , background:'#ebecf0', boxShadow:' inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF' , borderRadius:8}}
       action={
            <IconButton
              aria-label="close" color="inherit" size="medium"
              onClick={() => {setOpen(false);}}
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          }>
        <AlertTitle style={{fontSize:28}}>Info</AlertTitle>
          You have a deadline today. <strong>check it out!</strong>
      </Alert>
      </Collapse>
     




      <Grid container spacing={3} className={classes.container}>
      {
        Object.keys(Assignments).map((asnmt , num) => (
          <div> 
            <Title title={Object.keys(Assignments)[num]} />

            <Grid item xs={12} >
            <Paper className={classes.cardHolder}>
              <p className={classes.text}> Assignment On : <span className={classes.textValue}> {Assignments[asnmt].AssignmentOn} </span> </p>
              <p className={classes.text}> Given On : <span className={classes.textValue}> {Assignments[asnmt].GivenOn} </span> </p>
              <p className={classes.text}> Submission Date : <span className={classes.textValue}> {Assignments[asnmt].SubmissionDate} </span></p>
              <button className={classes.btn}> Submit </button>
            </Paper>
            </Grid>
          </div>
        ))
      }
      </Grid>
    </>
  )
}

export default Assignment
