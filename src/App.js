import React, { Component } from 'react';
import './App.css';
import MapRound from './components/MapRound/map-round';
import MapData from './data/mapdata';

class App extends Component {
  render() {

    let mapItem = MapData[0];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mapquiz</h1>
        </header>
        <MapRound item={mapItem} />
      </div>
    );
  }
}

export default App;
