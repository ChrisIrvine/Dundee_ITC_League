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
        {four: false, player1: "Dave (Raven Guard)", player2: "Chris (Blood Angels)"},
        {four: false, player1: "Colin (Death Guard)", player2: "Kev (Space Wolves)"},
        {four: false, player1: "Craig (Tallarn)", player2: "Ryan (World Eaters)"},
        {four: false, player1: "James (Tzeentch Demons)", player2: "Gavin (Necrons)"},
        {four: false, player1: "Simon (Death Guard)", player2: "Alan (Altioc)"},
        {four: false, player1: "Ross (T'au)", player2: "Lee (Deathwatch)"},
        {four: false, player1: "Yans (T'au)", player2: "John (Emperor's Children)"}
      ]},
      {round: 3, mission: "Take and Hold (Open War) (Board: 6x4. Deployment: See Facebook Post)", many: false, games: [
        {four: false, player1: "John (Emperor's Children)", player2: "BYE ROUND"},
        {four: false, player1: "Kev (Space Wolves)", player2: "Ross (T'au)"},
        {four: false, player1: "Gavin (Necrons)", player2: "Chris (Blood Angels)"},
        {four: false, player1: "Alan (Altioc)", player2: "Colin (Death Guard)"},
        {four: false, player1: "Ryan (World Eaters)", player2: "Yans (T'au)"},
        {four: false, player1: "Dave (Raven Guard)", player2: "Simon (Death Guard)"},
        {four: false, player1: "Lee (Deathwatch)", player2: "Craig (Tallarn)"}
      ]},
      {round: 4, mission: "The Comet (Open War) Twist: Orbital Debris (Board: 6x4. Deployment: See Facebook Post)", many: false, games: [
        {four: false, player1: "Ross (T'au)", player2: "Alan (Altioc)"},
        {four: false, player1: "Yans (T'au)", player2: "Lee (Deathwatch) now dropped out"},
        {four: false, player1: "Colin (Death Guard)", player2: "Dave (Raven Guard)"},
        {four: false, player1: "BYE ROUND", player2: "Ryan (World Eaters)"},
        {four: false, player1: "Chris (Blood Angels)", player2: "Simon (Death Guard)"},
        {four: false, player1: "Gavin (Emperor's Children)", player2: "Gavin (Necrons)"},
        {four: false, player1: "Craig (Tallarn)", player2: "Kev (Sapce Wolves)"}
      ]},
      {round: 5, mission: "Objective: Drawn & Quartered || Twist: Battle Frenzy || Ruse: Revenge! (Board: 6x4. Deployment: see Facebook post)", many: false, games: [
        {four: false, player1: "Kev (Space Wolves)", player2: "Yans (T'au)"},
        {four: false, player1: "Alan (Altioc)", player2: "Colin (Tallarn)"},
        {four: false, player1: "Ryan (World Eaters)", player2: "Gavin (Necrons)"},
        {four: false, player1: "Dave (Raven Guard)", player2: "Ross (T'au)"},
        {four: false, player1: "Simon (Death Guard)", player2: "Colin (Death Guard)"},
        {four: false, player1: "John (Empror's Children)", player2: "Chris (Blood Angels)"}
      ]},
      {round: 6, mission: "Supply Cache || Twist: Eager for the Fight || Ruse: Dug In || Deployment: see Facebook post", many: false, games: [
        {four: false, player1: "Chris (Blood Angels)", player2: "Colin (Death Guard)"},
        {four: false, player1: "Simon (Death Guard)", player2: "Gavin (Necrons)"},
        {four: false, player1: "Craig (Tallarn)", player2: "Dave (Raven Guard)"},
        {four: false, player1: "John (Emperor's Children)", player2: "Ryan (World Eaters)"},
        {four: false, player1: "Yans (Bork'an)", player2: "Alan (Altioc)"}
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
