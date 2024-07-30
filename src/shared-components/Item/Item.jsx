import React, { useState } from 'react';
import ItemTaglineLink from './components/ItemTaglineLink';
import ItemImage from './components/ItemImage';
import ItemName from './components/ItemName';
import ItemTagline from './components/ItemTagline';
import styled from 'styled-components';

const DeleteButton = styled.button`
  background-color: ${({ theme }) =>
    theme.redAccent[500]}; /* Koristi tematske boje */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Dodata senka */
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.redAccent[600]}; /* Tamnija crvena */
    transform: translateY(-2px); /* Malo podignuto na hover */
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.redAccent[700]}; /* Još tamnija crvena */
    transform: translateY(0); /* Vraćanje na originalnu poziciju */
  }
`;

const Item = ({ drinkType, handleClick, useLink, linkTo, handleDelete }) => {
  const [imgError, setImgError] = useState(false);

  const placeholderImage = '/images/no-image.jpg';
  const imageUrl = drinkType.imageUrl ? drinkType.imageUrl : placeholderImage;

  const handleError = () => {
    setImgError(true);
  };

  const handleDeleteClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    handleDelete(id);
  };

  const content = (
    <>
      <ItemImage
        src={imgError ? placeholderImage : imageUrl}
        alt={drinkType.name}
        onError={handleError}
      />
      <ItemName>{drinkType.name}</ItemName>
      <DeleteButton onClick={event => handleDeleteClick(event, drinkType._id)}>
        Delete
      </DeleteButton>
    </>
  );

  return useLink ? (
    <ItemTaglineLink to={linkTo} key={drinkType._id}>
      {content}
    </ItemTaglineLink>
  ) : (
    <ItemTagline key={drinkType._id} onClick={() => handleClick(drinkType._id)}>
      {content}
    </ItemTagline>
  );
};

export default Item;
