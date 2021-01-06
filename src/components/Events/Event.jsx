import React from 'react'
import Img from '../../assets/event.svg' 
import Styles from './Event.module.scss'
import Carousel from './carousel/carousel'

const upEvents = [
    {date: 'April 17,2019' , title:'Startup BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 16,2019' , title:'National Victory Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 31,2019' , title:'Startup BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'february 21,2019' , title:' Mother Language Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'April 25,2020' , title:'Robot Fest' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'December 31,2020' , title:'Corona BootCamp' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
]

const recents = [
    {date: 'December 31,2019' , title:'Higher Education Seminer' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'february 21,2019' , title:' Mother Language Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'June 15,2019' , title:'National Happy Day' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
    {date: 'April 25,2020' , title:'Robot Fest' , post:`There will a program regarding startup. Many industrial CEO's will be present there`},
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
                <div className={Styles.tagline} style={{justifyContent:'start'}}>
                    <h2 > UpComing Events. </h2>
                    <div style={{background:'#d5d5d5', flexGrow:1 , height:2 , marginLeft:20}}></div>
                </div>

                <div style={{width:'100%'}}>
                    <Carousel data={upEvents}/>
                </div>

                {/*  */}

                <div className={Styles.tagline} style={{justifyContent:'start'}}>
                    <h2 > Recent Events. </h2>
                    <div style={{background:'#d5d5d5', flexGrow:1 , height:2 , marginLeft:20}}></div>
                </div>

                <div style={{width:'100%'}}>
                    <Carousel data={recents}/>
                </div>
            </div>   
        </div>
    )
}

export default Event
