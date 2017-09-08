import React from 'react';

export default function MenuItemComponent({ menuItems, onAddItem }) {
  if (!menuItems) return null;
  const imagePath = menuItems.imagePath;
  const name = menuItems.name || 'N/A';
  const price =
    menuItems.price && typeof menuItems.price === 'number'
      ? `$${menuItems.price.toFixed(2)}`
      : 'N/A';

  function handleClicking(event) {
    //console.log('menu item', menuItems);
    event.preventDefault();
    onAddItem(menuItems);
  }

  return (
    <div className="card MenuItemComponent">
      <div className="card-image">
        <img alt="pict" src={imagePath} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {name}
        </h5>
        <p>
          {price}
        </p>
      </div>
      <div className="card-action">
        <a href="." onClick={handleClicking}>
          ADD TO ORDER NOW
        </a>
      </div>
    </div>
  );
}
