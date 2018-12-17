import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setFilter, getUserItems, filterItems} from '../actions/actions';

import Options from './options';

import './filter.css';

export class Filter extends Component {
constructor(props) {
  super(props);

  this.state = {
    searchItem: '',
    visible: false
  }
this.setFilter = this.setFilter.bind(this);
this.toggleHidden = this.toggleHidden.bind(this);
}

setFilter(type) {
   this.props.setFilter(type);
}


onChange(searchItem) {
  this.setState({searchItem})
    return this.props.filterItems(searchItem.toLowerCase())
}

toggleHidden () {
  this.setState({
    visible: !this.state.visible
  })
}

  render() {
      return (
        <div className="filters">
          <ul className="filterList">
            <li className="filter">
              <img
                src="/who.png"
                value="who"
                role="button"
                alt="who"
                className="icons"
                onClick={() => this.setFilter("who")} /></li>
            <li className="filter">
              <img
                src="/what.png"
                value="what"
                role="button"
                alt="what"
                className="icons"
                onClick={() => this.setFilter("what")} /></li>
            <li className="filter">
              <img
                src="/when.png"
                value="when"
                role="button"
                alt="when"
                className="icons"
                onClick={() => this.setFilter("when")} /></li>
          </ul>
            <form onSubmit={e => e.preventDefault()} className="search">
                <label htmlFor="search" aria-label="search">
                  <input
                    type="search"
                    id="search"
                    name="search"
                    className="searchInput"
                    onChange={e => this.onChange(e.target.value)} /></label>
              </form>
          <img
            src="/menu.png"
            alt="menu"
            role="button"
            className="optionsBtn"
            onClick={this.toggleHidden} />
              {this.state.visible && <Options />}
        </div>
      );
  }
}

const mapStateToProps = state => ({
    theUser: state.bestow.theUser,
    items: state.bestow.items,
    searchItem: state.searchItem,
    filter: state.filter,
    visible: state.visible
});

export default connect(mapStateToProps, {setFilter, getUserItems, filterItems})(Filter);
