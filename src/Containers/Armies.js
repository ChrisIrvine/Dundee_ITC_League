import React, { Component }  from 'react';
import '../App.css';

class armies extends Component {
  render () {
    return (
      <div>
        <div className="App">
          <h1 className="text-bold">Dundee ITC Armies</h1>
          Grid of player names with the official army art for the main faction. When clicked on take the user to the Army component which as a PDF viewer.
        </div>
      </div>
    );
  }
}

export default armies;
