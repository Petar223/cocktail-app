import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import { ButtonContainer } from '../../shared-components/ButtonContainer/ButtonContainer';
import {
  IconAdd,
  IconBack,
  IconInfo,
} from '../../shared-components/Icons/Icons';
import useFetch from '../../hooks/useFetch';
import useLazyFetch from '../../hooks/useLazyFetch';
import getDrinks from '../../api/rest/drinks/getDrinks';
import deleteDrink from '../../api/rest/drinks/deleteDrink';
import Loading from '../../shared-components/Loading/Loading';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h3`
  margin-right: 10px;
`;

const InfoText = styled.p`
  display: flex;
  font-size: 14px;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0s linear 0.3s;
  position: absolute;
  top: 100%;
  left: 0;
  white-space: wrap;
  background-color: ${({ theme }) => theme.grey[800]};
  color: ${({ theme }) => theme.grey[100]};
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.blackOverlay};
  z-index: 1000;
  width: 350px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover ${InfoText} {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }
`;

const IconContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function DrinkList() {
  const { type } = useParams();
  const [deleteId, setDeleteId] = useState(null);

  const {
    data: drinks,
    loading: loadingDrinks,
    error: drinksError,
    setData,
  } = useFetch(getDrinks);

  const [runDeleteDrink, { loading: isDeleting, error: deleteError }] =
    useLazyFetch(deleteDrink);

  useEffect(() => {
    if (!isDeleting && !deleteError && deleteId !== null) {
      setData(prevData => prevData.filter(drink => drink._id !== deleteId));
      setDeleteId(null);
    }
  }, [isDeleting, deleteError, deleteId, setData]);

  const filteredDrinks = drinks?.filter(
    drink =>
      (type === 'alcoholic' && drink.alcoholic) ||
      (type === 'non-alcoholic' && !drink.alcoholic)
  );

  const handleDelete = id => {
    setDeleteId(id);
    runDeleteDrink(id);
  };

  const handleEdit = id => {
    console.log(`Edit item with id: ${id}`);
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
        <HeaderContainer>
          <Title>Drinks</Title>
          <InfoContainer>
            <IconContainer>
              <IconInfo width={24} height={24} fill="currentColor" />
            </IconContainer>
            <InfoText>
              Please select a drink from the list below that you like to use as
              the base for your perfect cocktail creation!
            </InfoText>
          </InfoContainer>
        </HeaderContainer>

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
      </HeaderContent>

      {isDeleting && <div> Deleting</div>}
      {deleteError && <div>Error Delete: {deleteError.message}</div>}

      <ItemContainer>
        {filteredDrinks.length > 0 ? (
          filteredDrinks?.map(drink => (
            <Item
              key={drink._id}
              drinkType={drink}
              useLink={true}
              linkTo={`/type/${type}/drink/${drink._id}`}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isDeleting={isDeleting}
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
