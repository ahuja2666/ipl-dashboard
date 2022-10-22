import data from "./data.json";

export const GetMatchesWonPlayed = (props) => {
  let winner = new Map();
  let played = new Map();
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === Number(props)) {
      for (let j = 0; j < data[i].matches.length; j++) {
        if (winner.has(data[i].matches[j].winner)) {
          winner.set(data[i].matches[j].winner, winner.get(data[i].matches[j].winner) + 1);
        } else {
          winner.set(data[i].matches[j].winner, 1);
        }
        if (played.has(data[i].matches[j].team1)) {
          played.set(data[i].matches[j].team1, played.get(data[i].matches[j].team1) + 1);
        } else {
          played.set(data[i].matches[j].team1, 1);
        }
        if (played.has(data[i].matches[j].team2)) {
          played.set(data[i].matches[j].team2, played.get(data[i].matches[j].team2) + 1);
        } else {
          played.set(data[i].matches[j].team2, 1);
        }

      }
      winner = new Map([...winner.entries()].sort((a, b) => b[1] - a[1]));
      played = new Map([...played.entries()].sort((a, b) => b[1] - a[1]));
      let arr = []
      for (let [k, v] of winner.entries()) {
        let temp = {};
        temp.team = k
        temp.won = v
        temp.total = played.get(k)
        arr.push(temp);
      }
      return arr;

    }
  }

};

export const GetTossesWon = (props) => {
  let tossesWon = new Map();
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === Number(props)) {
      for (let j = 0; j < data[i].matches.length; j++) {
        if (tossesWon.has(data[i].matches[j].toss_winner)) {
          tossesWon.set(data[i].matches[j].toss_winner, tossesWon.get(data[i].matches[j].toss_winner) + 1);
        } else {
          tossesWon.set(data[i].matches[j].toss_winner, 1);
        }
      }
      tossesWon = new Map([...tossesWon.entries()].sort((a, b) => b[1] - a[1]));
      let arr = []
      for (let [k, v] of tossesWon.entries()) {
        let temp = {}
        temp.team = k
        temp.won = v
        arr.push(temp);
      }
      return arr;

    }
  }
}

export const BatOrFiled = (props) => {
  let bat = 0;
  let filed = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === Number(props)) {
      for (let j = 0; j < data[i].matches.length; j++) {
        if (data[i].matches[j].toss_decision === "field") {
          filed++;
        } else {
          bat++;
        }
      }
      return ([{ name: "batting", value: bat }, { name: "fielding", value: filed }]);
    }
  }
}

export const StadiumWise = (props) => {
  let stadium = new Map();
  for (let i = 0; i < data.length; i++) {
    if (data[i].year === Number(props)) {
      for (let j = 0; j < data[i].matches.length; j++) {
        if (stadium.has(data[i].matches[j].venue)) {
          stadium.set(data[i].matches[j].venue, stadium.get(data[i].matches[j].venue) + 1);
        } else {
          stadium.set(data[i].matches[j].venue, 1);
        }
      }
      stadium = new Map([...stadium.entries()].sort((a, b) => b[1] - a[1]));
      let arr = []
      for (let [k, v] of stadium.entries()) {
        let temp = {}
        temp.name = k
        temp.matches = v
        arr.push(temp);
      }
      return arr;
    }
  }
};

export const GetAllMatches = (props) => {

  for (let i = 0; i < data.length; i++) {
    if (data[i].year === Number(props)) {
      return data[i].matches;
    }

  }

};