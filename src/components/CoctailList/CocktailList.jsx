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
import getCocktails from '../../api/rest/drinks/getCoctails';
import getCocktailById from '../../api/rest/drinks/getCocktailById';
import deleteCocktail from '../../api/rest/drinks/deleteCocktail';
import useFetch from '../../hooks/useFetch';
import useLazyFetch from '../../hooks/useLazyFetch';
import { IconAdd, IconBack } from '../../shared-components/Icons/Icons';
import { ButtonContainer } from '../../shared-components/ButtonContainer/ButtonContainer';
import Loading from '../../shared-components/Loading/Loading';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

function CocktailList() {
  const { drinkId, type } = useParams();
  const [deleteId, setDeleteId] = useState(null);
  const isAlcoholic = type === 'alcoholic';

  const {
    data: cocktails,
    loading: loadingCocktails,
    error: cocktailsError,
    setData,
  } = useFetch(getCocktails);

  const {
    data: drinks,
    loading: loadingDrinks,
    error: drinksError,
  } = useFetch(getDrinks);

  const [
    runFetchCocktailById,
    {
      data: cocktail,
      loading: loadingCocktail,
      error: cocktailError,
      resetData,
    },
  ] = useLazyFetch(getCocktailById);

  const [runDeleteCocktail, { loading: isDeleting, error: deleteError }] =
    useLazyFetch(deleteCocktail);

  useEffect(() => {
    if (!isDeleting && !deleteError && deleteId !== null) {
      setData(prevData => prevData.filter(drink => drink._id !== deleteId));
      setDeleteId(null);
    }
  }, [isDeleting, deleteError, deleteId, setData]);

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

  const filteredCocktails = !type
    ? cocktails
    : cocktails?.filter(
        cocktail =>
          cocktail.alcoholic === isAlcoholic &&
          cocktail.ingredients.some(ingredient => {
            return ingredient._id === drinkId;
          })
      );

  if (loadingCocktails || loadingDrinks)
    return (
      <div>
        <Loading />
      </div>
    );
  if (cocktailsError || drinksError)
    return (
      <NoItemsFound message="Something went wrong please try again later." />
    );

  return (
    <Container>
      <HeaderContent>
        <div>
          <h3>Cocktails</h3>
        </div>
        <div>
          <ButtonContainer>
            <CustomButton to={!type ? `/browse` : `/type/${type}`}>
              <IconBack width={32} height={32} fill="currentColor" />{' '}
              {!type ? 'Back ot Type' : 'Back to Drinks'}
            </CustomButton>
            <CustomButton>
              <IconAdd width={32} height={32} fill="currentColor" />
              Add New Coctail{' '}
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
              handleFavoriteClick={e => console.log(e.target.value)}
            />
          ))
        ) : (
          <NoItemsFound message="No cocktails found with this ingredient." />
        )}
      </ItemContainer>

      {isDeleting && <div> Deleting</div>}
      {deleteError && <div>Error Delete: {deleteError.message}</div>}

      {loadingCocktail && <div>Loading cocktail details...</div>}
      {cocktailError && (
        <div>Error fetching cocktail details: {cocktailError.message}</div>
      )}
      {cocktail && (
        <ModalBackground>
          <CocktailModal
            cocktail={cocktail}
            drinks={drinks}
            onClose={handleClose}
          />
        </ModalBackground>
      )}
    </Container>
  );
}

export default CocktailList;
