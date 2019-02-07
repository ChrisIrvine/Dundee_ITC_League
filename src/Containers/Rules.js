import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';

class rules extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold"><a href="http://google.com" rel="noopener noreferrer">Path to Glory Rules</a></h1>
          <Content title="On this page..." content="This is a quick reference guide to the rules of the Campaign, we won't be 
          including the standard rules for 40k, as we assume that the players know them. Instead we will focus on the Campaign 
          specific rules. For the full rules document please click on the title to this page above. There you will find a 
          downloadable PDF."/>
          <Content title="Starting your Army" content="..."/>
          <Content title="Gathering Forces" content="..."/>
          <Content title="Upgrading your Soldiers (or bugs)"content="..."/>
          <Content title="Battle Damage" content="..."/>
          <Content title="In Game" content="..."/>
          <Content title="Missions" content="..."/>
          <Content title="Achieving Victory" content="..."/>
          <Content title="The Apocalpyse" content="..."/>
          <Content title="Balancing" content="..."/>
          <Content title="Extreme Balancing" content="..."/>
        </div>
      </div>
    );
  }
}

export default rules;
