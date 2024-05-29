// NoItemsFound.js
import React from "react";
import { IconDrink } from "../Icons/Icons";

function NoItemsFound({ message }) {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "300px",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    fontSize: "1.2em",
    margin: "auto",
    width: "500px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  };

  const iconStyle = {
    marginBottom: "20px",
  };

  const messageStyle = {
    margin: "0"
  }

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>
        <IconDrink width={100} height={100} fill="currentColor" />
      </div>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}

export default NoItemsFound;
