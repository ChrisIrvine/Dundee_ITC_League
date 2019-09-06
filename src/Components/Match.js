import React from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const match = ( props ) => {
    return (
        <div className="standard">
            <div className="round"><h3>Round {props.round}</h3></div>
            <div className="mission"><h4>Mission: {props.mission}</h4></div>
            <div className="army-list match-list">
                <Table unstackable compact>
                    <Table.Header>
                        {props.many ? (
                            <Table.Row>
                                <Table.HeaderCell textAlign="left">Player 1</Table.HeaderCell>              
                                <Table.HeaderCell textAlign="center">Player 2</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center">Player 3</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Player 4</Table.HeaderCell>
                            </Table.Row>
                            ) : (
                            <Table.Row>
                                <Table.HeaderCell textAlign="left">Player 1</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Player 2</Table.HeaderCell>
                            </Table.Row>
                        )}
                    </Table.Header>
                    <Table.Body>
                        {props.games.map((game, index) => (
                            props.many ? (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign="left">{game.player1}</Table.Cell>
                                    <Table.Cell textAlign="center">{game.player2}</Table.Cell>
                                    <Table.Cell textAlign="center">{game.player3}</Table.Cell>
                                    {game.four ? (
                                        <Table.Cell textAlign="right">{game.player4}</Table.Cell>
                                    ) : (
                                        <Table.Cell textAlign="right">No player 4</Table.Cell>
                                    )}
                                </Table.Row>
                                ) : (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign="left">{game.player1}</Table.Cell>
                                    <Table.Cell textAlign="right">{game.player2}</Table.Cell>
                                </Table.Row>
                            )
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default match;