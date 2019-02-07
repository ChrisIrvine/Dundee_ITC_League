import React, { Component }  from 'react';
import '../App.css';
import { Table } from 'semantic-ui-react';

class leaderboard extends Component {
  state = {
    players: [
      {name: "Chris", points: 0},
      {name: "Dave", points: 0},
      {name: "John", points: 0},
      {name: "Ryan", points: 0}
    ].sort(function(a, b) {
      return b.points - a.points;
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Leaderboard</h1>
          <div className="standard background-dim-important">
            <Table celled textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Player</Table.HeaderCell>
                  <Table.HeaderCell>Points</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.players.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.points}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default leaderboard;
