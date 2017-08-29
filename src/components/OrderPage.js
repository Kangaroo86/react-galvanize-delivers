import React from 'react';
import OrderPageLayout from './OrderPageLayout.js';
import MenuComponent from './MenuComponent.js';
import OrderTableComponent from './OrderTableComponent.js';
import OrderFormComponent from './OrderFormComponent.js';

export default function Orderpage(props) {
  return (
    <OrderPageLayout>
      <MenuComponent menuItems={props.menuItems} onAddItem={props.onAddItem} />
      <OrderTableComponent itemsOrdered={props.itemsOrdered} />
      <OrderFormComponent />
    </OrderPageLayout>
  );
}
