import React, { PureComponent } from 'react';

import Person from '../Persons/Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // Method included in PureComponent and checking differences between old and next props/state
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');

    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        position={index}
        click={this.props.clicked.bind(this, index)}
        changed={this.props.changed.bind(this, person.id)}
        key={person.id} />
    });
// Same as (props) => { return (...)}; due to ES6 arrow functions
  }
}

export default Persons;