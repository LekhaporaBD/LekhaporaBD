import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Header from '../../components/Community/Header';
import AnnouncePost from '../../components/Community/AnnouncePost';
import PostList from '../../components/Community/PostList';

const Community = () => {
  const matches = useMediaQuery('(max-width:1200px)');
  return (
    <>
      <Header />
      <div style={{ width: matches ? '94%' : '70%', margin: '0 auto' }}>
        <AnnouncePost />
        <PostList />
      </div>
    </>
  );
};

export default Community;
