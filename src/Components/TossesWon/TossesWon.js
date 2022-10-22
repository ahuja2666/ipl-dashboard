import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GetTossesWon } from "../../data/ExtractData";
import { useEffect, useState } from "react";
import "./TossesWon.css";

const TossesWon = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    let data = GetTossesWon(props.data)
    setData(data)
  }, [props.data])

  return (
    <>
      <div className='containeroftossw'>
        <p className='tosseswonby'>Tosses won by team</p>
        <ResponsiveContainer width={400} height={205}>
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
            <XAxis dataKey="team" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="won" fill="#209CEE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default TossesWon