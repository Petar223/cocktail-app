import React from 'react';
import Modal from './components/Modal';
import ModalContent from './components/ModalContent';
import ModalIngredientItem from './components/ModalIngredientItem';
import ModalIngredientList from './components/ModalIngredientList';
import ModalImage from './components/ModalImage';
import ModalLink from './components/ModalLink';

function CocktailModal({ cocktail, drinks, onClose }) {
  const getDrinkName = id => {
    const drink = drinks.find(drink => drink._id === id);
    return drink ? drink.name : 'Unknown drink';
  };

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>{cocktail.name}</h2>
        <ModalImage src={cocktail.imageUrl} alt={cocktail.name} />
        <p>{cocktail.desc}</p>
        <ModalIngredientList>
          {cocktail.ingredients.map((ingredient, index) => (
            <ModalIngredientItem
              key={ingredient._id}
              $isLast={index === cocktail.ingredients.length - 1}
            >
              {getDrinkName(ingredient._id)}: {ingredient.quantity}{' '}
              {ingredient.unit}
            </ModalIngredientItem>
          ))}
        </ModalIngredientList>
        <ModalLink
          href={cocktail.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch how to make it.
        </ModalLink>
      </ModalContent>
    </Modal>
  );
}

export default CocktailModal;
