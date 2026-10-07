import React from "react";

export default function Header({ flavor }) {
  return (
    <header className="header">
      <h1 className="brand-title">NovaBlend</h1>
      <div className="flavor-badge">
        FLAVOR <strong>{flavor}</strong>
      </div>
    </header>
  );
}