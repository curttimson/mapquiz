import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <div className="Map">
        <iframe
          width="100%"
          height="450"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBCiteXn1FyqNNcXdQi1xI_UCF7ntT3j2s&amp;q=Space+Needle,Seattle+WA" allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default Map;
