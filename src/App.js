import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/map';
import MapData from './mapdata';

class App extends Component {
  render() {

    let mapItem = MapData[0];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mapquiz</h1>
        </header>
        <Map item={mapItem} />
      </div>
    );
  }
}

export default App;
