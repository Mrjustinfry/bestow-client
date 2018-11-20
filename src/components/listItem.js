import React, { Component } from 'react';
import {connect} from 'react-redux';

import Card from './card';

import {addItem, setFilter} from '../actions/actions';

import './list.css';

class ListItem extends Component {
constructor(props) {
  super(props);
  this.props.dispatch(setFilter());
  this.state = {
    isHidden: true,
  }
  this.toggleHidden = this.toggleHidden.bind(this);
}


addItem(items) {
    this.props.dispatch(addItem(items));
}

  setEditing(editing) {
      this.setState({
          editing
      });
}

  toggleHidden () {
    this.setState({
      isHidden: !this.props.isHidden
    })
  }


    render() {
      console.log(this.props.filter);
      let  displayItems = () => {
             if (this.props.filter === "what"){
               return this.props.items.what;
             } else if (this.props.filter === "who") {
               return this.props.items.who;
             } else if (this.props.filter === "when") {
               return this.props.items.when;
             }
         }
         console.log(displayItems);
      const items = this.props.items.map((item, index) => (
        <div className="wrapper">
          <li className={item.how} key={item.id} onClick={() => this.toggleHidden()}>
            {item.what}
            {!this.state.isHidden && <Card />}
          </li>
          </div>
      ))
    return [items]
  };
}

const mapStateToProps = state => ({
    items: state.items,
    filter: state.filter
});

export default connect(mapStateToProps)(ListItem);
