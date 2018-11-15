import React, { Component } from 'react';

import './list.css';

class List extends Component {
  constructor(props) {
      super(props);

      this.state = {
          editing: false,
          items: [
              {
                who: 'karen',
                what: 'phone charger',
                when: '11-14-18',
                how: 'Bestowed'
              },
              {
                who: 'John',
                what: 'Harry Potter',
                when: '10-31-18',
                how: 'Bestowed'
              },
              {
                who: 'Jane',
                what: 'Bundt pan',
                when: '09-12-18',
                how: 'Borrowed'
              },
              {
                who: 'Phillip',
                what: 'Pulp Fiction',
                when: '03-03-18',
                how: 'Bestowed'
              },
              {
                who: 'karen',
                what: 'phone charger',
                when: '11-14-18',
                how: 'Bestowed'
              },
              {
                who: 'John',
                what: 'Harry Potter',
                when: '10-31-18',
                how: 'Bestowed'
              },
              {
                who: 'Jane',
                what: 'Bundt pan',
                when: '09-12-18',
                how: 'Borrowed'
              },
              {
                who: 'Phillip',
                what: 'Pulp Fiction',
                when: '03-03-18',
                how: 'Bestowed'
              },
              {
                who: 'karen',
                what: 'phone charger',
                when: '11-14-18',
                how: 'Bestowed'
              },
              {
                who: 'John',
                what: 'Harry Potter',
                when: '10-31-18',
                how: 'Bestowed'
              },
              {
                who: 'Jane',
                what: 'Bundt pan',
                when: '09-12-18',
                how: 'Borrowed'
              },
              {
                who: 'Phillip',
                what: 'Pulp Fiction',
                when: '03-03-18',
                how: 'Bestowed'
              },
              {
                who: 'karen',
                what: 'phone charger',
                when: '11-14-18',
                how: 'Bestowed'
              },
              {
                who: 'John',
                what: 'Harry Potter',
                when: '10-31-18',
                how: 'Bestowed'
              },
              {
                who: 'Jane',
                what: 'Bundt pan',
                when: '09-12-18',
                how: 'Borrowed'
              },
              {
                who: 'Phillip',
                what: 'Pulp Fiction',
                when: '03-03-18',
                how: 'Bestowed'
              }
          ]
      };
  }

  setEditing(editing) {
      this.setState({
          editing
      });
  }

  render() {
    if(!this.state.editing) {
    const items = this.state.items.map((item, index) => (
        <li className={item.how} key={index} onClick={() => this.setEditing(true)}>
          {item.what}
        </li>
    ));
    return (
        <div className="listContainer">
            <ul className="items">
                {items}
            </ul>
        </div>
    );
  }
  return (
    <div className="itemCard">
      <p className="close" onClick={() => this.setEditing(false)}>close</p>
      <h1>item</h1>
      <p className="whoItem"><img src="/who.png" alt="who" className="whoImg" />  WHO</p>
      <p className="whenItem"><img src="/when.png" alt="when" className="whenImg" />  WHEN</p>
      <div className="btns">
      <button className="editBtn"></button>
      <button className="trashBtn"></button>
      </div>
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

export default List;
