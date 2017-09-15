export default function rootReducer(
  currentState = {
    menuItems: [],
    itemsOrdered: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    case 'GET_MENU_ITEMS':
      return { ...currentState, menuItems: action.menuItems };
    case 'ADD_ORDER_ITEM':
      return { ...currentState, itemsOrdered: action.itemsOrdered };
    case 'SUBMIT_ORDER':
      return { ...currentState, customerInfo: action.customerInfo };
    default:
      return currentState;
  }
}
