import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Rules from './Containers/Rules';
import Armies from './Containers/Armies';
import Leaderboard from './Containers/Leaderboard';
import Rounds from './Containers/Rounds';

class App extends Component {
  state = {
    players : [
      {id: "CI-BA", name: "Chris", points: 0, army: "Blood Angels"},
      {id: "JM-EC", name: "John", points: 0, army: "Chaos Space Marines"}
    ]
  };

  render() {
    return (
      <div className="Background">
        <BrowserRouter basename="/ptg-dundee/">
          <div className="App">
            <ul className="navbar background-dim">
                <li><NavLink className="border" exact to="/" >Home</NavLink></li>
                <li><NavLink className="border" to="/rules" >Rules</NavLink></li>
                <li><NavLink className="border" to="/armies" >Armies</NavLink></li>
                <li><NavLink className="border" to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink to="/rounds">Rounds</NavLink></li>
            </ul>
            <div className="content-section">
              <Route exact path="/" component={Home} />
              <Route path="/rules" component={Rules} />
              <Route path="/armies" render={( props ) => <Armies {...props} players={this.state.players}/>} />
              <Route path="/leaderboard" render={( props ) => <Leaderboard {...props} players={this.state.players} />} />
              <Route path="/rounds" render={( props ) => <Rounds {...props} players={this.state.players}/>} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
