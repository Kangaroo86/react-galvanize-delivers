import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));

//import OrderPage from '../src/components/OrderPage.js';
// import './img/banh_mi.jpg';

// let menuItems = [
//   {
//     id: 101,
//     name: 'Banh Mi',
//     price: 9.99,
//     imagePath: '/public/img/banh_mi.jpg'
//   },
//   {
//     id: 102,
//     name: 'Burger',
//     price: 8.99,
//     imagePath: '/public/img/burger.jpg'
//   },
//   {
//     id: 103,
//     name: 'Ice Cream',
//     price: 7.99,
//     imagePath: '/public/img/ice_cream.jpg'
//   },
//   {
//     id: 104,
//     name: 'Pizza',
//     price: 6.99,
//     imagePath: '/public/img/pizza.jpg'
//   }
// ];
//
// //add items to menue order
// let itemsOrdered = [];
// function onAddItem(menuItems) {
//   //console.log(menuItems);
//   if (menuItems) {
//     itemsOrdered.push(menuItems);
//   }
//   render();
// }
//
// //customerInfo
// let customerInfo = null;
// function onSubmitOrderForm(infoObj) {
//   customerInfo = infoObj;
//   render();
// }
//
// //Render Order
// function render() {
//   ReactDOM.render(
//     <OrderPage
//       menuItems={menuItems}
//       onAddItem={onAddItem}
//       itemsOrdered={itemsOrdered}
//       onSubmitOrderForm={onSubmitOrderForm}
//       customerInfo={customerInfo}
//     />,
//     document.getElementById('root')
//   );
// }
// render();
