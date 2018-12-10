import React, {Component} from 'react';
import {connect} from 'react-redux';

import Landing from './landing';
import NoItems from './noItems';
import CardItem from './cardItem';

import {addItem, toggleHidden, getItems, getUserItems} from '../actions/actions';

import './list.css';
import './card.css'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
        return this.userItems();
    }
}

  userItems(props) {
    if(this.props.theUser) {
      return this.props.getUserItems(this.props.theUser.userId);
    } else if (!this.props.theUser) {
        return this.props.getUserItems(localStorage.localUserId);
    }
}

  componentDidMount() {
      this.props.getItems();
      this.userItems();
    }

  toggleHidden = cardId => () => {
    this.props.toggleHidden(cardId)
  }

  render(props) {
    if (!localStorage.authToken) {
      return (<Landing />);
    }

      if (this.props.items.length > 0) {
        return this.props.items.map((item, index) => (
          <CardItem
            toggleHidden={this.toggleHidden(item.cardId)}
            isHidden={item.hide}
            key={index}
            item={item}
            itemClassName={item.how}
            itemDefinition={item[this.props.filter]} />
        ))
      }
        return (
          <NoItems />
        )
}};

Item.defaultProps = {
  filter: "what",
  isHidden: true
}

const mapStateToProps = state => ({
    theUser: state.bestow.theUser,
    items: state.bestow.items,
    filter: state.bestow.filter
});

export default connect(mapStateToProps, {addItem, toggleHidden, getItems, getUserItems})(Item);


/* else if(this.props.searchItem) {
  const listItems = this.props.items.filter(item =>
    item.what.toLowerCase().includes(
        this.props.searchItem.toLowerCase()
  ));
  return this.props.items.map((item, index) => (
    <CardItem
      toggleHidden={this.toggleHidden(item.cardId)}
      isHidden={item.hide}
      key={index}
      item={listItems}
      itemClassName={item.how}
      itemDefinition={item[this.props.filter]} />
    ))
}*/
