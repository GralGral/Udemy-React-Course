import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Wrap from '../../../hoc/Wrap';
import withClass2 from '../../../hoc/withClass2';

// External global style
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillunmount');
  }

  render() {
    console.log('[Person.js] Inside render');

    return (
      <Wrap>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          // ref only available in stateful component and use it with care (not styling or display use)
          ref={(elem) => this.inputElement = elem}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Wrap>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
};

export default withClass2(Person, classes.Person);
