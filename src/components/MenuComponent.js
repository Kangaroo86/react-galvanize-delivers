import React from 'react';
import MenuItemComponent from './MenuItemComponent.js';

export default function MenuComponent({ menuItems }) {
  return (
    <div className="MenuComponent">
      {menuItems.map(item => <MenuItemComponent key={item.id} item={item} />)};
    </div>
  );
}
