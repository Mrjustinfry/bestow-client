import React, { Component } from 'react';

import AddButton from './addButton';
import List from './list';
import Card from './card';
import AddItem from './addItem';
import SignupForm from './signupForm';

import './bestow.css';

class Bestow extends Component {
  render() {
      return (
          <div className="bestow">
          <List />
          <AddButton />
          </div>
      );
  }
}

export default Bestow;
          //<header><img src="/bestowI.png" alt="icon" className="icon" /></header>
          /*<SignupForm />
          <AddItem />
          <Card />
          <List />*/
