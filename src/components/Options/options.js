import React, { Component } from 'react';
import './options.css';


class Options extends Component {

  constructor(props) {
    super();
    this.handleOptionChoice = this.handleOptionChoice.bind(this);
  }

  handleOptionChoice(e, option){
    e.preventDefault();
    console.log('Handle Option Choice', option);
    this.props.onOptionSelected(option);
  }

  render(){

    let options = this.props.item.options.map(option => (
      <li key={option}>
        <button onClick={(e) => this.handleOptionChoice(e, option)}>{option}</button>
      </li>
    ));

    

    return (
      <div className="Options">
        <div className="inner">
          <ul>
            {options}
          </ul>
        </div>
      </div>
    )
  }
}

export default Options;