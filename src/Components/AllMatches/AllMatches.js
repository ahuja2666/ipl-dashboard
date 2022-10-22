import { GetAllMatches } from "../../data/ExtractData";
import { useEffect, useState } from "react";
import { ResponsiveContainer } from 'recharts';
import "./AllMatches.css"

const AllMatches = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    let data = GetAllMatches(props.data)
    setData(data)
  }, [props.data])


  return (
    <>
      <div className="allmtccnt">
        <header className="hdr">
          <p className='allmtcof'>All matches of season</p>
        </header>
        <ResponsiveContainer height={200} id="tbdl">
          <table className="table table-dark table-striped" >
            <thead>
              <tr>
                <th>Matches</th>
                <th>Winner</th>
                <th>Player of the match</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {data.map((each) => {
                if (each.win_by_runs === 0) {
                  return (
                    <tr key={each.id}>
                      <td>{each.team1} <strong>VS</strong> {each.team2}</td>
                      <td>{each.winner} by {each.win_by_wickets} wickets</td>
                      <td>{each.player_of_match}</td>
                      <td>{each.venue}</td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={each.id}>
                      <td>{each.team1} <strong>VS</strong> {each.team2}</td>
                      <td>{each.winner} by {each.win_by_runs} runs </td>
                      <td>{each.player_of_match}</td>
                      <td>{each.venue}</td>
                    </tr>
                  )
                }

              })}
            </tbody>
          </table>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default AllMatches