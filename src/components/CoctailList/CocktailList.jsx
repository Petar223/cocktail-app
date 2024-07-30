import { useParams } from 'react-router-dom';
import CocktailModal from '../../modals/CocktailModal';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import React from 'react';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import ModalBackground from '../../modals/components/ModalBackground/ModalBackground';
import getDrinks from '../../api/rest/drinks/getDrinks';
import getCocktails from '../../api/rest/drinks/getCoctails';
import getCocktailById from '../../api/rest/drinks/getCocktailById';
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
  const isAlcoholic = type === 'alcoholic';

  const {
    data: cocktails,
    loading: loadingCocktails,
    error: cocktailsError,
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

  const handleClick = cocktailId => {
    runFetchCocktailById(cocktailId);
  };

  const handleClose = () => {
    resetData();
  };

  const handleDelete = id => {
    console.log(`Deleting item with id: ${id}`);
  };

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

  const filteredCocktails = !type
    ? cocktails
    : cocktails?.filter(
        cocktail =>
          cocktail.alcoholic === isAlcoholic &&
          cocktail.ingredients.some(ingredient => {
            return ingredient.drinkId === drinkId;
          })
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
            />
          ))
        ) : (
          <NoItemsFound message="No cocktails found with this ingredient." />
        )}
      </ItemContainer>
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
