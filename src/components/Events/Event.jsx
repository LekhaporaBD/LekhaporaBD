import React from 'react'
import Img from '../../assets/event.svg' 
import Styles from './Event.module.scss'
import Carousel from './carousel/carousel'
import Title from '../utils/Title'

const upEvents = [
    {date: 'April 17,2019' , title:'Startup BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 16,2019' , title:'National Victory Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 31,2019' , title:'Startup BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'february 21,2019' , title:' Mother Language Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'April 25,2020' , title:'Robot Fest Online' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 31,2020' , title:'Corona BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
]

const recents = [
    {date: 'December 31,2019' , title:'Higher Education Seminer' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'february 21,2019' , title:' Mother Language Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'April 25,2020' , title:'Robot Fest Online' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 31,2020' , title:'Corona BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'April 17,2019' , title:'Startup BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 16,2019' , title:'National Victory Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
]


const Event = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.imgHolder}> <img src={Img} alt="" /></div>

            <div className={Styles.main} >
                <Title title='Upcoming Events' />

                <div style={{width:'100%'}}>
                    <Carousel data={upEvents}/>
                </div>

                {/*  */}

                <Title title='Recent Events' />

                <div style={{width:'100%'}}>
                    <Carousel data={recents}/>
                </div>
            </div>   
        </div>
    )
}

export default Event
