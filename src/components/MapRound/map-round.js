import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/map-display';
import Options from '../Options/options';
import MapService from '../../services/MapService';

class MapRound extends Component {

  constructor(props) {
    super();
    this.handleOptionSelected = this.handleOptionSelected.bind(this);
  }

  handleOptionSelected(optionSelected){
    console.log('map round handle option selected', optionSelected);
    if(MapService.isCorrectOption(this.props.item, optionSelected)){
      console.log('Map Round - Correct option!');
    }
    this.props.onRoundComplete();
  }

  render(){
    return (
      <div className="MapRound">
        <MapDisplay item={this.props.item} />
        <Options item={this.props.item} onOptionSelected={this.handleOptionSelected} />
      </div>
    )
  }
}

export default MapRound;