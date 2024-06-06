import React, { useState } from 'react';
import ItemTaglineLink from './components/ItemTaglineLink';
import ItemImage from './components/ItemImage';
import ItemName from './components/ItemName';
import ItemTagline from './components/ItemTagline';

const Item = ({ drinkType, handleClick, useLink, linkTo }) => {
  const [imgError, setImgError] = useState(false);

  const placeholderImage = '/images/no-image.jpg';
  const imageUrl = drinkType.imageUrl ? drinkType.imageUrl : placeholderImage;

  const handleError = () => {
    setImgError(true);
  };

  const content = (
    <>
      <ItemImage
        src={imgError ? placeholderImage : imageUrl}
        alt={drinkType.name}
        onError={handleError}
      />
      <ItemName>{drinkType.name}</ItemName>
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
