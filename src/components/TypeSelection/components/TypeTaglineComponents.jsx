// TypeTaglineComponent.js
import React from 'react';
import CustomButton from '../../../shared-components/CustomButton/CustomButton';
import TypeTaglineLarger from './TypeTaglineLarger/TypeTaglineLarger';
import TypeTagline from './TypeTagline/TypeTagline';
import TypeButtonContainer from './TypeButtonContainer/TypeButtonContainer';
import TypeImage from './TypeImage/TypeImage';

const TypeTaglineComponent = ({
  title,
  imageSrc,
  imageAlt,
  buttonLink,
  buttonText,
}) => {
  return (
    <TypeTagline>
      <div>
        <TypeTaglineLarger>{title}</TypeTaglineLarger>
        <div>
          <TypeImage src={imageSrc} alt={imageAlt} />
        </div>
        <TypeButtonContainer>
          <CustomButton to={buttonLink}>{buttonText}</CustomButton>
        </TypeButtonContainer>
      </div>
    </TypeTagline>
  );
};

export default TypeTaglineComponent;
