import React from "react";

export default function CardsLoader() {
  return Array(8)
    .fill(null)
    .map((_, index) => (
      <div role="status" key={index} className="card bg-gray-600 animate-pulse"></div>
    ));
}
