import React, { useState } from 'react';
import CustomButton from '../../../shared-components/CustomButton/CustomButton';
import TypeTaglineLarger from './TypeTaglineLarger/TypeTaglineLarger';
import TypeTagline from './TypeTagline/TypeTagline';
import TypeButtonContainer from './TypeButtonContainer/TypeButtonContainer';
import TypeImage from './TypeImage/TypeImage';
import { IconExplore } from '../../../shared-components/Icons/Icons';
import { Spinner } from '../../../shared-components/Spinner/Spinner';

const TypeTaglineComponent = ({
  title,
  imageSrc,
  imageAlt,
  buttonLink,
  buttonText,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImgError(true);
    setIsLoading(false);
  };

  return (
    <TypeTagline>
      <div>
        <TypeTaglineLarger>{title}</TypeTaglineLarger>
        <div>
          {isLoading && <Spinner />}
          {!imgError ? (
            <TypeImage
              src={imageSrc}
              alt={imageAlt}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: isLoading ? 'none' : 'block' }}
            />
          ) : (
            <p>Image failed to load</p>
          )}
        </div>
        <TypeButtonContainer>
          <CustomButton to={buttonLink}>
            {buttonText}{' '}
            <IconExplore width={26} height={26} fill="currentColor" />
          </CustomButton>
        </TypeButtonContainer>
      </div>
    </TypeTagline>
  );
};

export default TypeTaglineComponent;
