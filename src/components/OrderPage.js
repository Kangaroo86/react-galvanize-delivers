import React from 'react';

export default function Orderpage({ onAddItem }) {
  return (
    <OrderPage
      menuItems={menuItems}
      orderItems={orderItems}
      customerInfo={customerInfo}
    />
  );
}
