import React, { useState, useEffect } from 'react';

import { Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import axios from '../../config/axios';

import Header from '../../components/utils/header';
import { makeStyles } from '@material-ui/core/styles';
import OnlineExam from '../../assets/onlineExam.svg';
import Title from '../../components/utils/Title';
import Styles from '../../pages/Authentication/Login.module.scss';
import ForgetPassModel from '../../components/utils/modal'


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
  },
  container: {
    flexDirection: 'column',
    padding: '2rem 5rem',
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
    boxShadow:
      '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF',
    background: '#ebecf0',
    padding: '2rem',
    maxWidth: '80rem',
    minHeight: '50rem',
  },
  editorItself: {
    background: 'white',
    marginTop: 25,
    minHeight: 185,
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

const Exam = () => {
  const classes = useStyles();
  const userType = useSelector(({ ui }) => ui.userType);

  const matches = useMediaQuery('(max-width:1700px)');


  return (
    <div>
      <Header data={userType === 'teacher' ? 'Create Exam' : 'Join Exam'} />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ width: '90%', margin: '0 auto', height: '90vh' }}
      >
        <Grid item xs={5} justifyContent="center">
          <img src={OnlineExam} alt="" className={classes.img} />
        </Grid>

        <Grid item xs={matches ? 12 : 7} >
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
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);
  const [openModal, setOpenModal] = useState(false);


  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const [values, setValues] = useState({
    name: '',
    time_line: '',
    mark: '',
    start_at: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSumbit = () => {

    // const blocks = convertToRaw(editorState?.getCurrentContent()).blocks
    // const value = editorState.getCurrentContent().getPlainText('\u0001')
    // values.question = convertToRaw(editorState.getCurrentContent(),).blocks[0].text;
    setEditorState('');

    const exam = { ...values, term: values.name };


    setValues({ name: '', time_line: '', mark: '', start_at: '',})
    setOpenModal(prevState => !prevState)
  };

  return (
    <>
      <div className={classes.editorWrapper}>
        <p
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: '#0d236d',
            marginBottom: 12,
          }}
        >
          {' '}
          Exam Details.
        </p>
        <div
          style={{
            padding: 30,
            display: 'flex',
            marginBottom: 23,
            borderRadius: 10,
            boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff',
          }}
        >
          <label style={{ marginRight: 15 }}>
            <input
              type="text"
              onChange={handleChange('name')}
              placeholder="CT / Final"
              className={Styles.input}
              value={values.name}
            />
          </label>

          <label style={{ marginRight: 15 }}>
            <input
              type="text"
              onChange={handleChange('time_line')}
              placeholder="Time"
              className={Styles.input}
              value={values.time_line}
            />
          </label>

          <label style={{ marginRight: 15 }}>
            <input
              type="text"
              onChange={handleChange('mark')}
              placeholder="Mark"
              className={Styles.input}            
              value={values.mark}
            />
          </label>

          <label style={{ marginRight: 15 }}>
            <input
              type="text"
              onChange={handleChange('start_at')}
              placeholder="Start At"
              className={Styles.input}
              value={values.start_at}
            />
          </label>
        </div>

        <Editor
          defaultEditorState={editorState}
          editorState={editorState}
          onEditorStateChange = {editorState =>   setEditorState(editorState) }
          editorClassName={classes.editorItself}
          wrapperClassName="wrapper-class"
          toolbarClassName="toolbar-class"
        />

        {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
      </div>
      <button onClick={handleSumbit} className={classes.button}>
        Create Exam       
         { openModal && <div><ForgetPassModel  openModal={openModal} setOpenModal={setOpenModal}/> </div>  }
      </button>

    </>
  );
};

const Exams = {
  '1st Exam': {
    examType: 'Class Test',
    ExamDate: '09-02-2021',
    disabled: false,
  },
  '2nd Exam': {
    examType: 'Mid Term Test',
    ExamDate: '15-03-2021',
    disabled: true,
  },
};

const JoinExam = ({ classes }) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  const [exams, setExams] = useState({});

  useEffect(() => {
    axios.get(`${userType}/course/${courseId}/exam`).then((res) => {
      const exams = {};
      const lectures = res.data.exams.map((exam) => {
        exams[exam.term] = {
          examType: exam.name,
          ExamDate: exam.start_at,
          disabled: true,
        };
      });
      setExams(exams);
    });
  }, [courseId, userType]);

  return (
    <Grid container spacing={3} className={classes.container}>
      {Object.keys(exams).map((exm, num) => (
        <div>
          <Title title={Object.keys(exams)[num]} />
          <Grid item xs={12}>
            <Paper className={classes.cardHolder}>
              <p className={classes.text}>
                Exam Type :
                <span className={classes.textValue}>{exams[exm].examType}</span>
              </p>
              <p className={classes.text}>
                Exam Date :
                <span className={classes.textValue}>{exams[exm].ExamDate}</span>
              </p>
              <button disabled={exams[exm].disabled} className={classes.btn}>
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
