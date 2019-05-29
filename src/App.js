import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name:'Setu', age: 27 },
      { name:'Vivek', age: 32 },
      { name:'Shanti', age: 65}
    ]
  });

  const [otherState, setOtherState] = useState('Otherstate');

  const switchNameHandler = () => {
    console.log('Was clicked!');
    setPersonState({
      persons: [
        { name:'Siddhartha', age: 27 },
        { name:'Vivek', age: 32 },
        { name:'Shanti', age: 66}
      ],
      otherState: personsState.oth
    });
  };
  
  return (
    <div className="App">
    <h1>Hi, I am a react App</h1>
    <p>This is really working!</p>
    <button onClick={switchNameHandler}>Switch Name</button>
    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobbies: Racing</Person>
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
    <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I am react App!!!'));
}

export default app;