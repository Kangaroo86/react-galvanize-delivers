import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';

let data = {
  menuComponent: [
    {
      id: 101,
      name: 'Some Item A',
      price: 9.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 102,
      name: 'Some Item B',
      price: 8.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 103,
      name: 'Some Item C',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 104,
      name: 'Some Item D',
      price: 6.99,
      imagePath: '//via.placeholder.com/300x200'
    }
  ],
  orderTableComponent: [
    {
      id: 101,
      name: 'Some Item A',
      price: 9.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 102,
      name: 'Some Item B',
      price: 8.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 103,
      name: 'Some Item C',
      price: 7.99,
      imagePath: '//via.placeholder.com/300x200'
    },
    {
      id: 104,
      name: 'Some Item D',
      price: 6.99,
      imagePath: '//via.placeholder.com/300x200'
    }
  ],
  orderFormComponent: [
    {
      name: 'Nestor Toro',
      phone: '(650) 533-8676',
      address: '123 Main Street, Oakland, CA'
    }
  ]
};

ReactDOM.render(
  <OrderPage
    menuItems={data.menuComponent}
    orderItems={data.orderTableComponent}
    customerInfo={data.orderFormComponent}
  />,
  document.getElementById('root')
);
