import React from 'react';
import Unit from './Unit';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const army = ( props ) => {
    return (
        <div className="standard">
            <div className="title-line">
                <div className="player-name text-bold"><h3>Player Name: {props.name}</h3></div>
                <div className="points text-bold"><h3>Campaign Points: {props.points}</h3></div>
                <div className="army-name text-bold"><h3>Faction: {props.army}</h3></div>
            </div>
            <div className="army-list">
                <Table compact>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type/Number</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>XP</Table.HeaderCell>
                            <Table.HeaderCell>Wargear</Table.HeaderCell>
                            <Table.HeaderCell>Comments</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {props.list.map((unit, index) => (
                            <Unit key={index} number={unit.number} name={unit.name} xp={unit.xp} 
                            wargear={unit.wargear} comments={unit.comments}/>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default army;