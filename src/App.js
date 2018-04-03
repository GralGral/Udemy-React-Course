import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Person from './Person/Person'

import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 27 },
      { id: 3, name: 'Steph', age: 26 }
    ],
    showPersons : false
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
    this.setState({
      showPersons: !doesShow
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
    let persons = null;
    let buttonClasses = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={this.nameChangedHandler.bind(this, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      buttonClasses = classes.red;
    }

    const styleClasses = [];
    if (this.state.persons.length <= 2) {
      styleClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      styleClasses.push(classes.bold);
    }

    return (
        <div className={classes.app}>
          <h1>Hi, I'm a React App</h1>
          <p className={styleClasses.join(' ')}>This is really working!</p>
          <button
            className={buttonClasses}
            onClick={this.togglePersonHandler}>
            Toggle persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
