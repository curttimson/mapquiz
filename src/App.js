import React, { Component } from 'react';
import './App.css';
import Map from './Map';

class App extends Component {
  render() {

    let mapLocation = '51.2267133,-2.6730257';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mapquiz</h1>
        </header>
        <Map location={mapLocation} />
      </div>
    );
  }
}

export default App;
