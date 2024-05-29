import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NoItemsFound from "../../shared-components/NoItemsFound/NoItemsFound";
import Item from "../../shared-components/Item/Item";
import CustomButton from "../../shared-components/CustomButton/CustomButton";

function DrinkList() {
  const { type } = useParams();
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/drinks`)
      .then((response) => response.json())
      .then((data) => setDrinks(data))
      .catch((error) => console.error("Error fetching drinks", error));
  }, [type]);

  const filteredDrinks = drinks.filter(
    (drink) =>
      (type === "alcoholic" && drink.alcoholic) ||
      (type === "non-alcoholic" && !drink.alcoholic)
  );

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
    alignItems: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  return (
    <div>
      <div style={headerContentStyle}>
        <div>
          <h3>Drinks</h3>
        </div>
        <div>
          <CustomButton to={`/browse`}>Back to type</CustomButton>
        </div>
      </div>
      <div style={coctailContainer}>
        {filteredDrinks.length > 0 ? (
          filteredDrinks.map((drink) => (
            <Item
              drinkType={drink}
              useLink={true}
              linkTo={`/type/${type}/drink/${drink._id}`}
            />
          ))
        ) : (
          <NoItemsFound message="No drinks found of this type."></NoItemsFound>
        )}
      </div>
    </div>
  );
}

export default DrinkList;
