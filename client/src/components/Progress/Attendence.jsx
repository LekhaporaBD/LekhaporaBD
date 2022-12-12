import React from 'react'
// const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip ,
     ResponsiveContainer  
    } from 'recharts'



const data = [
      {day: '1st', attendance: 800},
      {day: '1st', attendance: 1200},
      {day: '2nd', attendance: 2700},
      {day: '3rd', attendance: 1800},
      {day: '4th', attendance: 900},
      {day: '5th', attendance: 680},
      {day: '6th', attendance: 1280},
      {day: '7th', attendance: 1280},
    //   {day: 'Thr', attendance: 1890},

];


const Attendence = () => {
    return (
        <div>

            <ResponsiveContainer width="100%" height={230} >

            <AreaChart  data={data} width={640} height={230}
                margin={{ top: 25, right: 10, left: 10, bottom: 20 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#bdecff" stopOpacity={0.9}/>
                    <stop offset="100%" stopColor="#bdecff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="day"/>
                <YAxis hide={true}/>
                <CartesianGrid strokeDasharray="0 2" />
                <Tooltip />
                <Area type="monotone" dataKey="attendance" 
                    stroke="#42a9d6" fillOpacity={100} 
                    strokeWidth={2} 
                    fill="url(#colorUv)" />

            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Attendence
