import React, { Component } from 'react';
import './App.css';
import MapRound from './components/MapRound/map-round';
import MapData from './data/mapdata';

class App extends Component {

  constructor(props) {
    super();
    this.handleRoundComplete = this.handleRoundComplete.bind(this);
  }

  componentWillMount(){
    this.setState({
      mapItem: MapData[0]
    });
  }

  handleRoundComplete(){
    console.log('app.js = handleroundcomplete');
    this.setState({
      mapItem: MapData[1]
    });
  }

  render() {

    console.log('Render!');

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mapquiz</h1>
        </header>
        <MapRound item={this.state.mapItem} onRoundComplete={this.handleRoundComplete} />
      </div>
    );
  }
}

export default App;
