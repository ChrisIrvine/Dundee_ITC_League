import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';

class rules extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Dundee ITC Rules</h1>
          <Content content="Waiting on Innes"/>
        </div>
      </div>
    );
  }
}

export default rules;
