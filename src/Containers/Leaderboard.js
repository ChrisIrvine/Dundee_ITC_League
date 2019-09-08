import React from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const leaderboard = ( props ) => {
  const orderedPlayers = [].concat(props.players)
    .sort((a, b) => b.points - a.points)
    .map((player, index) => (
      <Table.Row key={index}>
        <Table.Cell>{player.name}</Table.Cell>
        <Table.Cell>{player.points}</Table.Cell>
      </Table.Row>
    ));

    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Dundee ITC Leaderboard</h1>
          <div className="standard background-dim-important">
            <Table celled textAlign="center" unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Player</Table.HeaderCell>
                  <Table.HeaderCell>ITC Points</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {orderedPlayers}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    )
}

export default leaderboard;
