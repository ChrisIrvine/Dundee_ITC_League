import React, { Component }  from 'react';
import '../App.css';
import Match from '../Components/Match';

class matches extends Component {
  state = {
    matches: [
      {round: 1, mission: "The Relic (Board: 4 ft. x 4ft. Deployment: Search and Destroy 2 ft. x 2 ft.)", many: true, games: [
        {four: true, player1: "Dave (Raven Guard)", player2: "Kev (Space Wolves)", player3: "Steven (Orks)", player4: "Alan (Altioc)"},
        {four: true, player1: "James (Tzeentch Demons)", player2: "Chris (Blood Angels)", player3: "Lee (Deathwatch)", player4: "Ryan (World Eaters)"},
        {four: true, player1: "John (Emperor's Children)", player2: "Colin (Death Guard)", player3: "Declan (Thousand Sons)", player4: "Yans (Bork'an T'au)"},
        {four: true, player1: "Gavin (Sautekh Necrons)", player2: "Ross (T'au)", player3: "Craig (Tallarn)", player4: "Simon (Death Guard)" }
      ]},
      {round: 2, mission: "TBD", many: false, games: [
        {player1: "TBD", player2: "TBD"}
      ]}
    ]
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Matches</h1>
          {this.state.matches.map((round, index) => (
            <Match round={round.round} games={round.games} key={index} mission={round.mission} many={round.many}/>
          ))}
        </div>
      </div>
    );
  }
}

export default matches;
