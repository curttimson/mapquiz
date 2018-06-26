import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MapRound from './components/MapRound/map-round';
import Complete from './components/Complete/complete';
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

    if (state.currentRoundIndex+1>=MapData.length){
      alert(`You scored: ${state.correctAnswers}/${MapData.length}!`);
    }
    else{
      state.currentRoundIndex++;
    }

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
        <Router>
          <Switch>
              <Route exact path='/' render={() => (
                <MapRound item={mapItem} onRoundComplete={this.handleRoundComplete} />
              )}/>
              <Route path='/complete' component={Complete}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
