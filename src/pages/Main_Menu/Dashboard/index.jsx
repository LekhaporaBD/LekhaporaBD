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
      const courses =
        userType === 'student' ? 'student_courses' : 'teacher_courses';

      const totalCourse = res.data[courses].length;
      let totalCredits = 0;
      res.data[courses].forEach((course) => {
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
      if (userType === 'student') setSummaries([totalCourse, totalCredits, 10]);
      else
        setSummaries([
          totalCourse,
          totalCredits,
          res.data.profile.total_taken_courses,
        ]);
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
