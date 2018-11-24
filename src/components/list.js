import React, { Component } from 'react';

import Item from './item';

import './list.css';

export default function List(props) {
    return (
      <div className="listContainer">
          <ul className="items">
              <Item
              item={props.items}
              />
          </ul>
      </div>
    )
}
