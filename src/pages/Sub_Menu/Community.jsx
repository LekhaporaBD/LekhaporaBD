import React from 'react'
import Header from '../../components/Community/Header'
import AnnouncePost from '../../components/Community/AnnouncePost'

const Community = () => {
  return (
    <>
      <Header/>
      <div style={{width: '70%', margin: '0 auto'}}>
        <AnnouncePost/>
      </div>
    </>
  )
}

export default Community
