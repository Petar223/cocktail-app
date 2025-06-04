import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import { ButtonContainer } from '../../shared-components/ButtonContainer/ButtonContainer';
import useFetch from '../../hooks/useFetch';
import useLazyFetch from '../../hooks/useLazyFetch';
import getDrinks from '../../api/rest/drinks/getDrinks';
import deleteDrink from '../../api/rest/drinks/deleteDrink';
import Loading from '../../shared-components/Loading/Loading';
import styled from 'styled-components';
import {
  InfoContainer,
  InfoText,
  IconContainer,
} from '../../shared-components/InfoTooltip/infoTooltip';
import useUserRole from '../../hooks/useUserRole';
import { useNotification } from '../../context/NotificationContext';
import IconAdd from '../../shared-components/Icons/IconAdd';
import IconBack from '../../shared-components/Icons/IconBack';
import IconInfo from '../../shared-components/Icons/IconInfo';

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

function DrinkList() {
  const { type } = useParams();
  const [deleteId, setDeleteId] = useState(null);
  const userRole = useUserRole();
  const showNotification = useNotification();

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
      showNotification('Drink deleted successfully!', 5000, 'success');
    }
    if (deleteError) {
      showNotification(
        'Failed to delete drink. Please try again.',
        5000,
        'error'
      );
    }
  }, [isDeleting, deleteError, deleteId, showNotification, setData]);

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

  const handleFavorite = id => {
    console.log(`Favorite clicked for drink with id: ${id}`);
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
          {(userRole === 'admin' || userRole === 'general') && (
            <CustomButton>
              <IconAdd width={32} height={32} fill="currentColor" />
              Add New Drink{' '}
            </CustomButton>
          )}
        </ButtonContainer>
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
              handleEdit={handleEdit}
              handleFavorite={handleFavorite}
              isDeleting={deleteId === drink._id}
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
