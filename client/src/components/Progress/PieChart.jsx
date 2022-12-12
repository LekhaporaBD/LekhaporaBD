import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'


const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="#022b3d" textAnchor={x > cx ? 'start' : 'end'} 
    	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const PieChartGenerator = ({data , colors}) => {
    return (
        <div>
        {/* <ResponsiveContainer width="100%" height={230} > */}
        <PieChart width={400} height={215} >
            <Pie
                data={data} 
                cx={195} 
                cy={105} 
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={"85%"} 
                fill="#8884d8"
                >
                    {
                    data.map((entry, index) => 
                    <Cell fill={colors[index % colors.length]}/>)
                }
            </Pie>
      </PieChart>
      
        </div>
    )
}

export default PieChartGenerator
