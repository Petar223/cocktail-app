import React from 'react';
import NoItemContainer from './components/NoItemContainer';
import NoItemIconWrapper from './components/NoItemIconWrapper';
import NoItemMessage from './components/NoItemMessage';
import IconDrink from '../../shared-components/Icons/IconDrink';

function NoItemsFound({ message }) {
  return (
    <NoItemContainer>
      <NoItemIconWrapper>
        <IconDrink width={100} height={100} fill="currentColor" />
      </NoItemIconWrapper>
      <NoItemMessage>{message}</NoItemMessage>
    </NoItemContainer>
  );
}

export default NoItemsFound;
