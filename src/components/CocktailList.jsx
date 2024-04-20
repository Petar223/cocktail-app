import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CocktailModal from "../modals/CocktailModal";
import "./CocktailList.css";
import HeaderWithBackButton from "../shared-components/HeaderWithBackButton";
import NoItemsFound from "../shared-components/NoItemsFound";

function CocktailList({ cocktails, drinks }) {
  const { drinkId, type } = useParams();
  const isAlcoholic = type === "alcoholic";
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const navigate = useNavigate();

  const filteredCocktails = cocktails.filter(
    (cocktail) =>
      cocktail.alcoholic === isAlcoholic &&
      cocktail.ingredients.some(
        (ingredient) => ingredient.drinkId.toString() === drinkId
      )
  );

  const handleClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleClose = () => {
    setSelectedCocktail(null);
  };

  const handleBack = () => {
    navigate(`/type/${type}`);
  };

  return (
    <div>
      <HeaderWithBackButton
        title="Cocktails"
        buttonText="Back to Drinks"
        onBackClick={handleBack}
      />
      <div className="select-cocktail-title">
        <h2>Which cocktail would you like to make?</h2>
      </div>
      <div className="cocktail-container">
        {filteredCocktails.length > 0 ? (
          filteredCocktails.map((cocktail) => (
            <div
              key={cocktail.name}
              className="cocktail-item"
              onClick={() => handleClick(cocktail)}
            >
              <img
                src={cocktail.imageUrl}
                alt={cocktail.name}
                className="cocktail-image"
              />
              <h3 className="cocktail-name">{cocktail.name}</h3>
            </div>
          ))
        ) : (
          <NoItemsFound message="No cocktails found with this ingredient."></NoItemsFound>
        )}
      </div>
      {selectedCocktail ? (
        <div className="modal-background">
          <CocktailModal
            cocktail={selectedCocktail}
            drinks={drinks}
            onClose={handleClose}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CocktailList;
