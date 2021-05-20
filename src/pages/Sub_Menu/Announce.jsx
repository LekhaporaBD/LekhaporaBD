import React from 'react'
import Header from '../../components/utils/header'
import AnnouncePost from '../../components/Announce/AnnouncePost'
import PrevAnnounces from '../../components/Announce/PrevAnnouncements'


const Announce = () => {
    return (
        <div>
            <Header data='Announce' />

            <div style={{width:'70%' , margin: '0 auto' , marginTop:50}}>
                < AnnouncePost />
                <p style={{fontSize: 22 , color: '#0d236d' , margin: '40px 20px 20px'}}> Your Previous Announcements ... </p>
                <PrevAnnounces />
            </div>



        </div>
    )
}

export default Announce
