import React from "react";

export default function CardsLoader() {
  return Array(8)
    .fill(null)
    .map((val) => (
      <div role="status" className="card bg-gray-600 animate-pulse"></div>
    ));
}
