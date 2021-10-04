import React from 'react';
import Header from '../../components/utils/header';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AnnouncePost from '../../components/Announce/AnnouncePost';
import PrevAnnounces from '../../components/Announce/PrevAnnouncements';

const Announce = () => {
  const matches = useMediaQuery('(max-width:1200px)');
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
        <AnnouncePost />
        <p style={{ fontSize: 22, color: '#0d236d', margin: '40px 20px 20px' }}>
          {' '}
          Your Previous Announcements ...{' '}
        </p>
        <PrevAnnounces />
      </div>
    </div>
  );
};

export default Announce;
