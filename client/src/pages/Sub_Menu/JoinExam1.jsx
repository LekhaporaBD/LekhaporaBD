import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Header from '../../components/utils/header';
import OnlineExam from '../../assets/onlineExam.svg';
import Title from '../../components/utils/Title';
import axios from '../../config/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  img: {
    width: '100%',
    // paddingTop : 75
  },
  cardHolder: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '35px 0',
    boxShadow:
      'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF !important',
    background: '#ebecf0',
    borderRadius: 8,
    [theme.breakpoints.down('1300')]: {
      flexDirection: 'column',
      padding: '3.5rem 3rem',
    },
  },
  container: {
    flexDirection: 'column',
    padding: '2rem 5rem',
    [theme.breakpoints.down('600')]: {
      padding: '1.5rem ',
    },
  },
  text: {
    fontSize: 18,
  },
  textValue: {
    color: '#0d236d',
  },
  btn: {
    padding: '10px 20px',
    fontSize: 17,
    borderRadius: 25,
    cursor: 'pointer',
    background: '#ebecf0',
    border: '1px solid',
    color: '#0d236d',
    boxShadow: '-5px -5px 20px #FFF, 5px 5px 20px #BABECC',
    transition: 'all 0.2s ease-in-out',

    '&:hover': { boxShadow: '-2px -2px 5px #FFF, 2px 2px 5px #BABECC' },
    '&:active': {
      boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
    },
  },
  editorWrapper: {
    background: '#fff',
    padding: '2rem',
    maxWidth: '80rem',
    minHeight: '50rem',
  },
  button: {
    fontSize: '1.6rem',
    padding: '.8rem 1rem',
    border: '1px solid',
    borderRadius: '5rem',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    width: '25rem',
    margin: '2rem auto 0rem auto',
    textAlign: 'center',
    display: 'block',
    background: '#ebecf0',
    cursor: 'pointer',
    color: '#0d236d',
    boxShadow: '-5px -5px 20px #FFF, 5px 5px 20px #BABECC',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      boxShadow: '-2px -2px 5px #FFF, 2px 2px 5px #BABECC',
    },
    '&:active': {
      boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
    },
  },
}));

const Exams = {
  '1st Exam': {
    examType: 'Class Test',
    ExamDate: '09-04-2021',
    disabled: false,
  },
  '2nd Exam': {
    examType: 'Mid Term Test',
    ExamDate: '15-03-2021',
    disabled: true,
  },
};

const Exam = () => {
  const classes = useStyles();
  const userType = useSelector(({ ui }) => ui.userType);
  const matches = useMediaQuery('(max-width:1300px)');
  const sm500 = useMediaQuery('(max-width:1300px)');

  return (
    <div>
      <Header data={userType === 'teacher' ? 'Create Exam' : 'Join Exam'} />

      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{
          width: matches ? '100%' : '90%',
          margin: '0 auto',
          height: sm500 ? '' : '90vh',
        }}
      >
        <Grid
          item
          xs={matches ? 12 : 5}
          style={{ display: sm500 ? 'none' : 'flex' }}
        >
          <img src={OnlineExam} alt="" className={classes.img} />
        </Grid>

        <Grid item xs={matches ? 12 : 7}>
          {userType === 'teacher' ? (
            <CreateExam classes={classes} />
          ) : (
            <JoinExam classes={classes} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

const CreateExam = ({ classes }) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );
  const handleSumbit = () => {
  };

  return (
    <>
      <div className={classes.editorWrapper}>
        <input type="text" />
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />

        {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
      </div>
      <button onClick={handleSumbit} className={classes.button}>
        Create Exam
      </button>
    </>
  );
};

const JoinExam = ({ classes }) => {
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get(`student/course/${courseId}/exam`).then((res) => {
      setExams(res.data);
    });
  }, [courseId]);

  return (
    <Grid container spacing={3} className={classes.container}>
      {exams.map((exm, num) => (
        <div>
          <Title title={exm.name} />

          <Grid item xs={12}>
            <Paper className={classes.cardHolder}>
              <p className={classes.text}>
                Exam Type :<span className={classes.textValue}>{exm.term}</span>
              </p>
              <p className={classes.text}>
                Exam Date :
                <span className={classes.textValue}>{exm.start_at}</span>
              </p>
              <button disabled={exm.disabled} className={classes.btn}>
                Join Exam
              </button>
            </Paper>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default Exam;
