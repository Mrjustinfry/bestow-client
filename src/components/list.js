import React from 'react';

import Item from './item';

import './list.css';

export default function List() {
    return (
      <div className="listContainer">
          <ul className="items">
              <Item />
          </ul>
      </div>
    )
}
