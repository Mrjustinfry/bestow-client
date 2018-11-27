import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Card from './card';
import Filter from './filter';

import {addItem} from '../actions/actions';


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
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
            <div className={item.how} key={item.cardId}>
              {!this.state.isHidden && <p onClick={this.toggleHidden} className="itemName">{item.what}</p>
               || this.state.isHidden && <p className="close" onClick={this.toggleHidden}>close</p>}
              {this.state.isHidden && <Card {...item} />}
            </div>
        ))
          return [items];
      } else if (this.props.filter === "who"){
          const items = this.props.items.map((item, index) => (
            <div className={item.how} key={item.cardId}>
              {!this.state.isHidden && <p onClick={this.toggleHidden} className="itemName">{item.who}</p>
               || this.state.isHidden && <p className="close" onClick={this.toggleHidden}>close</p>}
              {this.state.isHidden && <Card {...item} />}
            </div>
          ))
          return [items];
      } else if (this.props.filter === "when"){
          const items = this.props.items.map((item, index) => (
            <div className={item.how} key={item.cardId}>
              {!this.state.isHidden && <p onClick={this.toggleHidden} className="itemName">{item.when}</p>
               || this.state.isHidden && <p className="close" onClick={this.toggleHidden}>close</p>}
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
    searchItem: state.searchItem,
    filter: state.filter,
    items: state.items
});

export default connect(mapStateToProps, {addItem})(Item);
