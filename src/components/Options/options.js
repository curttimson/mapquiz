import React, { Component } from 'react';

class Options extends Component {
  render(){

    let options = this.props.item.options.map(option => (
      <li>
        {option}
      </li>
    ));

    return (
      <div className="Options">
        <ul>
          {options}
        </ul>
      </div>
    )
  }
}

export default Options;