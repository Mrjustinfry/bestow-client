import React, { Component } from 'react';

import './list.css';

class List extends Component {
  constructor(props) {
      super(props);

      this.state = {
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

  render() {
    const items = this.state.items.map((item, index) => (
        <li className={item.how} key={index}>
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
}

List.defaultProps = {
  who: 'example',
  what: 'something',
  when: '##-##-##',
  how: 'Bestowed'
};

export default List;
