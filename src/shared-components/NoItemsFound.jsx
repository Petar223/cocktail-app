// NoItemsFound.js
import React from "react";
import "./NoItemsFound.css";

function NoItemsFound({ message }) {
  return (
    <div className="no-items-found">
      <p>{message}</p>
    </div>
  );
}

export default NoItemsFound;
