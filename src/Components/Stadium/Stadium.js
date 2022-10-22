import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StadiumWise } from "../../data/ExtractData";
import { useEffect, useState } from "react";
import "./Stadium.css";

const Stadium = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    let data = StadiumWise(props.data)
    setData(data)
  }, [props.data])



  return (
    <>
      <div className='stidumcont'>
        <p className='stidummtc'>Matches played Stadium Wise</p>
        <ResponsiveContainer width={400} height={200}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="matches" fill="#209CEE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Stadium