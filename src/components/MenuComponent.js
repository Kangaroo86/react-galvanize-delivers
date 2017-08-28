import React from 'react';
import MenuItemComponent from './MenuItemComponent.js';

export default function MenuComponent({ menuItems }) {
  //function onAddItem(itemId) {}
  return (
    <div className="MenuComponent">
      {menuItems.map(item => <MenuItemComponent key={item.id} item={item} />)};
    </div>
  );
}
