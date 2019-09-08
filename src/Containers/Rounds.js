import React, { Component }  from 'react';
import '../App.css';
import Match from '../Components/Round';

class rounds extends Component {
  state = {
    matches: [
      {round: 1, mission: "ITC Mission 1", games: [
        {player1: "Dave (Raven Guard)", player2: "Kev (Space Wolves)", winner: "p1"},
        {player1: "James (Tzeentch Demons)", player2: "Chris (Blood Angels)", winner: "p2"},
        {player1: "John (Emperor's Children)", player2: "Colin (Death Guard)", winner: "n/a"},
        {player1: "Gavin (Sautekh Necrons)", player2: "Ross (T'au)", winner: "n/a"}
      ]},
      {round: 2, mission: "ITC Mission 1", games: [
        {player1: "Dave (Raven Guard)", player2: "Kev (Space Wolves)", winner: "p2"},
        {player1: "James (Tzeentch Demons)", player2: "Chris (Blood Angels)", winner: "p1"},
        {player1: "John (Emperor's Children)", player2: "Colin (Death Guard)", winner: "n/a"},
        {player1: "Gavin (Sautekh Necrons)", player2: "Ross (T'au)", winner: "n/a"}
      ]}
    ]
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Rounds</h1>
          {this.state.matches.map((round, index) => (
            <Match round={round.round} games={round.games} key={index} mission={round.mission} many={round.many}/>
          ))}
        </div>
      </div>
    );
  }
}

export default rounds;
