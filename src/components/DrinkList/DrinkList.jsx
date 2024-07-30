import React from 'react';
import { useParams } from 'react-router-dom';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import { ButtonContainer } from '../../shared-components/ButtonContainer/ButtonContainer';
import { IconAdd, IconBack } from '../../shared-components/Icons/Icons';
import useFetch from '../../hooks/useFetch';
import getDrinks from '../../api/rest/drinks/getDrinks';
import Loading from '../../shared-components/Loading/Loading';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

function DrinkList() {
  const { type } = useParams();

  const {
    data: drinks,
    loading: loadingDrinks,
    error: drinksError,
  } = useFetch(getDrinks);

  const filteredDrinks = drinks?.filter(
    drink =>
      (type === 'alcoholic' && drink.alcoholic) ||
      (type === 'non-alcoholic' && !drink.alcoholic)
  );

  const handleDelete = id => {
    console.log(`Deleting item with id: ${id}`);
  };

  if (loadingDrinks)
    return (
      <div>
        <Loading />
      </div>
    );

  if (drinksError)
    return (
      <NoItemsFound message="Something went wrong please try again later." />
    );

  return (
    <Container>
      <HeaderContent>
        <div>
          <h3>Drinks</h3>
        </div>
        <div>
          <ButtonContainer>
            <CustomButton to={`/browse`}>
              <IconBack width={32} height={32} fill="currentColor" />
              Back to type
            </CustomButton>
            <CustomButton>
              <IconAdd width={32} height={32} fill="currentColor" />
              Add New Drink{' '}
            </CustomButton>
          </ButtonContainer>
        </div>
      </HeaderContent>
      <ItemContainer>
        {filteredDrinks.length > 0 ? (
          filteredDrinks?.map(drink => (
            <Item
              key={drink._id}
              drinkType={drink}
              useLink={true}
              linkTo={`/type/${type}/drink/${drink._id}`}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <NoItemsFound message="No drinks found of this type."></NoItemsFound>
        )}
      </ItemContainer>
    </Container>
  );
}

export default DrinkList;
