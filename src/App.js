import { useEffect, useState } from "react";
import "./App.css"
import { GetAllMatches } from "./data/ExtractData"
import MatchesWon from "./Components/MatchesWon/MatchesWon";
import AfterToss from "./Components/AfterToss/AfterToss";
import TossesWon from "./Components/TossesWon/TossesWon";
import Stadium from "./Components/Stadium/Stadium";
import AllMatches from "./Components/AllMatches/AllMatches";

const App = () => {
  const [year, setYear] = useState(2017)
  const [size, setSize] = useState("");
  useEffect(() => {
    let data = GetAllMatches(year)
    setSize(data.length)


  }, [year])
  return (
    <div className="main-container">
      <div className="headers">
        <h1>IPL DASHBOARD </h1>
      </div>
      <div>
        <span className="selyear">Select Year   :   </span>
        <select className="btn btn-primary" onChange={(e) => { setYear(e.target.value) }}>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
        </select>
        <p className="totalm">Total Matches in Season is {size}</p>
      </div>
      <div className="parentofallcn">
        <div>
          <MatchesWon data={year} />
        </div>
        <div>
          <AfterToss data={year} />
        </div>
        <div>
          <TossesWon data={year} />
        </div>
        <div className="anotherfb">
          <div className="stdiumdic" >
            <Stadium data={year} />
          </div>
          <div>
            <AllMatches data={year} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;