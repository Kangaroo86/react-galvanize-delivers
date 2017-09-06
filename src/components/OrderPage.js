import React from 'react';
import OrderPageLayout from './OrderPageLayout.js';
import MenuComponent from './MenuComponent.js';
import OrderTableComponent from './OrderTableComponent.js';
import OrderFormComponent from './OrderFormComponent.js';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent.js';

export default function Orderpage(props) {
  //console.log('Orderpage props: ', props);
  return (
    <OrderPageLayout>
      {/* {console.log(props)} */}
      <MenuComponent menuItems={props.menuItems} onAddItem={props.onAddItem} />
      <OrderTableComponent itemsOrdered={props.itemsOrdered} />
      {!props.customerInfo
        ? <OrderFormComponent submitOrderForm={props.submitOrderForm} />
        : <OrderSuccessMessageComponent
            customerInfo={props.closerOrderSuccessMessage}
          />}
    </OrderPageLayout>
  );
}
