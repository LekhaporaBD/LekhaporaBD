import React from 'react'
import Header from '../../components/Community/Header'
import AnnouncePost from '../../components/Community/AnnouncePost'
import PostList from '../../components/Community/PostList'

const Community = () => {
  return (
    <>
      <Header/>
      <div style={{width: '70%', margin: '0 auto'}}>
        <AnnouncePost/>
        <PostList/>
      </div>
    </>
  )
}

export default Community
