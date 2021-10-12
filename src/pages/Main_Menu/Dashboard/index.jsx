import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Classrooms from '../../../components/Dashboard/Classrooms';
import Hero from '../../../components/Dashboard/Hero';
import Summaries from '../../../components/Dashboard/Summaries';
import axios from '../../../config/axios';
import { setProfile } from '../../../store/ui';
import teacher2 from '../../../assets/teachers/teacher-2.png';

const Dashboard = () => {
  const userType = useSelector(({ ui }) => ui.userType);

  const [data, setData] = useState({});
  const [classrooms, setClassrooms] = useState([]);
  const [summaries, setSummaries] = useState([]);

  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    axios.get(`student/dashboard`).then((res) => {
      setData(res.data);
      dispatch(setProfile({ profile: res.data.profile }));
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
  }, [userType, setData, dispatch]);

  return (
    <>
      <Hero />
      <Summaries data={summaries} />
      <Classrooms classrooms={classrooms} />
    </>
  );
};

export default Dashboard;
