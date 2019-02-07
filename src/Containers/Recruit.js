import React, { Component }  from 'react';
import '../App.css';
import Content from '../Components/Content';

class recruit extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold"><a href="http://google.com" rel="noopener noreferrer">Path to Glory Recruitment</a></h1>
          <Content title="How does Recruiting work?" 
          content="The recruitment tables can be found by clicking on the title of this page. It will take you to a downloadable 
          PDF.
          \n
          At the end of every game - regardless of the outcome of that game - you will have the opportunity to recruit
          some fresh units into your army. These recruits always come at 0 XP, but you do have free range on Wargear for them. But
          choose wisely as you will not have the chance to change that wargear, save for in game caches.
          \n
          To generate your new unit roll a D6 to decide which chart you are rolling on and then roll another D6 to decide which
          unit you are getting. Sometimes this will leave you with a choice of units, sometimes it will not. If you do not own a
          model to represent that unit and you are unwilling to purchase that unit (unpainted models are fine), then you may re-roll
          on the same table. Good luck!"/> 
        </div>
      </div>
    );
  }
}

export default recruit;
