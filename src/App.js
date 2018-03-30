import React, { Component } from 'react';

import Person from './Person/Person'

import './App.css';

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
    // Inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={this.nameChangedHandler.bind(this, person.id)}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle persons
        </button>
        {persons}
        {/*{this.state.showPersons &&
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Doudou')}
              changed={this.nameChangedHandler}>
              My hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>
        }*/}
        {/*{this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Doudou')}
              changed={this.nameChangedHandler}>
              My hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div>
          : null
        }*/}
      </div>
    );
  }
}

export default App;
