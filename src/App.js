import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './api/getMenuItems.js';

export default class App extends Component {
  state = {
    menuItems: [],
    itemsOrdered: [],
    customerInfo: null
  };

  //FETCH JSON DATA
  componentDidMount() {
    getMenuItems().then(data => {
      //getMenuItems() in fetch file
      this.setState({ menuItems: data });
    });
  }

  //ADD ITEMS TO ODER COMPONENTS
  onAddItem = addedItem => {
    // console.log(
    //   'App.onAddItem, addedItem = ',
    //   addedItem,
    //   ' current state = ',
    //   this.state
    // );
    this.setState(prevState => {
      const menuItem = prevState.menuItems.find(
        item => item.id === addedItem.id
      );
      if (!menuItem) {
        //console.error('No found menu item matching item ID ', addedItem.id);
        return {};
      }
      const newItemsOrdered = [...prevState.itemsOrdered, menuItem];
      return { itemsOrdered: newItemsOrdered };
    });
  };

  //CUSTOMER INFOR
  submitOrderForm = ({ name, phone, address }) => {
    let infor = { name, phone, address };
    this.setState({ customerInfo: infor });
  };

  closeOrderSuccessMessage = () => {
    this.setState({ orderItems: [] });
  };

  //SUCCESS MESSAGES
  // closerOrderSuccessMessage = () => {
  //   console.log(this.state.customerInfo);
  //   let error = {''};
  //   this.setState({customerInfo: {null} )
  // };

  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        itemsOrdered={this.state.itemsOrdered}
        customerInfo={this.state.customerInfo}
        onAddItem={this.onAddItem}
        submitOrderForm={this.submitOrderForm}
        closeOrderSuccessMessage={this.closeOrderSuccessMessage}
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
