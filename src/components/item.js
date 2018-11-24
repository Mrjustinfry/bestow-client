import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import Card from './card';

import {addItem} from '../actions/actions';


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }

   this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render() {
        if(this.props.filter === "what") {
          const items = this.props.items.map((item, index) => (
            <div>
            <li className={item.how} key={item.cardId} onClick={this.toggleHidden}>
            {!this.state.isHidden && <p>{item.what}</p> || this.state.isHidden && <p className="close">close</p>}
            </li>
            {this.state.isHidden && <Card {...item} />}
            </div>
        ))
          return [items];
      } else if (this.props.filter === "who"){
          const items = this.props.items.map((item, index) => (
            <div>
            <li className={item.how} key={item.cardId} onClick={this.toggleHidden}>
            {!this.state.isHidden && <p>{item.who}</p> || this.state.isHidden && <p className="close">close</p>}
            </li>
            {this.state.isHidden && <Card {...item} />}
            </div>
          ))
          return [items];
      } else if (this.props.filter === "when"){
          const items = this.props.items.map((item, index) => (
            <div>
            <li className={item.how} key={item.cardId} onClick={this.toggleHidden}>
            {!this.state.isHidden && <p>{item.when}</p> || this.state.isHidden && <p className="close">close</p>}
            </li>
            {this.state.isHidden && <Card {...item} />}
            </div>
          ))
          return [items];
    }
  }
};

Item.defaultProps = {
  filter: "what",
  isHidden: true
}

const mapStateToProps = state => ({
    filter: state.filter,
    items: state.items
});

export default connect(mapStateToProps, {addItem})(Item);
