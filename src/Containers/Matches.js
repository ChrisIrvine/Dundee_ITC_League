import React, { Component }  from 'react';
import '../App.css';
import Match from '../Components/Match';

class matches extends Component {
  state = {
    matches: [
      {week: 1, mission: "Vital Intelligence - CA2019", games: [
        {player1: "Chris (Blood Angels)", player2: "Dave (Raven Guard)"},
        {player1: "John (Emperor's Children)", player2: "Ryan (World Eaters)"}
      ]},
      {week: 2, mission: "Some other mission - CA2019", games: [
        {player1: "Ryan (World Eaters)", player2: "Dave (Raven Guard)"},
        {player1: "John (Emperor's Children)", player2: "Chris (Blood Angels)"}
      ]}
    ]
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Matches</h1>
          {this.state.matches.map((week, index) => (
            <Match round={week.week} games={week.games} key={index} mission={week.mission} />
          ))}
        </div>
      </div>
    );
  }
}

export default matches;
