import React from 'react';
import TypeContainer from './components/TypeContainer/TypeContainer';
import TypeTaglineComponent from './components/TypeTaglineComponents';

function TypeSelection() {
  return (
    <TypeContainer>
      <TypeTaglineComponent
        title="Alcoholic Cocktails"
        imageSrc="/images/alcoholic.jpg"
        imageAlt="Alcoholic Cocktail"
        buttonLink="/type/alcoholic"
        buttonText="Explore"
      />
      <TypeTaglineComponent
        title="Non-Alcoholic Cocktails"
        imageSrc="/images/none-alcoholic.jpg"
        imageAlt="Non-Alcoholic Cocktail"
        buttonLink="/type/non-alcoholic"
        buttonText="Explore"
      />
      <TypeTaglineComponent
        title="All Cocktails"
        imageSrc="/images/all-cocktails.jpg"
        imageAlt="All Cocktails"
        buttonLink="/type/all"
        buttonText="Explore"
      />
    </TypeContainer>
  );
}

export default TypeSelection;
