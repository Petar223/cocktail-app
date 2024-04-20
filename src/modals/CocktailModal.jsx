import React from "react";
import "./CocktailModal.css";

function CocktailModal({ cocktail, drinks, onClose }) {
  const getDrinkName = (id) => {
    const drink = drinks.find((drink) => drink.id === parseInt(id));
    return drink ? drink.name : "Unknown drink";
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{cocktail.name}</h2>
        <img
          src={cocktail.imageUrl}
          alt={cocktail.name}
          style={{ width: "100%" }}
        />
        <p>{cocktail.desc}</p>
        <ul>
          {cocktail.ingredients.map((ingredient) => (
            <li key={ingredient.drinkId}>
              {getDrinkName(ingredient.drinkId)}: {ingredient.quantity}{" "}
              {ingredient.unit}
            </li>
          ))}
        </ul>
        <a href={cocktail.videoUrl} target="_blank" rel="noopener noreferrer">
          Watch how to make it.
        </a>
      </div>
    </div>
  );
}

export default CocktailModal;
