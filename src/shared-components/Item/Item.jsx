import React, { useState, useEffect } from 'react';
import ItemTaglineLink from './components/ItemTaglineLink';
import ItemImage from './components/ItemImage';
import ItemName from './components/ItemName';
import ItemTagline from './components/ItemTagline';
import styled from 'styled-components';

const ItemContainer = styled.div`
  position: relative;
`;

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.redAccentSharp};
  color: white;
  border: none;
  border-radius: 0;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  position: absolute;
  top: 8px;
  right: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.redAccentSharp};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.redAccentSharp};
    transform: translateY(0);
  }
`;

const EditButton = styled.button`
  background-color: ${({ theme }) => theme.blueLight[500]};
  color: white;
  border: none;
  border-radius: 0;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  position: absolute;
  top: 8px;
  left: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.blueLight[600]};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.blueLight[700]};
    transform: translateY(0);
  }
`;

const Item = ({
  drinkType,
  handleClick,
  useLink,
  linkTo,
  handleDelete,
  handleEdit,
}) => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true); // Dodaj loading stanje

  const placeholderImage = '/images/no-image.jpg';
  const imageUrl = drinkType.imageUrl ? drinkType.imageUrl : placeholderImage;

  const handleError = () => {
    setImgError(true);
  };

  const handleLoad = () => {
    setLoading(false); // Kada se slika učita, postavi loading na false
  };

  const handleDeleteClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    handleDelete(id);
  };

  const handleEditClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    handleEdit(id);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = handleLoad; // Kada se slika učita, pozovi handleLoad
    img.onerror = handleError; // Ako dođe do greške pri učitavanju, pozovi handleError
  }, [imageUrl]);

  if (loading) {
    return null; // Dok se slika učitava, ne renderuj ništa
  }

  const content = (
    <ItemContainer>
      <ItemImage
        src={imgError ? placeholderImage : imageUrl}
        alt={drinkType.name}
        onError={handleError}
      />
      <DeleteButton onClick={event => handleDeleteClick(event, drinkType._id)}>
        Delete
      </DeleteButton>
      <EditButton onClick={event => handleEditClick(event, drinkType._id)}>
        Edit
      </EditButton>
      <ItemName>{drinkType.name}</ItemName>
    </ItemContainer>
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
