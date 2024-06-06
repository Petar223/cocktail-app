import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CocktailModal from '../../modals/CocktailModal';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import React from 'react';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';
import ModalBackground from '../../modals/components/ModalBackground/ModalBackground';

function CocktailList() {
  const { drinkId, type } = useParams();
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktails, setCocktails] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const isAlcoholic = type === 'alcoholic';

  useEffect(() => {
    fetch(`http://localhost:5000/cocktails`)
      .then(response => response.json())
      .then(data => setCocktails(data))
      .catch(error => console.error('Error fetching cocktails', error));
  }, [type, drinkId]);

  useEffect(() => {
    fetch(`http://localhost:5000/drinks`)
      .then(response => response.json())
      .then(data => setDrinks(data))
      .catch(error => console.error('Error fetching drinks', error));
  }, [type]);

  const filteredCocktails = cocktails.filter(
    cocktail =>
      cocktail.alcoholic === isAlcoholic &&
      cocktail.ingredients.some(ingredient => {
        console.log(ingredient.drinkId === drinkId);
        return ingredient.drinkId === drinkId;
      })
  );

  const handleClick = cocktailId => {
    fetch(`http://localhost:5000/cocktails/${cocktailId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCocktail(data);
      })
      .catch(error => console.error('Error fetching cocktail details', error));
  };

  const handleClose = () => {
    setSelectedCocktail(null);
  };

  return (
    <div>
      <HeaderContent>
        <div>
          <h3>Coctails</h3>
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
      {selectedCocktail && (
        <ModalBackground>
          <CocktailModal
            cocktail={selectedCocktail}
            drinks={drinks}
            onClose={handleClose}
          />
        </ModalBackground>
      )}
    </div>
  );
}

export default CocktailList;
