import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../../config/axios';

import Progress from "../../../components/Progress/Progress";


const DashboardProgress = () => {

  const userType = useSelector(({ ui }) => ui.userType);
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    axios.get(`${userType}/dashboard`).then((res) => {
      setClassrooms(res.data)
    });

  }, [userType]);

  return <Progress  classroom = {classrooms.student_courses} />;
};

export default DashboardProgress;
