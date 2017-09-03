import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from '../src/components/OrderPage.js';

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

//add items to menue order
let itemsOrdered = [];
function onAddItem(menuItems) {
  if (menuItems) {
    itemsOrdered.push(menuItems);
  }
  render();
}

//customerInfo
let customerInfo = null;
function onSubmitOrderForm(infoObj) {
  customerInfo = infoObj;
  render();
}

//Render Order
function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={menuItems}
      onAddItem={onAddItem}
      itemsOrdered={itemsOrdered}
      onSubmitOrderForm={onSubmitOrderForm}
      customerInfo={customerInfo}
    />,
    document.getElementById('root')
  );
}
render();
