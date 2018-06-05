import React, { Component } from 'react';
import MapConfig from './config/MapConfig';

class Map extends Component {
  render() {

    let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location}
                    &zoom=6&size=400x400&maptype=roadmap
                    &markers=color:red|${this.props.location}&key=${MapConfig.API_KEY}&style=element:labels|visibility:off`;

    return (
      <div className="Map">
        <img src={mapUrl} />
      </div>
    );
  }
}

export default Map;
