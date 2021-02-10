import React from 'react'
import { Grid , Paper } from "@material-ui/core";
import Header from '../../components/utils/header'
import { makeStyles } from '@material-ui/core/styles';
import OnlineExam from '../../assets/onlineExam.svg'
import Title from '../../components/utils/Title'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  img : {
      width : '100%',
      paddingTop : 75
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
    fontSize : 18
  },
  textValue : {
    color : '#0d236d'
  },
  btn : {
    padding : '10px 20px',
    fontSize : 17,
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

const Exams = {
  '1st Exam':{examType:'Class Test' , ExamDate:'09-02-2021' , disabled : false},
  '2nd Exam':{examType:'Mid Term Test' , ExamDate:'15-03-2021' , disabled : true},
}

const Exam = () => {
    const classes = useStyles();
    return (
        <div>
            <Header data="Join Exam" />

            <Grid container spacing={3} alignItems="center" style={{width:'90%', margin:'0 auto', height:'90vh'}}>
                <Grid item xs={5} > 
                    <img src={OnlineExam} alt="" className={classes.img} />
                </Grid>

                <Grid item xs={7}> 
                    <Grid container spacing={3} className={classes.container}>
                        {
                          Object.keys(Exams).map((exm , num) => (
                            <div> 
                              <Title title={Object.keys(Exams)[num]} />

                              <Grid item xs={12} >
                              <Paper className={classes.cardHolder}>
                                <p className={classes.text}> Exam Type : <span className={classes.textValue}> {Exams[exm].examType} </span> </p>
                                <p className={classes.text}>  Exam Date : <span className={classes.textValue}> {Exams[exm].ExamDate} </span></p>
                                <button disabled={Exams[exm].disabled} className={classes.btn}> Join Exam </button>
                              </Paper>
                              </Grid>
                            </div>
                          ))
                        }
                      </Grid>
                </Grid>
            </Grid>

        </div>
    )
}

export default Exam
