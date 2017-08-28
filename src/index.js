import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MenuComponent from './MenuComponent.js';
import OrderPage from '../src/components/MenuComponent.js';
// import OrderFormComponent from './OrderFormComponent.js';
// import OrderTableComponent from './OrderTableComponent.js';

let menuItems = [
  {
    id: 101,
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 102,
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 103,
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 104,
    name: 'Some Item D',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

let orderItems = [];

function onAddItem(itemId) {
  console.log(itemId);
}

ReactDOM.render(
  <OrderPage
    menuItems={menuItems}
    orderItems={orderItems}
    onAddItem={onAddItem}
  />,
  document.getElementById('root')
);
