import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions/actions';


class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    if(this.props.filter === "what") {
      const items = this.props.items.map((item, index) => (
        <li className={item.how} key={index} onClick={() => this.toggleHidden()}>
        {item.what}
        </li>
    ))
      return [items];
  } else if (this.props.filter === "who"){
      const items = this.props.items.map((item, index) => (
          <li className={item.how} key={index} onClick={() => this.toggleHidden()}>
          {item.who}
          </li>
      ))
      return [items];
  } else if (this.props.filter === "when"){
      const items = this.props.items.map((item, index) => (
          <li className={item.how} key={index} onClick={() => this.toggleHidden()}>
          {item.when}
          </li>
      ))
      return [items];
  }
}};

Item.defaultProps = {
  filter: "what"
}

const mapStateToProps = state => ({
    filter: state.filter,
    items: state.items
});

export default connect(mapStateToProps, {addItem})(Item);
