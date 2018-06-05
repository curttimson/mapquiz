import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/map-display';
import Options from '../Options/options';

class MapRound extends Component {
  render(){
    return (
      <div className="MapRound">
        <MapDisplay item={this.props.item} />
        <Options item={this.props.item} />
      </div>
    )
  }
}

export default MapRound;