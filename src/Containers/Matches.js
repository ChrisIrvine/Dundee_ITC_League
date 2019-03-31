import React, { Component }  from 'react';
import '../App.css';
import Match from '../Components/Match';

class matches extends Component {
  state = {
    matches: [
      {round: 1, mission: "The Relic (Board: 4 ft. x 4ft. Deployment: Search and Destroy 2 ft. x 2 ft.)", many: true, games: [
        {four: true, player1: "Dave (Raven Guard)", player2: "Kev (Space Wolves)", player3: "Alan (Altioc)", player4: "Ross [Dropped]"},
        {four: true, player1: "James (Tzeentch Demons)", player2: "Chris (Blood Angels)", player3: "Lee (Deathwatch)", player4: "Ryan (World Eaters)"},
        {four: true, player1: "John (Emperor's Children)", player2: "Colin (Death Guard)", player3: "Declan [Dropped]", player4: "Yans (Bork'an T'au)"},
        {four: true, player1: "Gavin (Sautekh Necrons)", player2: "Ross (T'au)", player3: "Craig (Tallarn)", player4: "Simon (Death Guard)" }
      ]},
      {round: 2, mission: "Glory Seeker (Open War) (Board: 4x4. Deployment: Front-Line Assault)", many: false, games: [
        {four: false, player1: "Dave (Raven Guard)", player2: "Chris (Blood Angels"},
        {four: false, player1: "Colin (Death Guard)", player2: "Kev (Space Wolves)"},
        {four: false, player1: "Craig (Tallarn)", player2: "Ryan (World Eaters)"},
        {four: false, player1: "James (Tzeentch Demons)", player2: "Gavin (Necrons)"},
        {four: false, player1: "Simon (Death Guard)", player2: "Alan (Altioc)"},
        {four: false, player1: "Ross (T'au)", player2: "Lee (Deathwatch)"},
        {four: false, player1: "Yans (T'au)", player2: "John (Emperor's Children)"}
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
