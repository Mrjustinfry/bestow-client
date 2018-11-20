import React, { Component } from 'react';
import {connect} from 'react-redux';

import ListItem from './listItem';

import './list.css';

class List extends Component {
  constructor(props) {
      super(props);

      this.state = {
          editing: false,
      };
  }

  setEditing(editing) {
      this.setState({
          editing
      });
  }


  render() {
    return (
        <div className="listContainer">
            <ul className="items">
                <ListItem />
            </ul>
        </div>
    );
}
}

List.defaultProps = {
  who: 'example',
  what: 'something',
  when: '##-##-##',
  how: 'Bestowed'
};

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(List);
