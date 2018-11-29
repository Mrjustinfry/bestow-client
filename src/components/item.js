import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardItem from './cardItem';

import {addItem} from '../actions/actions';


class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      hideItem: this.props.items.map(item =>
        ({
          cardId: item.cardId,
          hide: true
        }))
    }
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden (cardId) {
    const hideItems = this.state.hideItem.map(item => ({
      cardId: item.cardId,
      hide: item.cardId !== cardId
    }))
    this.setState({
      hideItem: hideItems
    })
  }

  isHidden = (cardId) => this.state.hideItem.find(item => item.cardId === cardId).hide

  componentDidUpdate(prevProps, filter) {
      if (!prevProps.filter && this.props.filter) {
          filter: this.props.filter;
      }
  }

  render() {
    return this.props.items.map((item, index) => (
      <CardItem
        toggleHidden={this.toggleHidden}
        isHidden={this.isHidden(item.cardId)}
        key={index}
        item={item}
        itemClassName={item.how}
        itemDefinition={item[this.props.filter]} />
    ))
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

export default connect(mapStateToProps, {addItem})(Item);
