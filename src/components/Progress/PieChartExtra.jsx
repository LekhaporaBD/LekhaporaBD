import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const PieChartExtra = ({data , colors}) => {
    return (
      <PieChart width={400} height={215} >
        <Pie
          data={data} 
          cx={190} 
          cy={105} 
          innerRadius={72}
          outerRadius={95} 
          fill="#8884d8"
          paddingAngle={3}
        >
        	{
          	data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
          }
        </Pie>
        
      </PieChart>
    )
}

export default PieChartExtra
