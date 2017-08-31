//index.js



//App.js


/////////FOR Container//////////////////


//short way of creating state, not official with ES6
class App extends Component {
  state {
    menuItems:null,
    orderItems:[],
    customerInfo:null
    // menuItems:data.menuItems.slice(0);
    // orderItems:[];
    // customerInfor: null;
    // onAdditem={this._addItem}
  };
}

render() {
  return (
    <OrderPage
      menuItems={this.state.menuItems}
      orderItems={this.state.orderItems}
      customerInfo={this.state.customerInfo}
      onAdditem={this.state._addItem}
      onSubmitForm={this.state._submitOrderFOrm}
      onCloseOrderSuccessMessage={this.state._onCloseOrderSuccessMessage}
    />
  )
}

componentDidMount() {
  getMenuItems().then(menuItems => { //.then is a promise
    this.setState({
      menuItems
    });
  });
}

_addItem = itemId => {
this.setState(prevState => {
  //old approach//
  // const newOderItems = prevState.roderItems.slice(0);
  // newOderItems.push(prevState.menuItems.find(item => item.id === itemId));

  //using spread operator//
  return {
    orderItems: [
      ...prevState.orderitems,
      prevState.menuItems.find(item => item.id === itemId)
    ]
  };
});
};

_submitOrderFOrm = ({name, phone, address}) => {
  placeOrder({name,phone, address}, this state.orderItems)
  .then(result => {
    this.setSate({
      customerInfor: {name,phone, address}
    });
  })
  .catch(error => {
    this.setSate({
      errorMessage: 'SOMETHING WENT WRONG'
    });
  });
};

_closerOrderSuccessMessage = () => {

}
