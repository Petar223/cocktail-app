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
      data: fetchedCocktail,
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

  if (loadingCocktails || loadingDrinks) return <div>Loading...</div>;
  if (cocktailsError || drinksError) return <div>Error fetching data</div>;

  const filteredCocktails = cocktails?.filter(
    cocktail =>
      cocktail.alcoholic === isAlcoholic &&
      cocktail.ingredients.some(ingredient => {
        return ingredient.drinkId === drinkId;
      })
  );

  return (
    <div>
      <HeaderContent>
        <div>
          <h3>Cocktails</h3>
        </div>
        <div>
          <CustomButton to={`/type/${type}`}>Back to Drinks</CustomButton>
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
      {fetchedCocktail && (
        <ModalBackground>
          <CocktailModal
            cocktail={fetchedCocktail}
            drinks={drinks}
            onClose={handleClose}
          />
        </ModalBackground>
      )}
    </div>
  );
}

export default CocktailList;
