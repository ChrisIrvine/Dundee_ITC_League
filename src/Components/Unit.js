import React from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const unit = ( props ) => {
    return (
        <Table.Row>
            <Table.Cell>{props.number}</Table.Cell>
            <Table.Cell>{props.name}</Table.Cell>   
            <Table.Cell>{props.xp}</Table.Cell>
            <Table.Cell>
                <ul>
                    {props.wargear.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Table.Cell>
            <Table.Cell>{props.comments}</Table.Cell>
        </Table.Row>
    )
}

export default unit;