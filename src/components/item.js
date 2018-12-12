import React, {Component} from 'react';
import {connect} from 'react-redux';

import Landing from './landing';
import NoItems from './noItems';
import CardItem from './cardItem';

import {addItem, toggleHidden, toggleHiddenCollection, getItems, getUserItems, filterItems} from '../actions/actions';

import './list.css';
import './card.css'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: this.props.searchItem,
      items: ''
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
      return this.userItems();
    }

  toggleHidden = cardId => () => {
    this.props.toggleHidden(cardId)
  }

  toggleHiddenCollection = cardId => () => {
    this.props.toggleHiddenCollection(cardId)
  }

  render(props) {
    if (!localStorage.authToken) {
        return(<Landing />);
    } else if (this.props.items.length === 0) {
        return(<NoItems />);
    } else if (this.props.searchCollection.length !== 0) {
        return this.props.searchCollection.map((item, index) => (
          <CardItem
            toggleHidden={this.toggleHiddenCollection(item.cardId)}
            isHidden={item.hide}
            key={index}
            item={item}
            itemClassName={item.how}
            itemDefinition={item[this.props.filter].replace('T00:00:00.000Z', '')} />
        ))
    } else if (this.props.items.length > 0) {
        return this.props.items.map((item, index) => (
          <CardItem
            toggleHidden={this.toggleHidden(item.cardId)}
            isHidden={item.hide}
            key={index}
            item={item}
            itemClassName={item.how}
            itemDefinition={item[this.props.filter].replace('T00:00:00.000Z', '')} />
        ))
    }
}};

Item.defaultProps = {
  filter: "what",
  isHidden: true
}

const mapStateToProps = state => ({
    theUser: state.bestow.theUser,
    items: state.bestow.items,
    filter: state.bestow.filter,
    searchCollection: state.bestow.searchCollection
});

export default connect(mapStateToProps, {addItem, toggleHidden, toggleHiddenCollection, getItems, getUserItems})(Item);
