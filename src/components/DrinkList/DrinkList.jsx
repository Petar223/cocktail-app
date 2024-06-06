import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoItemsFound from '../../shared-components/NoItemsFound/NoItemsFound';
import Item from '../../shared-components/Item/Item';
import CustomButton from '../../shared-components/CustomButton/CustomButton';
import HeaderContent from '../Header/components/HeaderContent/HeaderContent';
import ItemContainer from '../../shared-components/styledComponents/ItemContainer/ItemContainer';

function DrinkList() {
  const { type } = useParams();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/drinks`)
      .then(response => response.json())
      .then(data => setDrinks(data))
      .catch(error => console.error('Error fetching drinks', error));
  }, [type]);

  const filteredDrinks = drinks?.filter(
    drink =>
      (type === 'alcoholic' && drink.alcoholic) ||
      (type === 'non-alcoholic' && !drink.alcoholic)
  );

  return (
    <div>
      <HeaderContent>
        <div>
          <h3>Drinks</h3>
        </div>
        <div>
          <CustomButton to={`/browse`}>Back to type</CustomButton>
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
            />
          ))
        ) : (
          <NoItemsFound message="No drinks found of this type."></NoItemsFound>
        )}
      </ItemContainer>
    </div>
  );
}

export default DrinkList;
