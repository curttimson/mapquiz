import React, { Component } from 'react';
<<<<<<< HEAD
import './options.css';

class Options extends Component {

  constructor(props) {
    super();
    this.handleOptionChoice = this.handleOptionChoice.bind(this);
  }

  handleOptionChoice(e, option){
    e.preventDefault();
    console.log('Handle Option Choice', option);
  }

=======

class Options extends Component {
>>>>>>> master
  render(){

    let options = this.props.item.options.map(option => (
      <li key={option}>
<<<<<<< HEAD
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
=======
        {option}
      </li>
    ));

    return (
      <div className="Options">
        <ul>
          {options}
        </ul>
>>>>>>> master
      </div>
    )
  }
}

export default Options;