import React, { Component }  from 'react';
import '../App.css';
import Match from '../Components/Match';

class matches extends Component {
  state = {
    matches: [
      {week: 1, mission: "The Relic (Board: 4 ft. x 4ft. Deployment: Search and Destroy 2 ft. x 2 ft.)", many: true, games: [
        {four: true, player1: "Dave (Raven Guard)", player2: "Kev (Space Wolves)", player3: "Steven (Unknown)", player4: "Alan (Altioc)"},
        {four: false, player1: "David (Death Guard)", player2: "Simon (Death Guard)", player3: "Yans (Bork'an T'au)"},
        {four: true, player1: "James (Tzeentch Demons)", player2: "Chris (Blood Angels)", player3: "Lee (Deathwatch)", player4: "Ryan (World Eaters)"},
        {four: false, player1: "John (Death Guard)", player2: "Colin (Death Guard)", player3: "Declan (Thousand Sons)"},
        {four: true, player1: "Gavin (Sautekh Necrons)", player2: "Ross (T'au)", player3: "Stuart (Unknown)", player4: "Craig (Tallarn)"}
      ]},
      {week: 2, mission: "Some other mission - CA2019", many: false, games: [
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
            <Match round={week.week} games={week.games} key={index} mission={week.mission} many={week.many}/>
          ))}
        </div>
      </div>
    );
  }
}

export default matches;
