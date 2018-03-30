import React, { Component } from 'react';

import Person from './Person/Person'

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 27 },
      { name: 'Steph', age: 26 }
    ]
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
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 27 },
        { name: 'Steph', age: 26 }
      ]
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Adrien')}>
          Switch name
        </button>
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
    );
  }
}

export default App;
