import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Classrooms from '../../../components/Dashboard/Classrooms';
import Hero from '../../../components/Dashboard/Hero';
import Summaries from '../../../components/Dashboard/Summaries';
import axios from '../../../config/axios';
import teacher2 from '../../../assets/teachers/teacher-2.png';

const Dashboard = () => {
  const userType = useSelector(({ ui }) => ui.userType);

  const [classrooms, setClassrooms] = useState([]);
  const [summaries, setSummaries] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${userType}/dashboard`).then((res) => {
      const classrooms = [];
      const totalCourse = res.data.student_courses.length;
      let totalCredits = 0;
      res.data.student_courses.forEach((course) => {
        classrooms.push({
          courseId: course.id,
          courseTeacher: course.teacher_id,
          courseCode: course.code,
          title: course.name,
          facultyName: course.code,
          facultyPhoto: teacher2,
        });
        totalCredits += +course.credit;
      });
      setClassrooms(classrooms);
      setSummaries([totalCourse, totalCredits, 10]);
    });
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
