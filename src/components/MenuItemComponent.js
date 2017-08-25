import React from 'react';

export default function MenuItemComponent({ item }) {
  if (!item) return null;
  const imagePath = item.imagePath;
  const name = item.name || 'N/A';
  const price =
    item.price && typeof item.price == 'number'
      ? `$${item.price.toFixed(2)}`
      : 'N/A';

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
        <a href="#">ADD TO ORDER</a>
      </div>
    </div>
  );
}
