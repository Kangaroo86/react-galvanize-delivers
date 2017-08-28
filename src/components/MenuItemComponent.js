import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  if (!item) return null;
  const imagePath = item.imagePath;
  const name = item.name || 'N/A';
  const price =
    item.price && typeof item.price == 'number'
      ? `$${item.price.toFixed(2)}`
      : 'N/A';

  function clicking(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    return onAddItem(item.name);
  }

  return (
    <div className="card MenuItemComponent">
      <div className="card-image">
        <img src={imagePath} />
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
        <a href="#" onClick={clicking}>
          ADD TO ORDER NOW
        </a>
      </div>
    </div>
  );
}
