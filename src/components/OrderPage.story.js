import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent.js';
import OrderFormComponent from './OrderFormComponent.js'; //customerInfor
import OrderTableComponent from './OrderTableComponent.js';

storiesOf('OrderPageLayout', module).add('OrderPageLayout path', () =>
  <OrderPage
    menuItems={menuItems}
    orderItems={orderItems}
    customerInfo={customerInfo}
  />
);
