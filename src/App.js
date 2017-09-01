import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: null,
      orderItems: [],
      customerInfo: null
    };
  }

  componentDidMount(event) {
    event.preventDefault();
    console.log('here in did mount');
    // getMenuItems().then(data => {
    //   console.log(data);
    // });
  }

  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
      />
    );
  }

  _addItem = itemId => {
    /* ... */
  };

  _submitOrderForm = infoObj => {
    /* ... */
  };
  _closeOrderSuccessMessage = () => {
    /* ... */
  };
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import OrderPage from '../src/components/OrderPage.js';
//
// let menuItems = [
//   {
//     id: 101,
//     name: 'Some Item A',
//     price: 9.99,
//     imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 102,
//     name: 'Some Item B',
//     price: 8.99,
//     imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 103,
//     name: 'Some Item C',
//     price: 7.99,
//     imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 104,
//     name: 'Some Item D',
//     price: 6.99,
//     imagePath: '//via.placeholder.com/300x200'
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
