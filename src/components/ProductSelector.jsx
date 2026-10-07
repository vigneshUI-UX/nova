import React from "react";

export default function ProductSelector({
  products,
  activeIndex,
  onSelect,
  onBuyClick,
}) {
  return (
    <div className="controls-column">
      <div className="dots-wrapper">
        {products.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => onSelect(idx)}
            className={`dot-btn ${activeIndex === idx ? "active" : ""}`}
            aria-label={`Select ${p.flavor}`}
          />
        ))}
      </div>
      <button onClick={onBuyClick} className="buy-btn">
        Buy Now
      </button>
    </div>
  );
}