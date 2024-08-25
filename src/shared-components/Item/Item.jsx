import React, { useState, useEffect } from 'react';
import ItemTaglineLink from './components/ItemTaglineLink';
import ItemImage from './components/ItemImage';
import ItemName from './components/ItemName';
import ItemTagline from './components/ItemTagline';
import { DeleteButton } from './components/DeleteButton';
import { EditButton } from './components/EditButton';

import styled from 'styled-components';

const ItemContainer = styled.div`
  position: relative;
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
