import React, { Component } from 'react';
import MapConfig from '../../config/MapConfig';
import './Map.css';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

  render() {

    let mapItem = this.props.item;

    console.log(mapItem);

    let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${mapItem.lat},${mapItem.long}
                    &zoom=6&size=${this.state.width}x400&maptype=roadmap
                    &markers=color:red|${mapItem.lat},${mapItem.long}&key=${MapConfig.API_KEY}&style=element:labels|visibility:off`;
    
    return (
      <div className="Map">
        <img src={mapUrl} />
      </div>
    );
  }
}

export default Map;
