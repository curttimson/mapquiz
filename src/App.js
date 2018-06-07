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
      currentRoundIndex: 0,
      correctAnswers: 0
    });
  }

  handleRoundComplete(roundCorrect){
    console.log('app.js = handleroundcomplete');
    
    let state = this.state;

    if(roundCorrect){
      state.correctAnswers++;
    }

    state.currentRoundIndex++;

    console.log('state', state);
    this.setState(state);
  }

  render() {

    console.log('Render!');

    let mapItem = MapData[this.state.currentRoundIndex];

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mapquiz</h1>
        </header>
        <MapRound item={mapItem} onRoundComplete={this.handleRoundComplete} />
      </div>
    );
  }
}

export default App;
