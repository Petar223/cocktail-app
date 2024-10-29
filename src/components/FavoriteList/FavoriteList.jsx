import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CocktailModal from '../../modals/CocktailDetailsModal';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import ModalBackground from '../../modals/components/ModalBackground/ModalBackground';
import getDrinks from '../../api/rest/drinks/getDrinks';
import getFavorites from '../../api/rest/drinks/getFavoritesCocktails';
import getCocktailById from '../../api/rest/drinks/getCocktailById';
import deleteCocktail from '../../api/rest/drinks/deleteCocktail';
import useFetch from '../../hooks/useFetch';
import useLazyFetch from '../../hooks/useLazyFetch';
import { IconBack } from '../../shared-components/Icons/Icons';
import { ButtonContainer } from '../../shared-components/ButtonContainer/ButtonContainer';
import Loading from '../../shared-components/Loading/Loading';
import styled from 'styled-components';
import { useNotification } from '../../context/NotificationContext';

const Container = styled.div`
  width: 100%;
`;

function FavoriteList() {
  const { drinkId } = useParams();
  const [deleteId, setDeleteId] = useState(null);
  const showNotification = useNotification();

  const {
    data: favorites,
    loading: loadingfavorites,
    error: favoritesError,
    setData,
  } = useFetch(getFavorites);

  const {
    data: drinks,
    loading: loadingDrinks,
    error: drinksError,
  } = useFetch(getDrinks);

  const [
    runFetchCocktailById,
    { data: cocktail, loading: loadingCocktail, resetData },
  ] = useLazyFetch(getCocktailById);

  const [runDeleteCocktail, { loading: isDeleting, error: deleteError }] =
    useLazyFetch(deleteCocktail);

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

  const handleClick = cocktailId => {
    runFetchCocktailById(cocktailId);
  };

  const handleClose = () => {
    resetData();
  };

  const handleDelete = id => {
    setDeleteId(id);
    runDeleteCocktail(id);
  };

  const handleEdit = id => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleFavorite = id => {
    console.log(`Favorite clicked for drink with id: ${id}`);
  };

  const filteredCocktails = favorites?.cocktails || [];

  if (loadingfavorites || loadingDrinks)
    return (
      <div>
        <Loading />
      </div>
    );
  if (favoritesError || drinksError)
    return (
      <NoItemsFound message="Something went wrong please try again later." />
    );

  return (
    <Container>
      <HeaderContent>
        <div>
          <h3>Fovorite Cocktails</h3>
        </div>
        <div>
          <ButtonContainer>
            <CustomButton to={'/'}>
              <IconBack width={32} height={32} fill="currentColor" />{' '}
              {'Back ot Home'}
            </CustomButton>
          </ButtonContainer>
        </div>
      </HeaderContent>

      <ItemContainer>
        {filteredCocktails.length > 0 ? (
          filteredCocktails?.map(cocktail => (
            <Item
              key={cocktail._id}
              drinkType={cocktail}
              handleClick={handleClick}
              useLink={false}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleFavorite={handleFavorite}
              isDeleting={deleteId === cocktail._id}
            />
          ))
        ) : (
          <NoItemsFound message="No favorite cocktails found. Explore and add your favorites!" />
        )}
      </ItemContainer>
      {cocktail || loadingCocktail ? (
        <ModalBackground>
          <CocktailModal
            cocktail={cocktail}
            drinks={drinks}
            onClose={handleClose}
            isLoading={loadingCocktail}
          />
        </ModalBackground>
      ) : null}
    </Container>
  );
}

export default FavoriteList;
