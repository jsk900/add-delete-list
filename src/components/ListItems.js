import React from 'react';

import { Item } from './Item';

export const ListItems = props => {
  return props.itemList.map(item => (
    <Item key={item.uuid} item={item} handleDelete={props.handleDelete} />
  ));
};
