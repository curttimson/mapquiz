import React, { Component } from 'react';
import MapConfig from './config/MapConfig';

class Map extends Component {
  render() {

    let mapUrl = `https://www.google.com/maps/embed/v1/place?key=${MapConfig.API_KEY}&q=Space+Needle,Seattle+WA`;

    return (
      <div className="Map">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          src={mapUrl}
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Map;
