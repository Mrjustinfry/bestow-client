import React, {Component} from 'react';
import {connect} from 'react-redux';

import NoItems from './noItems';
import CardItem from './cardItem';

import {addItem, toggleHidden} from '../actions/actions';

import './list.css';
import './card.css'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
    }
  }

  toggleHidden = cardId => () => {
    this.props.toggleHidden(cardId)
  }

  render() {
      if(this.props.items.length > 0) {
        return this.props.items.map((item, index) => (
          <CardItem
            toggleHidden={this.toggleHidden(item.cardId)}
            isHidden={item.hide}
            key={index}
            item={item}
            itemClassName={item.how}
            itemDefinition={item[this.props.filter]} />
        ))
      } else {
        return (
          <NoItems />
        )
      }
}};

Item.defaultProps = {
  filter: "what",
  isHidden: true
}

const mapStateToProps = state => ({
    searchItem: state.searchItem,
    items: state.bestow.items,
    filter: state.bestow.filter
});

export default connect(mapStateToProps, {addItem, toggleHidden})(Item);
