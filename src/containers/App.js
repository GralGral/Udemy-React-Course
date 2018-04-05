import React, { PureComponent } from 'react';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';

import classes from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // Method included in PureComponent and checking differences between old and next props/state
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 27 },
      { id: 3, name: 'Steph', age: 26 }
    ],
    showPersons : false,
    toggleClickCounter: 0
  };

  // Suffix with Handler in order to indicate this function is a event handler
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DO NOT DO THIS !! this.state.persons[0].name = 'Adrien';
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Manu', age: 27 },
        { name: 'Steph', age: 26 }
      ]
    })
  };

  // Event object is automatically passed by React
  nameChangedHandler = (id, event) => {
    // Get the index of the selected person in the persons array in state
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    // Get the person object by the index in the array ans create a copy
    const person = {...this.state.persons[personIndex]};

    // Change the person name by the input value
    person.name = event.target.value;

    // Create a copy of the persons array in state and change the object at the personIndex index
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // Set the new state
    this.setState({
      persons: persons
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    // Use an arrow function with prevState and props variables
    // when you need to define new state based on the previous one
    // because setState function runs asynchronously
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClickCounter: prevState.toggleClickCounter + 1
      }
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Use slice() to create a copy of the array instead of using it directly by reference (same as Angular)
    const persons = [...this.state.persons]; // Another way to manage this, the modern way (ES6)
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  };

  render() {
    console.log('[App.js] Inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <WithClass classes={classes.app}>
        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {persons}
      </WithClass>
    );
  }
}

export default App;
