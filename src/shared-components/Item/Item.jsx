// CocktailItem.js
import React from "react";
import { Link } from "react-router-dom";

const taglineStyle = {
  width: "15%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  textAlign: "left",
  lineHeight: "1.2",
  margin: "8px",
  background: "rgba(10, 10, 10, 0.5)",
  color: "white",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3px)",
  WebkitBackdropFilter: "blur(3px)",
  cursor: "pointer",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  border: "2px solid white",
};

const nameStyle = {
  textAlign: "center",
  marginTop: "8px",
};

const Item = ({ drinkType, handleClick, useLink, linkTo }) => {
  const content = (
    <>
      <img
        src={drinkType.imageUrl}
        alt={drinkType.name}
        className={imageStyle}
      />
      <h3 className={nameStyle}>{drinkType.name}</h3>
    </>
  );

  return useLink ? (
    <Link to={linkTo} key={drinkType._id} style={taglineStyle}>
      {content}
    </Link>
  ) : (
    <div
      key={drinkType._id}
      style={taglineStyle}
      onClick={() => handleClick(drinkType._id)}
    >
      {content}
    </div>
  );
};

export default Item;