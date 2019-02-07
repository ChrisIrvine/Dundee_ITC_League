import React, { Component }  from 'react';
import '../App.css';
import Army from '../Components/Army';

class armies extends Component {
  render () {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Path to Glory Armies</h1>
          {this.props.players.map((player, key) => (
            <Army name={player.name} points={player.points} list={player.units} army={player.army} key={key}/>
          ))}
        </div>
      </div>
    );
  }
}

export default armies;
