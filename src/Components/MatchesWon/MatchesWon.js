import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GetMatchesWonPlayed } from "../../data/ExtractData";
import { useEffect, useState } from "react";
import "./MatchesWon.css"
const MatchesWon = (props) => {
  const [data, setData] = useState([])


  useEffect(() => {
    let data = GetMatchesWonPlayed(props.data)
    console.log(data.length, "inside mathces won")
    setData(data)
  }, [props.data])





  return (
    <>
      <div className='matchescart'>
        <p className='headingmt'>Matches won and played by a team</p>
        <ResponsiveContainer width={400} height={200} >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="team" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="won" stackId="a" fill="#209CEE" />
            <Bar dataKey="total" stackId="a" fill="#FFBB28" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default MatchesWon