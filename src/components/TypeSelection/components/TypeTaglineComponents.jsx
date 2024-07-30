// TypeTaglineComponent.js
import React from 'react';
import CustomButton from '../../../shared-components/CustomButton/CustomButton';
import TypeTaglineLarger from './TypeTaglineLarger/TypeTaglineLarger';
import TypeTagline from './TypeTagline/TypeTagline';
import TypeButtonContainer from './TypeButtonContainer/TypeButtonContainer';
import TypeImage from './TypeImage/TypeImage';
import { IconExplore } from '../../../shared-components/Icons/Icons';

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
