import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
import { BatOrFiled } from '../../data/ExtractData';
import "./AfterToss.css"

const AfterToss = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    let data = BatOrFiled(props.data)
    setData(data)
  }, [props.data])

  const COLORS = ['#209CEE', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <>
      <div className='aftertossvtn'>
        <p className='aftertosse'>Decision after toss</p>
        <ResponsiveContainer width={400} height={180} >
          <PieChart >
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <span className='statusof filed'>Fileding </span>
        <span className='statusof batt'>batting</span>
      </div>
    </>
  )
}

export default AfterToss