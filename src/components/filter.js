import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions/actions';

import './filter.css';

export class Filter extends Component {
constructor(props) {
  super(props);

this.setFilter = this.setFilter.bind(this);
}

setFilter(type) {
   this.props.setFilter(type);
}



  render() {
      return (
        <div className="filters">
        <ul className="filterList">
          <li className="filter"><img src="who.png" value="who" alt="who" className="icons"
          onClick={() => this.setFilter("who")} /></li>
          <li className="filter"><img src="what.png" value="what" alt="what" className="icons"
          onClick={() => this.setFilter("what")} /></li>
          <li className="filter"><img src="when.png" value="when" alt="when" className="icons"
          onClick={() => this.setFilter("when")} /></li>
        </ul>
        </div>
      );
  }
}



const mapStateToProps = state => ({
    filter: state.filter
});

export default connect(mapStateToProps, {setFilter})(Filter);
