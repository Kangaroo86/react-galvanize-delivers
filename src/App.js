import React, { Component } from 'react';
import OrderPage from './components/OrderPage.js';
import getMenuItems from './api/getMenuItems.js';
//import rootReducer from './redux/reducers/rootReducer.js';

//import getMenuItemsProcess from './redux/thunks/getMenuItemsProcess.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [],
      itemsOrdered: [],
      customerInfo: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

  //FETCH JSON DATA
  componentDidMount() {
    getMenuItems().then(menuItems => {
      //getMenuItems() is in fetch file
      this.setState({ menuItems: menuItems });
      //this.setState({ menuItems: data });
      //this.props.store.dispatch({ type: 'GET_MENU_ITEMS', menuItems });
    });
  }

  // componentDidMount() {
  //   this.props.store.dispatch(getMenuItemsProcess());
  // }

  //ADD ITEMS TO ODER COMPONENTS
  onAddItem = addedItem => {
    this.setState(prevState => {
      const menuItem = prevState.menuItems.find(
        item => item.id === addedItem.id
      );
      if (!menuItem) {
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

  //CLOSE ORDER
  closeOrderSuccessMessage = () => {
    this.setState({ customerInfo: null });
  };

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
}
