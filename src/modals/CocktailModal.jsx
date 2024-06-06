import React from 'react';

function CocktailModal({ cocktail, drinks, onClose }) {
  const getDrinkName = id => {
    const drink = drinks.find(drink => drink._id === id);
    return drink ? drink.name : 'Unknown drink';
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '32px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
  };

  const imageStyle = {
    width: '45%',
    height: 'auto',
    // border: "0.1px solid white",
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const liStyle = {
    padding: '5px 0',
    borderBottom: '1px solid #ccc',
  };

  const lastLiStyle = {
    padding: '5px 0',
    borderBottom: 'none',
  };

  const linkStyle = {
    color: '#1e90ff',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <h2>{cocktail.name}</h2>
        <img src={cocktail.imageUrl} alt={cocktail.name} style={imageStyle} />
        <p>{cocktail.desc}</p>
        <ul style={ulStyle}>
          {cocktail.ingredients.map((ingredient, index) => (
            <li
              key={ingredient.drinkId}
              style={
                index === cocktail.ingredients.length - 1
                  ? lastLiStyle
                  : liStyle
              }
            >
              {getDrinkName(ingredient.drinkId)}: {ingredient.quantity}{' '}
              {ingredient.unit}
            </li>
          ))}
        </ul>
        <a
          href={cocktail.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Watch how to make it.
        </a>
      </div>
    </div>
  );
}

export default CocktailModal;
