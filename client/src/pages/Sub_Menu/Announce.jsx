import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import axios from '../../config/axios';

import Header from '../../components/utils/header';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AnnouncePost from '../../components/Announce/AnnouncePost';
import PrevAnnounces from '../../components/Announce/PrevAnnouncements';

const Announce = () => { 
  const matches = useMediaQuery('(max-width:1200px)');
  const [announces, setAnnounces] = useState([]);

  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  useEffect(() => {
    axios.get(`${userType}/course/${courseId}/notification`).then((res) => {
      const announcements = res.data.notifications.map((post) => ({ 
        id: post.id,
        date: format(new Date(), 'do MMMM, yyyy'),
        body: post.body,
      }));
      setAnnounces(announcements);
    });
  }, [courseId, userType]);

  return (
    <div>
      <Header data="Announce" />
      <div
        style={{
          width: matches ? '90%' : '70%',
          margin: '0 auto',
          marginTop: 50,
        }}
      >
        <AnnouncePost announces={announces} setAnnounces={setAnnounces} />
        <p style={{ fontSize: 22, color: '#0d236d', margin: '40px 20px 20px' }}>
          Your Previous Announcements ...
        </p>
        <PrevAnnounces announces={announces} setAnnounces={setAnnounces} />
      </div>
    </div>
  );
};

export default Announce;
