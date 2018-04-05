import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  const styleClasses = [];
  let buttonClasses = '';

  if (props.persons.length <= 2) {
    styleClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    styleClasses.push(classes.bold);
  }

  if (props.showPersons) {
    buttonClasses = classes.red;
  }

  return (
    <div className={classes.cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={styleClasses.join(' ')}>This is really working!</p>
      <button
        className={buttonClasses}
        onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
