import React from 'react';
import OrderFormComponent from './OrderFormComponent.js';
import OrderTableComponent from './OrderTableComponent.js';
import MenuComponent from './MenuComponent.js';

export default function Orderpage(props) {
  return (
    <div>
      <MenuComponent menuItems={props.menuItems} />
      <OrderTableComponent itemsOrdered={props.orderItems} />
      <OrderFormComponent input={props.customerInfo} />
    </div>
  );
}
