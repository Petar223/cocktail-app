import React, { useState, useEffect } from 'react';
import ItemTaglineLink from './components/ItemTaglineLink';
import ItemImage from './components/ItemImage';
import ItemName from './components/ItemName';
import ItemTagline from './components/ItemTagline';
import { DeleteButton } from './components/DeleteButton';
import { EditButton } from './components/EditButton';
import { Spinner } from '../Spinner/Spinner';
import styled from 'styled-components';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const ItemContainer = styled.div`
  position: relative;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = ({
  drinkType,
  handleClick,
  useLink,
  linkTo,
  handleDelete,
  handleEdit,
  isDeleting,
  handleFavorite,
}) => {
  const [imgError, setImgError] = useState(false);
  const [loading, setLoading] = useState(true);

  const placeholderImage = '/images/no-image.jpg';
  const imageUrl = drinkType.imageUrl ? drinkType.imageUrl : placeholderImage;

  const handleError = () => {
    setImgError(true);
  };

  const handleLoad = () => {
    setLoading(false);
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

  const handleFavoriteClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    handleFavorite(id);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = handleLoad;
    img.onerror = handleError;
  }, [imageUrl]);

  if (loading) {
    return null;
  }

  const content = (
    <ItemContainer>
      <ItemImage
        src={imgError ? placeholderImage : imageUrl}
        alt={drinkType.name}
        onError={handleError}
      />
      <DeleteButton onClick={event => handleDeleteClick(event, drinkType._id)}>
        {isDeleting ? <Spinner /> : 'Delete'}
      </DeleteButton>
      <EditButton onClick={event => handleEditClick(event, drinkType._id)}>
        Edit
      </EditButton>

      <NameWrapper>
        <ItemName>{drinkType.name}</ItemName>
        <FavoriteButton
          onClick={event => handleFavoriteClick(event, drinkType._id)}
        />
      </NameWrapper>
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
