import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import MenuComponent from './MenuComponent.js';
import OrderPage from '../src/components/OrderPage.js';
// import OrderFormComponent from './OrderFormComponent.js';
// import OrderTableComponent from './OrderTableComponent.js';

//this is for onSubmit for form handling
// export default function orderuder({onsubmit})
// function handleSubmit(event) {
//   event.preventDefault();
//   const $form = event.target;
//   const name = $form.name.value.trim();
//   const phone = $form.phone.value.trim();
//   const address = $form.address.value.trim();
//   onSubmit({ name, phone, address });
// }
// <form onSubmit={handleSubmit} />;

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
  //console.log(menuItems);
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

// ReactDOM.render(
//   <OrderPage
//     menuItems={menuItems}
//     orderItems={orderItems}
//     onAddItem={onAddItem}
//   />,
//   document.getElementById('root')
// );
