import React, { Component }  from 'react';
import { Grid, Image } from 'semantic-ui-react';
import '../App.css';
import Content from '../Components/Content';

class armies extends Component {
  state = {
    players: this.props.players
  };

  render () {
    let rows = [];
    let counter = 0;
    let finishedLooping = false;
    for (let i = 0; i < 1; i++){
      if(finishedLooping) {
        break;
      } else {
        let rowID = `row${i}`;
        let cell = [];
        for (let idx = 0; idx < 3; idx++) {
          if (counter === (this.state.players.length)) {
            finishedLooping = true;
            break;
          } else {
            let cellID = `cell${i}-${idx}`;
            cell.push(
              <Grid.Column
                key={cellID}
                id={cellID}
              >
                {this.state.players[counter].name +
                  " (" + this.state.players[counter].army +
                ")"}
                <a href={"/assets/lists/" + this.state.players[counter].id + ".html"}>
                  <img
                    className="army-image"
                    alt="Army Art"
                    src={"/assets/army-art/" + this.state.players[counter].army + ".jpg"}
                  />
                </a>
              </Grid.Column>);
            counter++
          }
        }
        rows.push(<Grid.Row key={i} id={rowID}>{cell}</Grid.Row>)
      }
    }
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Dundee ITC Armies</h1>
          <Content content="Below is a Grid of the Army Lists for each of the
          players within the League. Select their Army Faction photograph to be
          redirected to the generated BattleScribe roster for that army. You
          will need to use your Browser controls to return to this website."/>
            <Grid columns={3} divided>
              {rows}
            </Grid>
        </div>
      </div>
    );
  }
}

export default armies;
