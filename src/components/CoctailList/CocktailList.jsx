import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CocktailModal from "../../modals/CocktailModal";
import "./CocktailList.css";
import NoItemsFound from "../../shared-components/NoItemsFound/NoItemsFound";
import Item from "../../shared-components/Item/Item";
import CustomButton from "../../shared-components/CustomButton/CustomButton";

function CocktailList() {
  const { drinkId, type } = useParams();
  const isAlcoholic = type === "alcoholic";
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [cocktails, setCocktails] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cocktails`)
      .then((response) => response.json())
      .then((data) => setCocktails(data))
      .catch((error) => console.error("Error fetching cocktails", error));
  }, [type, drinkId]);

  useEffect(() => {
    fetch(`http://localhost:5000/drinks`)
      .then((response) => response.json())
      .then((data) => setDrinks(data))
      .catch((error) => console.error("Error fetching drinks", error));
  }, [type]);

  const filteredCocktails = cocktails.filter(
    (cocktail) =>
      cocktail.alcoholic === isAlcoholic &&
      cocktail.ingredients.some((ingredient) => {
        console.log(ingredient.drinkId === drinkId);
        return ingredient.drinkId === drinkId;
      })
  );

  const handleClick = (cocktailId) => {
    fetch(`http://localhost:5000/cocktails/${cocktailId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedCocktail(data);
      })
      .catch((error) =>
        console.error("Error fetching cocktail details", error)
      );
  };

  const handleClose = () => {
    setSelectedCocktail(null);
  };

  const headerContentStyle = {
    display: "flex",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    textAlign: "left",
    fontSize: "2em",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    padding: "10px",
    borderRadius: "8px",
    margin: "32px",
  };

  const coctailContainer = {
    display: "flex",
    margin: "32px",
    justifyContent: "flex-start",
    alignItems: "self-start",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <div>
      <div style={headerContentStyle}>
        <div>
          <h3>Coctails</h3>
        </div>
        <div>
          <CustomButton to={`/type/${type}`}>Back to Drinks</CustomButton>
        </div>
      </div>
      <div style={coctailContainer}>
        {filteredCocktails.length > 0 ? (
          filteredCocktails.map((cocktail) => (
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
