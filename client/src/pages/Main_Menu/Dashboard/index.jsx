import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Classrooms from '../../../components/Dashboard/Classrooms';
import Hero from '../../../components/Dashboard/Hero';
import Summaries from '../../../components/Dashboard/Summaries';
import axios from '../../../config/axios';

const Dashboard = () => {
  const userType = useSelector(({ ui }) => ui.userType);

  const [classrooms, setClassrooms] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const profilePicture = useSelector(({ ui }) => ui?.profile?.profile_picture);
  const id_number = localStorage.getItem('id_number') 

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${userType}/dashboard`, { params: { id_number : id_number } }).then((res) => {   
      const classrooms = [];
      const courses =
        userType === 'student' ? 'student_courses' : 'teacher_courses';

      const totalCourse = res.data[courses].length;
      let totalCredits = 0;
      res.data[courses].forEach((course) => {
        classrooms.push({
          courseId: course.course_id,
          courseTeacher: course.teacher_id,
          courseCode: course.code,
          title: course.name,
          facultyName: course.code,
          facultyPhoto:
            userType === 'student'
              ? course.teacher_default_pic
              : profilePicture,
        });
        totalCredits += +course.credit;
      });
      setClassrooms(classrooms);
      if (userType === 'student') setSummaries([totalCourse, totalCredits, 10]);
      else
        setSummaries([ 108 , 9 , 12]);
    }).catch(err => console.log(err.msg));;
  }, [userType, dispatch]);

  return (
    <>
      <Hero />
      <Summaries data={summaries} />
      <Classrooms classrooms={classrooms} />
    </>
  );
};

export default Dashboard;
